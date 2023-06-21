


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import { getAbout } from "@/schemas/utils/sanity.utils";
import AboutContainer from "@/components/site/About/AboutContainer";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import PreviewAbout from "@/components/site/About/PreviewAboutContainer";



const AboutQuery = getServerSideQueries().AboutQuery;

export default async function About() {
    const { isEnabled } = draftMode();


    const aboutContainer = await getAbout();





    // SETTING PREVIEW MODE
    if (isEnabled) {
        return (

            <PreviewSuspense fallback={
            <div role="status" className="flex min-h-screen justify-center items-center">
                <p className="text-center text-lg text-light-white  ">
                    Loading Preview Data....
                </p>
            </div>
        }>

               <div className=" text-light-white ">
                  {/* Preview Blog List */} 
                   <div>

                    <PreviewAbout query={AboutQuery} />

                   </div>
                    

               </div>
        </PreviewSuspense>



        );
    }


    return (
    <div className=" text-light-white ">

        <Layout route="/about" >

            <AboutContainer abouts={aboutContainer} />
            

            
        </Layout>

      
            
            
    </div>

   


  
       
    );
}