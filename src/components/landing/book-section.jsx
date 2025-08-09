import React from 'react'
import { Link } from 'react-router-dom'
import datas from '../../../src/data/books.json'

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
                    <p className="mb-[18px] md:mb-0 text-sm md:text-base">
                        Explore curated books that offer stories, thoughtful reflections, and meaningful lessons.
                    </p>
                </div>
                <div className="">
                    <Link to={`/collection`} onClick={() => window.scrollTo(0, 0)} className="btn px-[12px] py-[10px] border-0 rounded-[10px] font-semibold bg-[#BA84FE] text-white text-sm md:text-base">
                        Browse All
                    </Link>
                </div>
            </div>

            {/* card */}
            <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-[20px]">
                {datas && datas.slice(0,4).map(({id, title, author, img}) =>
                (
                    <Link to={`/book-detail/${id}`} className="card max-sm:card-side bg-white w-fit shadow-sm rounded-[22px] hover:bg-accent">
                        <figure className="px-[10px] py-[10px]">
                            <img src={`./book-img/${img}`} className="rounded-xl" />
                        </figure>
                        <div className="card-body max-sm:p-[8px]">
                            <h2 className="card-title sm:line-clamp-1">{title}</h2>
                            <p className="book-author text-gray-400">
                                {author}
                            </p>
                        </div>
                    </Link>
                )) 
                }
            </div>
        </div>
    </div>

    <div className="book-language mb-[170px]">
        <div className="trapezoid-background relative max-lg:h-[600px] lg:min-h-[720px] bg-[#33187A]">
            <div className="flex justify-center lg:justify-between items-center w-full px-[20px]">
                <div className="bookshelf-img hidden lg:block absolute bottom-0 left-[120px]">
                    <img src="./bookshelf-image.svg" className="lg:w-70 xl:w-full" />
                </div>
                <div className="lg:w-[412px] absolute z-2 bottom-[120px] lg:bottom-[200px] lg:right-[155px] max-lg:px-[50px] text-center text-white">
                    <h1 className="font-bold text-[26px] md:text-[40px] lg:text-[50px] mb-[24px]">One Collection, Many Languages</h1>
                    <p className="mb-[49px]">
                        Explore Our Books in Malay, English, Indonesian, Arabic, and Japanese
                    </p>
                    <div className="flex justify-center">
                        <div className="flag-img flex gap-[9px] w-fit justify-center rounded-[50px] bg-white px-[21px] py-[7px]">
                            <img src="./flag-img/united-kingdom.png" className="w-[30px] sm:w-[48px] lg:w-[64px]" />
                            <img src="./flag-img/malaysia.png" className="w-[30px] sm:w-[48px] lg:w-[64px]" />
                            <img src="./flag-img/indonesia.png" className="w-[30px] sm:w-[48px] lg:w-[64px]" />
                            <img src="./flag-img/japan.png" className="w-[30px] sm:w-[48px] lg:w-[64px]" />
                            <img src="./flag-img/saudi-arabia.png" className="w-[30px] sm:w-[48px] lg:w-[64px]" />
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
