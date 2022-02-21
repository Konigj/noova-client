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

  export const getStrapiData = async () => {
    const [homeRes, productsRes] = await Promise.all([
      axios.get('https://noova-server.herokuapp.com/homepage'),
      axios.get('https://noova-server.herokuapp.com/products')
    ])
    const homeData = homeRes.data
    const productsData = productsRes.data
    return [homeData, productsData]
  }

  // export const getStrapiData = async () => {
  //   const [homeRes, productsRes] = await Promise.all([
  //     fetch('https://noova-server.herokuapp.com/homepage'),
  //     fetch('https://noova-server.herokuapp.com/products')
  //   ]);

  //   const [homeData, productsData] = await Promise.all([
  //     homeRes.json(),
  //     productsRes.json()
  //   ])
  //   return [homeData, productsData]
  // }