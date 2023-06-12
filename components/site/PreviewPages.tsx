"use client";


import { usePreview } from "@/lib/sanity.preview"


type Props = {
    query: string;
}


export default function  PreviewPages(
       { 
        Component
       } : any,
        { query }: Props,
     
    
    ) {

       const pageQuery = usePreview(null, query);
         // Modified but not yet publish

    return (

  
       <Component pages= {pageQuery} Component={Component} />

      
    );
}
