import React from 'react'
import './Card.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

AOS.init()

export const Card = () => {
    return (
        <div style={{fontFamily:'Montserrat'}} data-aos="zoom-in-up">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <img class="rounded-t-lg" src="https://th.bing.com/th/id/OIP.ME9B34em3uKcXhdht3BTbwHaEK?rs=1&pid=ImgDetMain" alt="card" />
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className='flex justify-between items-center'>
                    <span className='flex gap-2 items-center text-gray-500'>
                        <img class="w-10 h-10 rounded-full" src="https://th.bing.com/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Rounded avatar" />
                        <span style={{fontFamily:'Montserrat',fontSize:'small'}}>@__its.Ritesh.py</span>
                    </span>
                        <span className='flex gap-2'>
                            <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
                            </svg> 40
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
