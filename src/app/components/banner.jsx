"use client"
import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerImg1 from '../../../public/assets/images/banner/1.jpg';
import bannerImg2 from '../../../public/assets/images/banner/2.jpg';
import bannerImg3 from '../../../public/assets/images/banner/3.jpg';
import bannerImg4 from '../../../public/assets/images/banner/4.jpg';
import bannerImg5 from '../../../public/assets/images/banner/5.jpg';
import bannerImg6 from '../../../public/assets/images/banner/6.jpg';
import BannerBtn from './bannerBtn';
import RegBgBtn from './clientComponents/RegBgBtn';

const HomePageBanner = () => {

    return (
        <div className='my-20'>
            <Swiper
                navigation={true}
                loop={true}
                className="mySwiper">
                <SwiperSlide className='w-full relative'>
                    <div className='absolute rounded bg-gradient-to-r from-[#070707d0] to-[#ffffff1a] w-full h-full mix-blend-plus-darker'></div>
                    <Image className='w-full h-[650px] object-cover rounded-lg' src={bannerImg1} width={1140} height={600} alt='banner image' />
                </SwiperSlide>
                <SwiperSlide className='w-full relative'>
                    <div className='absolute rounded bg-gradient-to-r from-[#070707d0] to-[#ffffff1a] w-full h-full mix-blend-plus-darker'></div>
                    <Image className='w-full h-[650px] object-cover rounded-lg' src={bannerImg2} width={1140} height={600} alt='banner image' />
                </SwiperSlide>
                <SwiperSlide className='w-full relative'>
                    <div className='absolute rounded bg-gradient-to-r from-[#070707d0] to-[#ffffff1a] w-full h-full mix-blend-plus-darker'></div>
                    <Image className='w-full h-[650px] object-cover rounded-lg' src={bannerImg3} width={1140} height={600} alt='banner image' />
                </SwiperSlide>
                <SwiperSlide className='w-full relative'>
                    <div className='absolute rounded bg-gradient-to-r from-[#070707d0] to-[#ffffff1a] w-full h-full mix-blend-plus-darker'></div>
                    <Image className='w-full h-[650px] object-cover rounded-lg' src={bannerImg4} width={1140} height={600} alt='banner image' />
                </SwiperSlide>
                <SwiperSlide className='w-full relative'>
                    <div className='absolute rounded bg-gradient-to-r from-[#070707d0] to-[#ffffff1a] w-full h-full mix-blend-plus-darker'></div>
                    <Image className='w-full h-[650px] object-cover rounded-lg' src={bannerImg5} width={1140} height={600} alt='banner image' />
                </SwiperSlide>
                <SwiperSlide className='w-full relative'>
                    <div className='absolute rounded bg-gradient-to-r from-[#070707d0] to-[#ffffff1a] w-full h-full mix-blend-plus-darker'></div>
                    <Image className='w-full h-[650px] object-cover rounded-lg' src={bannerImg6} width={1140} height={600} alt='banner image' />
                </SwiperSlide>

                <div className='absolute top-24 left-20 z-10 w-1/2'>
                    <h2 className='text-7xl font-semibold text-white w-3/4 mb-10'>Affordable Price For Car Servicing</h2>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex gap-5 my-20'>
                        <RegBgBtn text={'Discover More'} />
                        <button className='px-7 py-4 border border-white font-medium text-white rounded'>Latest Project</button>
                    </div>
                </div>
                <BannerBtn />
            </Swiper>
        </div>
    );
};

export default HomePageBanner;