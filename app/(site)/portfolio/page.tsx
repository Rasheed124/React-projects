


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import { getPortFolioProjectsQuery } from "@/schemas/utils/sanity.utils";
import PortfolioProject from "@/components/site/Portfolio/Portfolio"
import PreviewPortfolio from "@/components/site/Portfolio/PreviewPortfolio";

const ProjectsQuery = getServerSideQueries().PortFolioProjectsQuery;

export default async function Portfolio() {
    const { isEnabled } = draftMode();

    const portfolio  =  await getPortFolioProjectsQuery()




    // SETTING PREVIEW MODE
    if (isEnabled) {
        return (

            <PreviewSuspense fallback={
            <div role="status" className="flex min-h-screen justify-center items-center bg-deep-black">
                <p className="text-center text-lg text-light-white  ">
                    Loading Preview Data....
                </p>
            </div>
        }>

               <div className=" text-light-white">
                   <Layout route="/contact">


                    <PortfolioProject projects={portfolio}  />
           

                  </Layout>

      

               </div>
        </PreviewSuspense>



        );
    }


    return (
    <div className=" text-light-white ">

        <Layout route="/projects"  >


             <PortfolioProject projects={portfolio}  />
           

        </Layout>

      
            
            
    </div>

   


  
       
    );
}