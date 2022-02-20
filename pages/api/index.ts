import axios from 'axios'

type HomeData = {
    hero_title: string,
    hero_description: string,
    hero_image: object,
    features_title: string,
    featuresIndex: any[],
    slider_title: string,
    cta_title: string,
    cta_description: string,
  }

export const getHomeData = async () => {
    const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;
    const result = await axios.get(`${url}/homepage`)
    const homeData : HomeData = result.data
    return homeData
}

  