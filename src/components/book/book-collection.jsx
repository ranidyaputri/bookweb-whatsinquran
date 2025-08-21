import React from 'react'
import { useState } from 'react';
import datas from '../../../src/data/books.json'
import { Link, useLocation } from 'react-router-dom'

function BookCollection() {
  //get the language
  const location = useLocation();
  const lang = location.state?.lang;

  // filtering data by keyword
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = datas.filter(
    (book) =>
      book.language == lang &&
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[100vh] mx-[20px] md:mx-[60px] mt-[128px] md:mt-[158px] mb-[58px] md:mb-0">
        {/* filter by title */}
        <div className="relative min-h-[380px] flex flex-col items-center text-white justify-center bg-[#33187A] rounded-[40px] p-[30px] md:px-[58px] md:py-[40px]">
            <img src="./bookshelf-group.svg" className="absolute top-[38px] right-[120px] z-0" />
            <img src="./ornament.svg" className="absolute hidden xl:block top-[90px] left-[300px] z-0" />
            <div className="title text-center">
              <h4 className="font-bold text-[30px] lg:text-[40px] mb-[10px]">
                Explore Our Book Collection
              </h4>
              <p className="mb-[32px]">
                Type a title or keyword to explore our books!
              </p>
            {/* search bar */}
              <div className="filter-book flex justify-center">
                <label className="input border-white border-1 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                    <path fill="none" stroke="#BA84FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0"></path>
                  </svg>
                  <input onChange={(event) => setSearchTerm(event.target.value)} type="text" className="grow text-xs sm:text-sm" placeholder="Search by title" />
                </label>
              </div>

            </div>
        </div>

        {/* subheading */}
        <div className="mt-[69px] mb-[20px]">
          <h4 className="font-bold text-[26px] md:text-[30px] mb-[20px] text-[#33187A]">
            Our Book Collection in {lang}
          </h4>
        </div>

        {/* book list */}
        <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-[20px] mb-[130px]">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(({id, title, img, author}) => (
              <Link to={`/book-detail/${id}`} onClick={() => window.scrollTo(0, 0)} className="card max-sm:flex-row bg-white w-full lg:w-fit shadow-sm rounded-[22px] hover:bg-accent">
                <figure className="px-[10px] py-[10px] flex-none">
                  <img src={`/book-img/${img}`} className="rounded-xl max-sm:max-w-[120px] object-cover" />
                </figure>
                <div className="card-body max-sm:p-[10px] flex-initial">
                  <h2 className="card-title sm:line-clamp-1">{title}</h2>
                  <p className="book-author text-gray-400">
                    {author}
                  </p>
                </div>
              </Link>
            ))
          ) : (<p className="text-gray-500">No books found.</p>)
          }
        </div>
    </div>
  )
}
export default BookCollection
