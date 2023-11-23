import React, { useContext, useState } from 'react'
import './Home.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../Images/carousel/Image.png'
import img2 from '../../Images/carousel/Image (1).png'
import img3 from '../../Images/carousel/Image (2).png'
import img4 from '../../Images/carousel/Rectangle 9.png'
import middle from '../../Images/carousel/middle.jpg'
import { Navbar } from '../../components/Navbar';
import { Card } from '../../components/Card';
import { ImageCard } from '../../components/ImageCard';
import { Footer } from '../../components/Footer';
import { LoginModal } from '../../components/LoginModal';
import Appcontext from '../../context/Appcontext';
import { SignupModal } from '../../components/SignupModal';


export const Home = () => {
    const { openLogin,openSignup } = useContext(Appcontext)
    const items = [
        <div className='w-full relative'>
            <img className='w-full' src={img1} alt="image" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-8 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">FutureTech</span>
                <br />
                <span className='carouselText pt-2'>
                    Explore the Future: Unraveling the Wonders of Science and Technology.
                </span>
            </div>
        </div>,
        <div className='w-full relative'>
            <img className='w-full' src={img2} alt="image" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-5 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">TechInnovations</span>
                <br />
                <span className='carouselText pt-2'>
                    Tech Trends Decoded: Your Gateway to the Latest Breakthroughs and Innovations
                </span>
            </div>
        </div>,
        <div className='w-full relative'>
            <img className='w-full' src={img3} alt="image" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-8 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">LabToLife</span>
                <br />
                <span className='carouselText pt-2'>
                    From Lab to Life: Dive into the World of Science and Tech Advancements.
                </span>
            </div>
        </div>,
        <div className='w-full relative'>
            <img className='w-full' src={img4} alt="image" role="presentation" />
            <div className='h-auto absolute w-[90%] bottom-5 left-4 md:left-[10%] md:bottom-[30%] md:w-[50%]'>
                <span class="tagText bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">InfinitePossibilities</span>
                <br />
                <span className='carouselText pt-2'>
                    Infinite Possibilities: Navigating the Frontiers of Science, One Article at a Time.
                </span>
            </div>
        </div>,
    ];
    return (
        <div className='home w-full h-screen relative'>
            <div style={{display:openLogin}}>
                <LoginModal />
            </div>
            <div style={{display:openSignup}}>
                <SignupModal/>
            </div>
            <AliceCarousel
                items={items}
                animationType='fadeout'
                animationDuration={1500}
                autoPlay
                autoPlayInterval={4000}
                infinite
                disableButtonsControls
                disableDotsControls
            />
            <div className='w-full absolute top-0'>
                <Navbar />
            </div>
            <div className='w-full py-16 px-10'>
                <span className='text-[24px] text-[#1b4965] font-bold border-l-8 border-[#62b6cb] px-5 md:text-[36px] md:font-semibold' id='blogText'>
                    Blog Articles
                </span>
                <div className='cards mt-10 flex flex-col gap-5 justify-center items-center md:flex-wrap md:flex-row md:justify-around'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='w-full relative'>
                <figure className='w-full'>
                    <img className='w-full h-full object-fit' src={middle} />
                </figure>
                <span className='absolute text-white w-full text-sm p-2 top-2 left-0 md:w-[60%] md:top-[20%] md:left[50%] md:right-[50%] md:text-xl md:p-10' style={{ fontFamily: 'Montserrat' }}>
                    <strong>Unlock the future with the perfect chemistry of science and technology </strong> – where sparks of innovation ignite a world of endless possibilities.
                </span>
            </div>
            <div className='w-full flex justify-around flex-col py-16 px-10'>
                <span className='text-[24px] text-[#1b4965] font-bold border-l-8 border-[#62b6cb] px-5 md:text-[36px] md:font-semibold' id='blogText'>
                    Editor's Pick
                </span>
                <div className='flex justify-around pt-10 flex-col justify-center gap-5 items-center md:flex-row'>
                    <ImageCard />
                    <ImageCard />
                    <ImageCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}
