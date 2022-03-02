import axios from "axios";
import { GetStaticProps, GetStaticPaths} from 'next'

import LayoutProfiles from "../components/Layout/LayoutProfiles";
import Leto from '../components/profiles/Leto';
import Baco from '../components/profiles/Baco';
import Juno from '../components/profiles/Juno';
import Mino from '../components/profiles/Mino';

interface Props {
    profile:{
      baco?:{
        baco_bg:string,
        baco_Image:{
          url:string
        }
        baco_name:string,
        baco_name_textColor:string,
        baco_description:string,
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
      juno?:{
        
      },
      mino?: {
        mino_bg:{
          url:string
      },
         mino_name:string,
         mino_name_textColor:string,
         mino_description:string,
         mino_ubication:string
         mino_logo:{
          url:string
      },
      mino_icons:object,
      mino_icons_color:string,
      mino_links:object,
      mino_links_textColor:string,
      mino_links_bg:string,
      },
      slug:string
    }
  }


const Profile = ({profile}:Props) => {

  return (
    <LayoutProfiles slug={profile.slug}>
      {profile.leto && <Leto profile={profile.leto}/>}
      {profile.baco && <Baco profile={profile.baco}/>}
      {profile.juno && <Juno profile={profile.juno}/>}
      {profile.mino && <Mino profile={profile.mino}/>}
    </LayoutProfiles>
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
