import React from 'react'

function Book() {
  return (
    <>
    <div className="book-section mt-[140px] mx-[20px] md:mx-[60px]">
        <div className="book-preview mb-[140px]">
            {/* title */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center mb-[54px]">
                <div className="title md:w-[527px]">
                    <h4 className="font-extrabold text-[26px] md:text-[30px] text-[#33187A] mb-[18px]">
                        Explore the wisdom in every page
                    </h4>
                    <p className="mb-[18px] md:mb-0">
                        Explore curated books that offer stories, thoughtful reflections, and meaningful lessons.
                    </p>
                </div>
                <div className="mt-[18px] md:mt-0">
                    <a href="" className="px-[12px] py-[10px] rounded-[10px] font-semibold bg-[#BA84FE] text-white">
                        Browse All Books
                    </a>
                </div>
            </div>
            {/* card */}
            <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-[20px]">
                {/* card */}
                <a href='' className="card max-sm:card-side bg-white w-fit shadow-sm rounded-[22px] hover:bg-accent">
                    <figure className="px-[10px] py-[10px]">
                        <img src="./bear.jpg" className="rounded-xl" />
                    </figure>
                    <div className="card-body max-sm:p-[8px]">
                        <h2 className="card-title sm:line-clamp-1">Benny and the Strength Within</h2>
                        <p className="book-author text-gray-400">
                            Author: Aliya, Farwizah, Rajihah
                        </p>
                    </div>
                </a>
                {/* card */}
                <a href='' className="card max-sm:card-side bg-white w-fit shadow-sm rounded-[22px] hover:bg-accent">
                    <figure className="px-[10px] py-[10px]">
                        <img src="./bear.jpg" className="rounded-xl" />
                    </figure>
                    <div className="card-body max-sm:p-[8px]">
                        <h2 className="card-title sm:line-clamp-1">Benny and the Strength Within</h2>
                        <p className="book-author text-gray-400">
                            Author: Aliya, Farwizah, Rajihah
                        </p>
                    </div>
                </a>
                {/* card */}
                <a href='' className="card max-sm:card-side bg-white w-fit shadow-sm rounded-[22px] hover:bg-accent">
                    <figure className="px-[10px] py-[10px]">
                        <img src="./bear.jpg" className="rounded-xl" />
                    </figure>
                    <div className="card-body max-sm:p-[8px]">
                        <h2 className="card-title sm:line-clamp-1">Benny and the Strength Within</h2>
                        <p className="book-author text-gray-400">
                            Author: Aliya, Farwizah, Rajihah
                        </p>
                    </div>
                </a>
                {/* card */}
                <a href='' className="card max-sm:card-side bg-white w-fit shadow-sm rounded-[22px] hover:bg-accent">
                    <figure className="px-[10px] py-[10px]">
                        <img src="./bear.jpg" className="rounded-xl" />
                    </figure>
                    <div className="card-body max-sm:p-[8px]">
                        <h2 className="card-title sm:line-clamp-1">Benny and the Strength Within</h2>
                        <p className="book-author text-gray-400">
                            Author: Aliya, Farwizah, Rajihah
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div className="book-language mb-[170px]">
        <div className="bg relative">
            <img src="./rectangle.svg" className="w-full h-fit"/>
            <div className="flex justify-between items-stretch w-full absolute bottom-10 lg:bottom-0 px-[20px] lg:px-[155px]">
                <div className="bookshelf-img hidden lg:block">
                    <img src="./bookshelf-image.svg" className="w-30 sm:w-50 lg:w-60 xl:w-full" />
                </div>
                <div className="text-section lg:w-[412px] text-center text-white">
                    <h1 className="font-bold text-[30px] lg:text-[50px] mb-[24px]">One Collection, Many Languages</h1>
                    <p className="mb-[49px]">
                        Explore Our Books in Malay, English, Indonesian, Arabic, and Japanese
                    </p>
                    <div className="flex justify-center">
                        <div className="flag-img flex gap-[9px] w-fit justify-center rounded-[50px] bg-white px-[21px] py-[7px]">
                            <img src="./united-kingdom.png" className="w-[30px] lg:w-[64px]" />
                            <img src="./malaysia.png" className="w-[30px] lg:w-[64px]" />
                            <img src="./indonesia.png" className="w-[30px] lg:w-[64px]" />
                            <img src="./japan.png" className="w-[30px] lg:w-[64px]" />
                            <img src="./saudi-arabia.png" className="w-[30px] lg:w-[64px]" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Book
