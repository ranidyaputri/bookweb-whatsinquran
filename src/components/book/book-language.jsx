import React from 'react'
import { Link } from 'react-router-dom'
import datas from "../../../src/data/books.json";

function BookLanguage() {
    const language = [
        { code: "en", name: "English", img: "united-kingdom.png"},
        { code: "my", name: "Malay", img: "malaysia.png"},
        { code: "id", name: "Indonesian", img: "indonesia.png"},
        { code: "ar", name: "Arabic", img: "saudi-arabia.png"},
        { code: "jp", name: "Japanese", img: "japan.png"},
    ]
    // get total data by language
    function countBooks(lang) {
    return datas.filter((book) => book.language == lang).length;
    }

    return (
    <div className="min-h-[100vh] mx-[20px] md:mx-[60px] mt-[128px] md:mt-[158px] mb-[58px] md:mb-0">
        {/* Hero */}
        <div className="relative min-h-[380px] flex flex-col items-center text-white justify-center bg-[#33187A] rounded-[40px] p-[30px] md:px-[58px] md:py-[40px] mb-[80px]">
            <img src="./bookshelf-group.svg" className="absolute top-[38px] right-[120px] z-0" />
            <img src="./ornament.svg" className="absolute hidden xl:block top-[120px] left-[320px] z-0" />
            <div className="title text-center">
              <h4 className="font-bold text-[30px] lg:text-[40px] mb-[18px]">
                Start Exploring the Books
              </h4>
              <p className="text-sm md:text-base">
                Choose a language and explore the books in your preferred tongue.
              </p>
            </div>
        </div>

        {/* card */}
        <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-[20px] mb-[130px] w-full">
          {language && language.map((lang) => (
            <div className="card bg-white w-full h-fit px-[20px] pb-[18px] shadow-sm rounded-[22px]">
                <img src={`/flag-img/${lang.img}`} className="rounded-xl w-[64px] mt-[40px] mx-auto" />
                <div className="text-center mb-[20px] mt-[25px]">
                    <h2 className="font-semibold text-base md:text-[20px]">{lang.name}</h2>
                    <p className="text-sm md:text-base text-gray-400">{countBooks(lang.name)} Books</p>
                </div>
                <Link to={`/collection`} state={{ lang: lang.name }} onClick={() => window.scrollTo(0, 0)} className="btn w-full px-[12px] py-[10px] border-0 rounded-[10px] font-semibold bg-[#BA84FE] text-white text-sm md:text-base">
                    Explore
                </Link>
            </div>
          ))
          }
        </div>
    </div>
    )
}

export default BookLanguage
