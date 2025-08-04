import React from 'react'
import datas from '../../../src/data/books.json'

function BookCollection() {
  return (
    <div className="min-h-[100vh] mx-[20px] md:mx-[60px] mt-[128px] md:mt-[158px] mb-[58px] md:mb-0">
        {/* filter by title */}
        <div className="relative min-h-[380px] flex flex-col items-center text-white justify-center bg-[#33187A] rounded-[40px] p-[30px] md:px-[58px] md:py-[40px]">
            <img src="./bookshelf-group.svg" className="absolute top-[38px] right-[120px] z-0" />
            <img src="./ornament.svg" className="absolute hidden lg:block top-[90px] left-[380px] z-0" />
            <div className="title text-center">
              <h4 className="font-bold text-[30px] mb-[10px]">
                Explore Our Book Collection
              </h4>
              <p className="mb-[29px]">
                Type a title or keyword to explore our books!
              </p>
            {/* search bar */}
              <div className="filter-book flex justify-center">
                <label className="input border-white border-1 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <path fill="none" stroke="#BA84FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"></path>
                  </svg>
                  <input onChange="" type="text" className="grow text-xs sm:text-sm" placeholder="Search by title" />
                </label>
              </div>

            </div>
        </div>

        {/* filter by language */}
        <div className="filter-lang mt-[69px] mb-[20px]">
          <h4 className="font-bold text-[30px] mb-[20px] text-[#483D89]">
            Filter by Language Category
          </h4>
          <div className="language-list flex gap-[20px] overflow-x-auto text-sm md:text-base">
            <button className="btn text-[#483D89] border-1 border-[#483D89] rounded-[10px] hover:bg-[#BA84FE] hover:border-[#BA84FE] hover:text-white active:bg-[#BA84FE]">
              All
            </button>
            <button className="btn text-[#483D89] border-1 border-[#483D89] rounded-[10px] hover:bg-[#BA84FE] hover:border-[#BA84FE] hover:text-white active:bg-[#BA84FE]">
              English
            </button>
            <button className="btn text-[#483D89] border-1 border-[#483D89] rounded-[10px] hover:bg-[#BA84FE] hover:border-[#BA84FE] hover:text-white active:bg-[#BA84FE]">
              Indonesian
            </button>
            <button className="btn text-[#483D89] border-1 border-[#483D89] rounded-[10px] hover:bg-[#BA84FE] hover:border-[#BA84FE] hover:text-white active:bg-[#BA84FE]">
              Malaysia
            </button>
            <button className="btn text-[#483D89] border-1 border-[#483D89] rounded-[10px] hover:bg-[#BA84FE] hover:border-[#BA84FE] hover:text-white active:bg-[#BA84FE]">
              Japanese
            </button>
            <button className="btn text-[#483D89] border-1 border-[#483D89] rounded-[10px] hover:bg-[#BA84FE] hover:border-[#BA84FE] hover:text-white active:bg-[#BA84FE]">
              Arabic
            </button>
          </div>
        </div>

        {/* book list */}
        <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-[20px] mb-[130px]">
          {datas && datas.map(({id, title, img, author}) => (
            <a href='' className="card max-sm:card-side bg-white w-fit shadow-sm rounded-[22px] hover:bg-accent">
              <figure className="px-[10px] py-[10px]">
                <img src={`./book-img/${img}`} className="rounded-xl" />
              </figure>
              <div className="card-body max-sm:p-[8px]">
                <h2 className="card-title sm:line-clamp-1">{title}</h2>
                <p className="book-author text-gray-400">
                  Author: {author}
                </p>
              </div>
            </a>
          ))
          }
        </div>
    </div>
  )
}

export default BookCollection
