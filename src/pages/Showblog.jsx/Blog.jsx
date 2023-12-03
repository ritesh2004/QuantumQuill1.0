import React, { useEffect, useState } from 'react'
import './Blog.css'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../api/Blog'
import { getUser } from '../../api/Auth'

export const Blog = () => {
    const { id } = useParams();
    const [data, setData] = useState()
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();

    const fetchAuthor = async (id) => {
        try {
            const { user } = await getUser(id);
            setAuthor(user)
        } catch (error) {
            console.log(error)
        }
    }

    const getDate = (timestamp) => {
        const datetime = new Date(timestamp)
        console.log(datetime)
        return datetime
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { blog } = await getBlog(id);
                console.log(blog[0])
                setData(blog[0])
                fetchAuthor(blog[0].user)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <Navbar bgColor='#00b4d8' />
            <div className='my-10 flex flex-col gap-5 justify-center items-center'>
                <span className='font-semibold text-2xl text-black p-5 w-full text-center md:w-[80%] md:text-4xl md:font-bold' style={{ color: '#008080' }}>
                    {data?.title}
                    <p className='text-base font-semibold text-gray-500 text-right'>- {data?.createdAt}</p>
                </span>
                <div className='w-full flex justify-around md:w-[80%] md:p-5'>
                    <figure className='w-[370px] h-auto md:w-[400px]'>
                        <img className='w-full h-full object-fit rounded-2xl' src={data?.imageURL} alt='image' />
                    </figure>
                    <hr className='bg-gray-700 ml-5 w-[1px] h-auto' />
                    <div className='w-[200px] flex justify-center items-center flex-col p-4 rounded-lg'>
                        <span className='text-white text-xl font-bold'>ABOUT AUTHOR</span>
                        <br />
                        <img class="w-20 h-20 rounded-full" src={author?.profileURL} alt="Rounded avatar" />
                        <br />
                        <span className='text-white font-bold'>{author?.username}</span>
                        <p className='text-center'>
                            {author?.bio}
                        </p>
                    </div>
                </div>
                <span className='text-xl text-gray-600 p-5 w-full text-[#cccccc] md:w-[80%]' style={{ fontFamily: 'Montserrat' }}>
                    {data?.description}
                </span>
            </div>
            <Footer />
        </div>
    )
}
