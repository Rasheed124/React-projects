import Image from 'next/image'




export default function Home() {


  return (

    <main className="">

      <section className='intro-container py-20 px-6 '>
         <div className=' px-4 md:max-w-xl py-2'>
           <div className=''>

              <h4 className='font-calibre-Bold text-xl text-accent-color font-bold'> Hi, my name is</h4>

            <div className='space-y-2 my-5 max-w-2xl pr-10 '>
               <h2 className='font-bold font-calibre-Bold  text-4xl'>Rasheed Tolulope.</h2>
               <h3 className='font-bold opacity-70  text-4xl'>I build things for the web.</h3>

            </div>
   

            
            <p className='text-lg opacity-70 '>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at 
            
           {" "} <a href="#" className="text-accent-color relative after:content-[''] after:absolute after:-bottom-1 after:left-0  after:w-0 after:h-0 hover:transition-all hover:duration-700 after:bg-accent-color hover:after:w-full hover:after:h-0.5">Ascent</a> 
            </p>
            <div className='mt-10'>

              <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-accent-color group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-accent-color group-hover:bg-accent-color"></span>
                <span className="relative text-black group-hover:text-white">Check my course! </span>
              </a>

              {/* <a href="#" 
              className='duration-700 border-2 transition-colors hover:bg-transparent hover:border-2 border-accent-color py-4 px-10 text-center bg-accent-color'>
                Check out my course!
              </a> */}
            </div>

           </div>
         </div>
      </section>
      

    </main>

  )
}
