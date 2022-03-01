import axios from "axios";
import { GetStaticProps, GetStaticPaths} from 'next'

import Leto from '../components/profiles/Leto';
import Baco from '../components/profiles/Baco';

interface Props {
    profile:{
      baco?:{
        baco_bg:string,
        baco_Image:{
          url:string
        }
        baco_name:string,
        baco_name_textColor:string,
        baco_links:[any],
        baco_links_bg:string,
        baco_links_textColor:string,
        baco_icons:[any],
        baco_icons_color:string,
        baco_footer_logo:{
          url:string
        },
      }
      leto?:{
        leto_bg:{
          url:string
        },
        leto_name:string,
        leto_name_textColor:string, 
        leto_links:[any],
        leto_links_textColor: string,
        leto_links_bgColor:string,
        leto_icons:[any],
        leto_icons_color:string,
        leto_footer_logo:{
          url:string
        }
          }, 
        }
  }


const Profile = ({profile}:Props) => {

  return (
    <>
      {profile.leto && <Leto profile={profile.leto}/>}
      {profile.baco && <Baco profile={profile.baco}/>}
    </>


  )
}

export default Profile




export const getStaticPaths = async () => {

    const profilesRes = await axios.get('https://noova-server.herokuapp.com/profiles');
  
    const profilesData = profilesRes.data

    const paths = profilesData.map( (profile:{slug:string}) => ({
      params:{profiles:profile.slug}
      }));
    
    return {
        paths,
        fallback: false,
    }
};


export const getStaticProps: GetStaticProps = async ({params}:any) => {

  try {

    const profilesData = await axios.get(`https://noova-server.herokuapp.com/profiles/${params.profiles}`);
    return{
        props:{
            profile: profilesData.data
        }, revalidate: 10
    }
    
  } catch (error) {
    
    return {
      notFound: true,
    }
  }

  
}
