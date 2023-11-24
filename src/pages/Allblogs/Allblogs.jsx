import React from 'react'
import { Card } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'


export const Allblogs = () => {
    return (
        <div className='w-full h-full'>
            <Navbar bgColor='#00b4d8' />
            <div className='cards my-10 flex flex-col gap-5 justify-center items-center md:flex-wrap md:flex-row md:justify-around'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer/>
        </div>
    )
}
