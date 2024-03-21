import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonImage = ({ duration, items }) => {
    return (
        Array(items).fill(0).map((_, id) => {
            return (
                <div className='rounded-lg w-[300px] h-[200px] md:w-[450px] md:h-[350px]' key={id}>
                    <Skeleton className='w-full h-full rounded-xl' duration={duration}/>
                </div>
            )
        })
    )
}
