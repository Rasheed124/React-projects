


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import { getBlogList } from "@/schemas/utils/sanity.utils";

import Categories from "@/components/site/Blog/Categories";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import PreviewCategories from "@/components/site/Blog/PreviewCategories";


const CategoryListQuery = getServerSideQueries().BlogListQuery

export default async function Blog() {
    const { isEnabled } = draftMode();

    const categoryList =  await getBlogList()




    // SETTING PREVIEW MODE
    if (isEnabled) {
        return (

            <PreviewSuspense fallback={
            <div role="status" className="flex min-h-screen justify-center items-center ">
                <p className="text-center text-lg text-light-white  ">
                    Loading Preview Data....
                </p>
            </div>
        }>

               <div className=" text-deep-black px-4 xl:px-0">
                  {/* Preview Blog List */} 
                   <PreviewCategories query={CategoryListQuery} />
                    

               </div>
        </PreviewSuspense>



        );
    }


    return (
    <div className=" text-deep-black px-4 xl:px-0">

    <Layout route="/contact">

        <Categories posts={categoryList} />
        
    </Layout>

      
            
            
    </div>

   


  
       
    );
}