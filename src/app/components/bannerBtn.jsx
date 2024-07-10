"use client"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from 'swiper/react';


const BannerBtn = () => {
    const swiper = useSwiper();
    return (
        <div className="flex gap-5 absolute bottom-10 right-10 z-10">
            <button className='bg-[#FFFFFF33] hover:bg-[#FF3811] rounded-full text-white p-5' onClick={() => swiper.slidePrev()}><FaArrowLeft /></button>
            <button className='bg-[#FFFFFF33] hover:bg-[#FF3811] rounded-full text-white p-5' onClick={() => swiper.slideNext()}><FaArrowRight /></button>
        </div>  
    );
};

export default BannerBtn;