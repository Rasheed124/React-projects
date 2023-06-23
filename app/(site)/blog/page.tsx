


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import { getBlogList } from "@/schemas/utils/sanity.utils";

import BlogList from "@/components/site/Blog/BlogList";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import PreviewBlogList from "@/components/site/Blog/PreviewBlogList";


const BlogListQuery = getServerSideQueries().BlogListQuery

export default async function Blog() {
    const { isEnabled } = draftMode();

    const blogList =  await getBlogList()




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
                   <PreviewBlogList query={BlogListQuery} />
                    

               </div>
        </PreviewSuspense>



        );
    }


    return (
    <div className=" text-deep-black px-4 xl:px-0">

        <Layout route="/contact">

            <BlogList posts={blogList} />
           
        </Layout>

      
            
            
    </div>

   


  
       
    );
}