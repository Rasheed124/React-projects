

import Link from "next/link"

const Header = () => {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 ">
            <div className="flex items-center">
                <Link href="">
                    <h2 className="text-lg text-[#F7AB0] border-[#F7AB0A] rounded-full p-2">Rasheed</h2>
                </Link>
            </div>

            <div>
                <Link
                    href="https://ww.duromediaacademy.com.ng"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
                >

                    Sign up to the Duromedia Academy of Code

                </Link>
            </div>
        </header>
    )
}

export default Header