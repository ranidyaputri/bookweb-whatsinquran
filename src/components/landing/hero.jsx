import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div id='home'>
        <div className="hero-section mx-[20px] md:mx-[60px] mt-[128px] md:mt-[158px] min-h-[380px] bg-[#33187A] rounded-[40px] p-[30px] md:p-[40px] lg:px-[58px] lg:py-[40px] scroll-smooth">
            <div className="flex flex-col-reverse lg:flex-row md:gap-[30px] justify-between items-center">
                <div className="hero-text text-white md:w-[448px] flex-none">
                    <h1 className="font-bold text-[30px] md:text-[40px] lg:text-[50px] mt-[30px] md:mt-0">Soulful Kids Books</h1>
                    <p className="mt-[12px] md:mt-[24px] mb-[24px] text-sm md:text-base">
                        A collection of storybooks by What's in Qur'an creative team. Each book brings Qur'anic values into everyday adventures with colorful illustrations and engaging stories, helping children connect faith with real life.
                    </p>
                    <Link to={`/menu`} onClick={() => window.scrollTo(0, 0)} className="btn px-[12px] py-[10px] border-0 rounded-[10px] font-semibold bg-[#BA84FE] text-white text-sm md:text-base">
                        Start Reading
                    </Link>
                </div>
                <div className="hero-img flex-initial">
                    <img src="./hero-image.svg" className=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero