import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonCard = ({ duration, items }) => {
    return (
        Array(items).fill(0).map((_, id) => {
            return (
                <div className='flex flex-col border rounded-lg p-2 border-[#6c757d] w-[360px] h-[410px] md:h-[400px] md:w-[365px]' key={id}>
                    <div className='w-full'>
                        <Skeleton className='h-[200px] mb-2' duration={duration} />
                    </div>
                    <div>
                        <Skeleton className='mb-1 h-[25px]' count={3} duration={duration} />
                    </div>
                    <div className='flex flex-row gap-3 items-center mt-2'>
                        <div>
                            <Skeleton circle height={50} width={50} duration={duration} />
                        </div>
                        <div>
                            <Skeleton width={200} duration={duration} />
                        </div>
                    </div>
                </div>
            )
        })

    )
}
