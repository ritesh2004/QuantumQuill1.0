import React from 'react'
import './Blog.css'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'

export const Blog = () => {
    return (
        <div>
            <Navbar bgColor='#00b4d8' />
            <div className='my-10 flex flex-col gap-5 justify-center items-center'>
            <figure className='w-[370px] h-auto md:w-[600px]'>
                <img className='w-full h-full object-fit rounded-2xl' src='https://th.bing.com/th/id/OIP.hx5kKYwjxlUkkhSPsNdBCQHaHW?w=205&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
            </figure>
            <span className='font-semibold text-2xl text-black p-5 w-full md:w-[80%]' style={{fontFamily:'Montserrat'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, libero repellendus repellat rem culpa odit? Necessitatibus praesentium quibusdam consequatur eos?
            </span>
            <span className='text-xl text-gray-600 p-5 w-full md:w-[80%]' style={{fontFamily:'Montserrat'}}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis quaerat, aut dolore libero ipsa nam tempore deleniti voluptates illo nihil temporibus alias earum repudiandae in unde incidunt sequi numquam eligendi? At excepturi architecto rerum sit asperiores quae vitae nemo, assumenda aperiam autem quas neque iusto, nostrum deleniti omnis nisi fugit, temporibus enim voluptatibus iure labore odio! Fugit minus cupiditate enim iste at, maxime nobis natus, nemo doloremque voluptatem debitis accusantium saepe quisquam, porro unde quo. Dignissimos voluptatem recusandae odio? Dolorem modi maiores nobis pariatur exercitationem odit molestiae quia voluptas corporis, quidem a mollitia iure? Quisquam, minima, vel libero odio alias voluptatibus officiis aperiam reiciendis ipsam natus aspernatur nihil obcaecati consectetur ad rem dolorem at consequuntur maiores impedit ab! Aperiam possimus sequi aliquam ut quasi accusantium ratione, natus soluta enim, ipsam explicabo officia quia quos ea? Suscipit, molestias! At ab voluptatibus dicta aliquid numquam nam repudiandae sunt esse obcaecati saepe officia assumenda necessitatibus et error magni ea nulla dolorem animi, amet eum quis fugit perferendis. Doloremque hic possimus quae, architecto neque illo impedit aliquam culpa ullam? Architecto cumque perspiciatis, sed deleniti sunt repellat voluptatum quas accusantium illum nobis quisquam placeat distinctio iure blanditiis tempora libero. Vero quam illo possimus nemo dicta!
            </span>
            </div>
            <Footer/>
        </div>
    )
}
