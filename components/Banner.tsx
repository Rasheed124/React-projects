

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">

            <div>
                <h1 className="text-7xl">Rasheed Daily Blog</h1>
                <h2 className="mt-5 md:mt-0"> Welcome to{" "}
                    <span className="underline decoration-4 decoration-[#F7AB0A]">
                        Every Developers
                    </span>{" "}
                    favourite blog in the Developers
                </h2>
            </div>


            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla mollitia neque fugit blanditiis iste illo eos officiis optio maiores sunt laborum earum, odit veritatis libero laboriosam amet velit ab.
            </p>
        </div>
    )
}

export default Banner