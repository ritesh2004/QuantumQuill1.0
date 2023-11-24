import React from 'react'
import { Navbar } from '../../components/Navbar'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'

export const Myblogs = () => {
    return (
        <div className='w-full h-full'>
            <Navbar bgColor='#00b4d8' />
            <div className='cards my-10 flex flex-col gap-5 justify-center items-center md:flex-wrap md:flex-row md:justify-around'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer/>
        </div>
    )
}
