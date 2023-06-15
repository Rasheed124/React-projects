


import { draftMode } from "next/headers";


import PreviewSuspense from "@/components/site/PreviewSuspense";
import { getHomeBanner, getProjects, getSkills, getTestimonials } from '@/schemas/utils/sanity.utils';
import PreviewBanner from '@/components/site/HomeBanner/PreviewBanner';

import Banner from '@/components/site/HomeBanner/Banner'

import Skills from "@/components/site/Skills/Skills";
import PreviewSkills from "@/components/site/Skills/PreviewSkills";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import Projects from "@/components/site/Projects/Projects";
import PreviewProjects from "@/components/site/Projects/PreviewProjects";
import Testimonial from "@/components/site/Testimonial/Testimonial";



const BannerQuery = getServerSideQueries().BannerQuery;

const SkillQuery = getServerSideQueries().SkillQuery;


const ProjectsQuery = getServerSideQueries().ProjectsQuery;



export default async function Home() {
    const { isEnabled } = draftMode();


    // FETCHING DATA
    const homeBanners = await getHomeBanner();
    const skills = await getSkills();
    const projects = await getProjects();
    const testimonials = await getTestimonials();

  

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
                  <PreviewBanner query={BannerQuery}  />

                    <PreviewSkills query={SkillQuery}  /> 

                    <PreviewProjects query={ProjectsQuery} />


                    

               </div>
        </PreviewSuspense>



        );
    }


    return (
    <div className="bg-deep-black text-light-white px-4 xl:px-0">

            {/* BANNERS */}
                <Banner homeBanners={homeBanners} />
           
            {/* SKILLS */}
                <Skills skills={skills} />
          
             {/* PROJECTS */}
                  <Projects projects={projects} />

             {/* Testimonials */}
             <Testimonial testimonials={testimonials} />
            
            
    </div>

   


  
       
    );
}