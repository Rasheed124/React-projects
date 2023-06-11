
import { draftMode } from "next/headers";

import { groq } from "next-sanity";

import PreviewSuspense from "@/components/site/PreviewSuspense";
import { getHomeBanner } from '@/schemas/utils/sanity.utils';
import PreviewBanner from '@/components/site/HomeBanner/PreviewBanner';

import Banner from '@/components/site/HomeBanner/Banner'



const query =  
   groq`*[_type == "homeBanner"]{
            _id, 
            name,
            address,
            skills,
            handleText,
            "bannerImage" : bannerImage.asset->url,
            "handle": handle.current,
    
        }`



export default async function Home() {
    const { isEnabled } = draftMode();

    const homeBanners = await getHomeBanner();

  
    if (isEnabled) {
        return (

            <PreviewSuspense fallback={
            <div role="status" className="flex min-h-screen justify-center items-center bg-deep-black">
                <p className="text-center text-lg text-light-white  ">
                    Loading Preview Data....
                </p>
            </div>
        }>

            {/* Preview Blog List */}
            <PreviewBanner query={query}  />

        </PreviewSuspense>



        );
    }


    return (
    <div className="bg-deep-black text-light-white px-4 xl:px-0">
               <Banner homeBanners={homeBanners} />
        
    </div>

   


  
       
    );
}