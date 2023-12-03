import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { myBlogs } from '../../api/Blog'

export const Myblogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        const getBlogs = async () => {
            try {
                const allBlogs = await myBlogs();
                setBlogs(allBlogs.blog)
            } catch (error) {
               console.log(error) 
            }
        }

        return () => getBlogs()
    },[])

    return (
        <div className='w-full h-full'>
            <Navbar bgColor='#00b4d8' />
            <div className='cards my-10 flex flex-col gap-5 justify-center items-center min-h-[60vh] md:flex-wrap md:flex-row md:justify-around'>
            {blogs && blogs.length>0 ? blogs.map((blog)=>{
                    return (
                        <Card
                            title = {blog.title}
                            desc = {blog.description}
                            imageURL = {blog.imageURL}
                            author = {blog.user}
                            postId = {blog._id}
                        />
                    )
                }):<span>Loading...</span>}
            </div>
            <Footer/>
        </div>
    )
}