import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { myBlogs } from '../../api/Blog'
import { Editbio } from '../../components/Editbio'
import Appcontext from '../../context/Appcontext'
import loader from '../../icons/loading.svg'

export const Myblogs = () => {
    const [blogs,setBlogs] = useState([]);
    const {openProfile} = useContext(Appcontext)

    useEffect(()=>{
        const getBlogs = async () => {
            try {
                const allBlogs = await myBlogs();
                setBlogs(allBlogs.blog)
            } catch (error) {
               console.log(error) 
            }
        }

        getBlogs()
    },[])

    return (
        <div className='w-full h-full'>
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