import React from 'react'
import img from '../Images/carousel/Blog Image.png'
import './ImageCard.css'

export const ImageCard = () => {
    return (
        <div class="image-container hover:cursor-pointer">
            <img src={img} alt="Your Image" />
            <div class="overlay flex flex-col gap-3">
                <span className='font-[500] text-[18px] md:text-3xl'>
                    Richird Norton photorealistic rendering as real photos
                </span>
                <span className='text-gray-400 text-[12px] md:text-xl'>
                    Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                </span>
            </div>
        </div>
    )
}
