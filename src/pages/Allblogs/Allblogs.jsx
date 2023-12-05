import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { getallBlogs } from '../../api/Blog'
import loader from '../../icons/loading.svg'
import Appcontext from '../../context/Appcontext'
import { Editbio } from '../../components/Editbio'


export const Allblogs = () => {
    const [blogs,setBlogs] = useState([]);
    const { openProfile } = useContext(Appcontext)
    useEffect(()=>{
        const getBlogs = async () => {
            try {
                const allBlog = await getallBlogs();
                console.log(allBlog)
                setBlogs(allBlog.blog);
            } catch (error) {
                console.log(error);
            }
        }

        getBlogs()
    },[])

    return (
        <div className='w-full h-screen'>
            <Navbar bgColor='#00b4d8' />
            {openProfile && <Editbio />}
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
                }):<img className='w-10 h-10' src={loader} alt='loader'/>}
            </div>
            <Footer/>
        </div>
    )
}
