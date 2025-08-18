import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-white px-[20px] md:px-[60px] py-[20px] z-1000 shadow-sm fixed top-0">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content rounded-box z-1 mt-3 w-52 p-2 bg-white shadow-sm">
                    <li>
                        <Link to={`/`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/menu'} onClick={() => window.scrollTo(0, 0)}>Collection</Link>
                    </li>
                    <li className="block sm:hidden">
                        <a href='#footer-section'>Contact</a>
                    </li>
                </ul>
            </div>
            <Link to={`/`} onClick={() => window.scrollTo(0, 0)} className="font-light ml-[20px] lg:ml-0 text-xl md:text-[30px]">whatsin<span className="font-bold text-[#483D89]">Quran</span></Link>
        </div>
        <div className="navbar-end hidden lg:flex items-center">
            <ul className="menu text-base menu-horizontal px-1 gap-[30px]">
                <li>
                    <Link to={`/`} onClick={() => window.scrollTo(0, 0)}>Home</Link>
                </li>
                <li>
                    <Link to={'/menu'} onClick={() => window.scrollTo(0, 0)}>Collection</Link>
                </li>
                <li>
                    <a href="#footer-section" className="border-[#BA84FE] text-[#BA84FE] rounded-xl font-bold border-1 px-[12px] py-[8px] hover:bg-[#BA84FE] hover:text-white">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
        <div className="navbar-end hidden sm:flex lg:hidden">
            <a href="#footer-section" className="border-[#BA84FE] text-[#BA84FE] rounded-xl font-bold border-1 px-[12px] py-[8px] hover:bg-[#BA84FE] hover:text-white">
                Contact
            </a>
        </div>
        </div>
  )
}

export default Navbar
