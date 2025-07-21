import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <footer class="bg-bg  ">
            <div class="w-full max-w-screen mx-auto p-4 md:py-8">
                <div class="sm:flex  sm:items-center sm:justify-between ">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center  text-md font-semibold whitespace-nowrap text-primary">HAMEAU DES JEUNES St. KIZITO MUSHA</span>
                    </NavLink>
                    <ul className="flex flex-wrap items-center mb-6  text-sm font-medium  ">
                        <li>
                        <NavLink
                            to="/"
                            className="hover:underline me-4 md:me-6"
                            aria-current="page"
                        >
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/Blogs"
                            className="hover:underline me-4 md:me-6"
                        >
                            Blogs
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/Gallery"
                            className="hover:underline me-4 md:me-6"
                        >
                            Gallery
                        </NavLink>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-primary sm:mx-auto  lg:my-8 " />
                <div className='flex flex-col gap-[20px] md:flex-row items-center  justify-between'>
                    <span className="block text-sm text-primary sm:text-center text-center ">
                        © {new Date().getFullYear()} <NavLink to="/" className="hover:underline">HAMEAU DES JEUNES SAINT KIZITO MUSHA™</NavLink>. All Rights Reserved.
                    </span>
                    <div classname="w-full">
                        {/* <span className='text-md font-bold text-green-600'>Text us on </span> */}
                        <a rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300" href="https://wa.me/+250788436189"> <FaWhatsapp className="text-3xl"/></a>
                    </div>
                </div>
            </div>
        </footer>
</div>
  )
}

export default Footer