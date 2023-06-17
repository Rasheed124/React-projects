    import Image from "next/image";
    import Link from "next/link";



    type Props = {
        homeBanners: HomeBanner[];
    };


    const HomeBanner = ({ homeBanners }: Props) => {

       

        return(

                <div className="">
                    {homeBanners.map(homeBanner => (
                    <div key={homeBanner._id}  className="flex flex-col pt-10 px-2   text-center ">
                                {/* HEADER CONTENT */}

                                <div className="max-w-sm sm:max-w-lg  md:max-w-3xl mx-auto  mb-10 p-2 lg:py-16">
                                    <div className="   leading-[10rem] flex justify-center items-center  ">
                                        <h2 className="text-[6rem] text-light-white sm:whitespace-nowrap sm:text-[4.2rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[10rem] sm:px-5  font-Antonio leading-[7rem] lg:tracking-[-0.5rem] ">{homeBanner.name}</h2>
                                    </div>
                                </div> 

                                <div className="flex flex-col  justify-center md:flex-row md:justify-between space-y-2 md:space-y-0 md:space-x-3 mb-10 px-5 xl:px-20">
                                    <div className=" xl:w-full xl:max-w-lg xl:flex xl:flex-col xl:justify-start xl:items-start">
                                        <p className="text-xs"> <span>{homeBanner.address.slice(0, 1)}</span> {homeBanner.address.slice(1)}</p>
                                    </div>
                                    <div className=" xl:w-full xl:max-w-lg xl:flex xl:flex-col xl:justify-start xl:items-center">
                                        <p className="text-xs space-x-3">

                                            {homeBanner.skills}
                                            {/* <span className="mr-3">DIGITAL STRATEGY</span>|<span className="mr-3">SOCIAL MEDIA </span>|<span>COPYWRITING</span> */}
                                            
                                        </p>
                                    </div>
                                    <div className=" xl:w-full xl:max-w-lg xl:flex xl:flex-col xl:justify-center xl:items-end">

                                        <Link href={`${homeBanner.handle}`}>
                                            <p className="text-xs"> {homeBanner.handleText} </p>
                                        </Link>
                                    </div>

                                </div>

                                {/* HEADER BANNER IMAGE */}
                              
                                <div className="hidden relative bg-cover bg-center bg-no-repeat min-h-[45vh] xl:flex justify-center items-center">
                                        <Image 
                                        src={homeBanner.bannerImage}
                                         alt={homeBanner.name}
                                        fill
                                        className="w-full "
                                    /> 
                                </div>

                            </div >


                    ))}
                </div>

        
            
       
        
        )


    }

    export default HomeBanner