import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"


const Navbar = (props: any) => {
    return (
        // Render Default Studio Navbar
        <div>

            <div className=" p-6 text-light-white">

                <div className="flex justify-start items-start">
                   <Link href="/" className=" flex items-center uppercase">
                      <ArrowUturnLeftIcon className="h-6 w-6  mr-2" />
                      Go To website
                  </Link>
                </div>
           

                <div className="py-8  text-center">
                    <p className="text-xl font-Antonio">Duromedia Abdulhad Studio</p>
                </div>
            </div>

            {/* Render Default Studio Navbar */}
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default Navbar