import React from 'react'
import './ImageCard.css'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

export const ImageCard = (props) => {
    const router = useNavigate();
    return (
        <div class="image-container hover:cursor-pointer" data-aos="zoom-in-up" onClick={()=>router(`/blog/${props.id}`)}>
            <img className='rounded-xl' src={props.imageURL} alt="blog pic" />
            <div class="overlay flex flex-col gap-3">
                <span className='font-[500] text-[18px] md:text-3xl md:font-bold'>
                    {props.title?.slice(0, 20)}...
                </span>
                <span className='text-gray-200 text-[12px] md:text-xl'>
                    {props.description?.slice(0, 80)}<span className='text-gray-500'>...read more</span>
                </span>
            </div>
        </div>
    )
}
