import React from 'react'
import img from '../Images/carousel/Blog Image.png'
import './ImageCard.css'

export const ImageCard = () => {
    return (
        <div class="image-container hover:cursor-pointer">
            <img src={img} alt="Your Image" />
            <div class="overlay">
                <span className='font-bold font-xl'>
                    Richird Norton photorealistic rendering as real photos
                </span>
                <span>
                    Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.
                </span>
            </div>
        </div>
    )
}
