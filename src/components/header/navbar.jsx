import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-white px-[20px] md:px-[60px] py-[20px] z-1000 shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-md dropdown-content rounded-box z-1 mt-3 w-52 p-2 bg-white shadow-sm">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Collection</a>
                    </li>
                    <li className="block sm:hidden">
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <a className="font-light ml-[20px] lg:ml-0 text-xl md:text-[30px]">whatsin<span className="font-bold text-[#483D89]">quran</span></a>
        </div>
        <div className="navbar-end hidden lg:flex items-center">
            <ul className="menu text-base menu-horizontal px-1 gap-[30px]">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>Collection</a>
                </li>
                <li>
                    <a href="" className="border-[#BA84FE] text-[#BA84FE] rounded-xl font-bold border-1 px-[12px] py-[8px] hover:bg-[#BA84FE] hover:text-white">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
        <div className="navbar-end hidden sm:flex lg:hidden">
            <a href="" className="border-[#BA84FE] text-[#BA84FE] rounded-xl font-bold border-1 px-[12px] py-[8px] hover:bg-[#BA84FE] hover:text-white">
                Contact
            </a>
        </div>
        </div>
  )
}

export default Navbar
