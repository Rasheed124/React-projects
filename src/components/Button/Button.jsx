import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Button = ({ title, hoverColor = "hover:text-header-dark-overlay" }) => {
    return (

        <Link className={`block hover:transition-colors duration-500 ${hoverColor}`} id="btn-link" to="">
            <div className="flex justify-center items-center gap-3 text-lg font-Antonio">
                <div className="uppercase">
                    {title}
                </div>
                <div className="relative btn overflow-x-hidden">
                    <span>
                        <HiArrowNarrowRight className="text-3xl hover:transform hover:-translate-x-full hover:transition-transform hover:duration-500" />
                    </span>
                    <span className="absolute top-0 left-0 transform -translate-x-full transition-transform duration-500">
                        <HiArrowNarrowRight className="text-3xl" />
                    </span>
                </div>
            </div>

        </Link>

    )
}

export default Button