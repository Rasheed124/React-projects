import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"


const Navbar = (props: any) => {
    return (
        // Render  Studio Navbar
        <div>

            <div className=" p-6 text-light-white">

                <div className="flex space-y-3 md:space-y-0 flex-col md:flex-row justify-between  items-center">
                   <Link target="_blank" href="/" className=" flex items-center uppercase">
                      <ArrowUturnLeftIcon className="h-6 w-6  mr-2 mb-3 md:mb-0" />
                      Go To website
                  </Link>
                  <div className="flex items-center space-x-2">
                  <Link href="/api/preview" target="_blank" className="font-bold text-lg font-Antonio border px-5 py-2">
                    Go Preview
                  </Link>
                  <Link href="/api/exit-preview" target="_blank"  className="font-bold text-lg font-Antonio  border px-5 py-2">
                    Exit Preview
                  </Link>
                  </div>
                 
                </div>
           

                <div className="py-8  text-center">
                    <p className="text-xl font-Antonio uppercase">Duromedia Abdulhad Studio</p>
                </div>
            </div>

            {/* Render Default Studio Navbar */}
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default Navbar