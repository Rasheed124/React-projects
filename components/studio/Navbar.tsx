import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"


const Navbar = (props: any) => {
    return (
        // Render Default Studio Navbar
        <div>

            <div className="flex justify-between items-center p-6 ">
                <Link href="/" className="text-[#F7AB0A] flex items-center uppercase">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#F7AB0A] mr-2" />
                    Go To website
                </Link>

                <div className="p-4 border-[#F7AB0A] text-center">
                    <p>Duromedia Content Studio is Live Here - Building Sanity + NextJs</p>
                </div>
            </div>

            {/* Render Default Studio Navbar */}
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default Navbar