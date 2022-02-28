import axios from "axios";
import { GetStaticProps, GetStaticPaths} from 'next'

import Leto from '../components/profiles/Leto';
import Baco from '../components/profiles/Baco';

interface Props {
    profile:{
      baco?:object,
      leto?:{
        leto_bg:{
          url:string
        },
        leto_name:string,
        leto_name_textColor:string, 
        leto_links:[any],
        leto_links_textColor: string,
        leto_links_bgColor:string,
        leto_icons:[any]
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
