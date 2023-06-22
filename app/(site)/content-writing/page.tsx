


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import ContentWriting from "@/components/site/ContactWriting/ContentWriting";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import { getContact } from "@/schemas/utils/sanity.utils";




const ContactQuery = getServerSideQueries().ContactQuery


export default async function ContactWriting() {
    const { isEnabled } = draftMode();

    const contacts = await getContact();


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

               <div className=" text-light-white ">
                  {/* Preview Blog List */} 
                   <div>

            

                   </div>
                    

               </div>
        </PreviewSuspense>



        );
    }


    return (
       <div className=" text-deep-black ">

        <Layout route="/contact">

             <ContentWriting  />
         
            
        </Layout>

      
            
            
    </div>

   


  
       
    );
}