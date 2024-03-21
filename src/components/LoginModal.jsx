import React, { useContext, useState } from 'react'
import Appcontext from '../context/Appcontext'
import { googleLogin, logIn } from '../api/Auth';
import { Toaster } from 'react-hot-toast';
import Authcontext from '../context/Authcontext';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/Firebase'
import AOS from 'aos'

AOS.init()

export const LoginModal = () => {
    const { setOpenLogin,setOpenSignup } = useContext(Appcontext);
    const {setChange,change} = useContext(Authcontext)
    const [form,setForm] = useState({email:"",password:""})
    const [loading,setLoading] = useState(false);
    const openCreateACModal = () => {
        setOpenLogin(false)
        setOpenSignup(true)
    }
    const handleForm = (e) => {
        const {name,value} = e.target;
        setForm((preVal) => {
            return {
                ...preVal,
                [name]:value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await logIn(form.email,form.password);
            setChange(!change)
            setOpenLogin(false)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const handleSigninwithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const { user } = await signInWithPopup(auth,provider);
            console.log(user)
            await googleLogin(user?.email);
            setChange(!change);
            setOpenLogin(false);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full h-screen flex justify-center items-center" style={{ background: 'rgba(0,0,0,0.5)',backdropFilter:'blur(5px)'}}>
        <Toaster/>
            <div className="relative p-4 w-[350px] max-w-md max-h-full md:w-[500px]" data-aos="fade-up" data-aos-duration="1000">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-3xl font-extrabold text-gray-900">
                            Log in to QuantumQuill
                        </h3>
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={() => setOpenLogin(false)}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5" value={form.email} onChange={handleForm} placeholder="@ enter email id" required />
                            </div>
                            <div>
                                <input type="password" name="password" id="password" value={form.password} onChange={handleForm} placeholder="# enter password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5" required />
                            </div>
                            <br />
                            <button type="submit" className="w-full font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-lg px-5 py-3 text-center" disabled={loading} style={{backgroundColor:loading&&"gray",cursor:loading&&"not-allowed"}}>LOGIN</button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Not registered? <button className="text-blue-700 hover:underline dark:text-blue-500" onClick={openCreateACModal}>Create account</button>
                            </div>
                        </form>
                        <div className='w-full flex justify-center my-3'>
                            <span className='text-center'>OR</span>
                        </div>
                        <button type="button" className="text-black border border-black w-full bg-transparent hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-black/50 font-bold rounded-full text-lg px-5 py-3 text-center inline-flex justify-center items-center me-2 mb-2" onClick={handleSigninwithGoogle}>
                            <svg className="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19" stroke='currentColor' strokeWidth={1}>
                                <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd" />
                            </svg>
                            Log in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
