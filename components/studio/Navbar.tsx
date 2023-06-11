import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"


const Navbar = (props: any) => {
    return (
        // Render Default Studio Navbar
        <div>

            <div className="flex justify-between items-center p-6 ">

                <div>
                   <Link href="/" className="text-light-white flex items-center uppercase">
                      <ArrowUturnLeftIcon className="h-6 w-6 text-light-white mr-2" />
                      Go To website
                  </Link>
                </div>
           

                <div className="py-8  text-center">
                    <p className="text-xl">Duromedia Content Studio is Live Here - Building Sanity + NextJs</p>
                </div>
            </div>

            {/* Render Default Studio Navbar */}
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default Navbar