    import Image from "next/image";
    import Link from "next/link";



    type Props = {
        skills: Skills[];
    };


    const Skills = ({ skills }: Props) => {

       

        return(

             
               <section className="py-14 ">

                {skills.map( skill => (

                      <div id={skill._id} className="flex flex-col max-w-6xl mx-auto  ">
                        <div className="  text-center py-7 px-5 ">
                    

                                <h2 className="font-Sohne-Bold text-lg pb-3 mb-5 xl:mb-0">{skill.heading}</h2>
                                <div className="   hidden xl:block xl:mb-16">
                                    <h3 className="font-migra-light italic font-thin text-3xl xl:text-6xl">Creating  <span className="text-light-overlay">data-driven</span>  strategies and immersive content for <span className="text-light-overlay">meaningful</span>  communities.</h3>


                                </div>
                         

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5  w-full px-5 ">
                                  
                            </div>
                        </div>

                        <div className="self-center mt-10">
                            {/* <Button title={"Get in touch"} /> */}
                        </div>

                    </div>
                ))}
                  
                </section>

           

        
        
        )


    }

    export default Skills