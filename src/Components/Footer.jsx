import React from 'react'
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <footer class="bg-bg  ">
            <div class="w-full max-w-screen mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center  text-2xl font-semibold whitespace-nowrap text-primary">HAMEAU DES JEUNES St. KIZITO MUSHA</span>
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
                <hr class="my-6 border-primary sm:mx-auto  lg:my-8" />
                <div className='flex flex-row justify-between'>
                    <span className="block text-sm text-primary sm:text-center ">
                        © {new Date().getFullYear()} <NavLink to="/" className="hover:underline">HAMEAU DES JEUNES SAINT KIZITO MUSHA™</NavLink>. All Rights Reserved.
                    </span>
                    <div>
                        Need a site whatsapp us here - +250736947422 / +250
                    </div>
                </div>


            </div>
        </footer>
</div>
  )
}

export default Footer