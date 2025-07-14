import React from 'react'

function BookDetail() {
  return (
    <div className="h-[100vh] mx-[20px] md:mx-[60px] mt-[40px] lg:mt-[80px]">
        <h6 className="font-bold text-[#483D89] text-[24px] md:text-[30px] mb-[30px]">Book Detail</h6>
        <div className="flex flex-col md:flex-row md:gap-[115px] items-start">
            <img src="./bear.jpg" className="w-[230px] sm:w-[280px] lg:w-[360px] rounded-[30px]" />
            <div className="book-info lg:w-[550px] text-sm md:text-base">
                <h6 className="book-title font-bold mb-[18px] text-[30px] md:text-[40px] mt-[26px] md:mt-0">
                    Benny and the Strength Within
                </h6>
                <div className="book-detail flex mb-[26px]">
                    <div className="book-author mr-[40px]">
                        <p className="text-gray-400 mb-2">Author(s)</p>
                        <p className="">
                            Aliya, Farwizah, Rajihah
                        </p>
                    </div>
                    <div className="book-lang">
                        <p className="text-gray-400 mb-2">Language</p>
                        <p className="">
                            English
                        </p>
                    </div>
                </div>
                <div className="synopsis mb-[26px]">
                    <p className="line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec euismod diam. Cras fermentum elementum mattis. Ut arcu enim, tincidunt vel nibh haverest to nei awul mattis.
                    </p>
                </div>
                <a href="" className="px-[12px] py-[10px] rounded-[10px] font-semibold bg-[#BA84FE] text-white">
                    Start Reading
                </a>
            </div>
        </div>

    </div>
  )
}

export default BookDetail
