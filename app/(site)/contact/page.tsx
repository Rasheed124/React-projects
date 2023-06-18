


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";


export default async function Contact() {
    const { isEnabled } = draftMode();




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

               <div className=" text-light-white px-4 xl:px-0">
                  {/* Preview Blog List */} 
                   <div>

                   </div>
                    

               </div>
        </PreviewSuspense>



        );
    }


    return (
    <div className="bg-deep-black text-light-white px-4 xl:px-0">

        <Layout route="/contact">

             <div>Welcome to my Contact Page

             </div>
        </Layout>

      
            
            
    </div>

   


  
       
    );
}