import React from 'react'

function Footer() {
  return (
    <>
    <div id="footer-section">
        <div className="bg-[#33187A] text-white px-[40px] md:px-[80px] py-[86px] rounded-t-[50px] mt-[70px] md:mt-0">
            <div className="footer-text w-full flex flex-col sm:flex-row justify-between sm:items-center">
                <p className="text-[30px] md:text-[40px] mb-[20px] md:mb-0 font-bold w-[260px]">
                    Contact Us For More Info
                </p>
                <div className="contact-list text-sm md:text-base">
                    <p>What's in Quran Contacts</p>
                    <div className="flex items-center mt-[22px] mb-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                            <path fill="none" stroke="#BA84FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"></path>
                        </svg>
                        <a href="" target="_blank" className="ml-[13px]">Kuala Lumpur, Malaysia</a>
                    </div>
                    <div className="flex items-center mb-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 48 48">
                            <path fill="none" stroke="#BA84FE" strokeLinejoin="round" strokeWidth={3} d="M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847z"></path>
                        </svg>
                        <a href="https://wa.me/60145197384" target="_blank" className="ml-[13px]">+60 145197384</a>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                            <path fill="#BA84FE" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path>
                        </svg>
                        <a href="mailto:snaliyah.1172@gmail.com" target="_blank" className="ml-[13px]">snaliyah.1172@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright w-full bg-[#FFA7E1] text-[#33187A] py-[18px] px-[20px] sm:px-0">
                <p className="text-center text-xs md:text-base">Copyright © 2025 by App and Web Dev What's in Quran Team </p>
        </div>
    </div>
    </>
  )
}

export default Footer
