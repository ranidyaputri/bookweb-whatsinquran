import React, { useEffect, useState } from 'react'
import datas from '../../../src/data/books.json'
import { useParams } from 'react-router-dom';

function BookDetail() {
    const {id} = useParams();
    console.log(id);
    const [item, setItem] = useState(null);

    useEffect(() => {
        if(id){
            const foundItem = datas.find(dataItem => dataItem.id == parseInt(id));
            setItem(foundItem);
            console.log(foundItem);
        }
    }, [id])


    return (
        <div className="min-h-fit mx-[20px] md:mx-[60px] mt-[128px] md:mt-[158px] mb-[58px] md:mb-0">
            <h6 className="font-bold text-[#483D89] text-[24px] md:text-[30px] mb-[30px]">Book Detail</h6>
            {item ? (
            <div className="flex flex-col md:flex-row md:gap-[115px] items-start">
                <img src={`/book-img/${item.img}`} className="w-[230px] sm:w-[280px] lg:w-[360px] rounded-[30px]" />
                <div className="book-info lg:w-[550px] text-sm md:text-base">
                    <h6 className="book-title font-bold mb-[18px] text-[28px] md:text-[40px] mt-[26px] md:mt-0">
                        {item.title}
                    </h6>
                    <div className="book-detail flex mb-[26px] text-sm md:text-base">
                        <div className="book-author mr-[40px]">
                            <p className="text-gray-400 mb-2">Author(s)</p>
                            <p className="">
                                {item.author}
                            </p>
                        </div>
                        <div className="book-lang">
                            <p className="text-gray-400 mb-2">Language</p>
                            <p className="">
                                {item.language}
                            </p>
                        </div>
                    </div>
                    <div className="synopsis mb-[26px]">
                        <p className="line-clamp-3">
                            {item.synopsis}
                        </p>
                    </div>
                    <a href={item.book_link} target="_blank" className="px-[12px] py-[10px] rounded-[10px] font-semibold bg-[#BA84FE] text-white">
                        Start Reading
                    </a>
                </div>
            </div>
            ) : <h1>No item found</h1>}
        </div>
    )
}

export default BookDetail
