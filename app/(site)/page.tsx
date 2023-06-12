


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import { getHomeBanner, getSkills } from '@/schemas/utils/sanity.utils';
import PreviewBanner from '@/components/site/HomeBanner/PreviewBanner';

import Banner from '@/components/site/HomeBanner/Banner'

import Skills from "@/components/site/Skills/Skills";
import PreviewSkills from "@/components/site/Skills/PreviewSkills";
import getServerSideQueries from "@/components/site/getServerSideQueries";


const BannerQuery = getServerSideQueries().BannerQuery;

const SkillQuery = getServerSideQueries().SkillQuery;





export default async function Home() {
    const { isEnabled } = draftMode();

    const homeBanners = await getHomeBanner();
    const skills = await getSkills();

  
    if (isEnabled) {
        return (

            <PreviewSuspense fallback={
            <div role="status" className="flex min-h-screen justify-center items-center bg-deep-black">
                <p className="text-center text-lg text-light-white  ">
                    Loading Preview Data....
                </p>
            </div>
        }>

               <div className=" text-light-white px-4 xl:px-0">
                  {/* Preview Blog List */} 
                  <PreviewBanner query={BannerQuery}  />

                    <PreviewSkills query={SkillQuery}  /> 

               </div>

      


        </PreviewSuspense>



        );
    }


    return (
    <div className="bg-deep-black text-light-white px-4 xl:px-0">

        <div>
               <Banner homeBanners={homeBanners} />
        </div>

         {/* SKILLS */}
         <div>
            <Skills skills={skills} />
         </div>
       
        
    </div>

   


  
       
    );
}