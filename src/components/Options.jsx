import React, { useContext, useEffect, useState } from 'react';
import editLogo from '../icons/edit.svg';
import deleteLogo from '../icons/delete.svg'
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from '../api/Blog';
import Authcontext from '../context/Authcontext';

export const Options = ({ id,author }) => {
    const { user } = useContext(Authcontext);
    const [disabled,setDisabled] = useState(true)
    useEffect(()=>{
        if (user._id === author) {
            setDisabled(false)
        }
    },[])
    const router = useNavigate();
    const handleDelete = async () => {
        const confirmation = window.confirm("Are you sure?");
        if (confirmation) {
            try {
                await deleteBlog(id);
                window.location.reload(true);
            } catch (error) {
                console.log(error)
            }
        }
    }
    console.log(disabled)
  return (
    <div className='w-[100px] h-full bg-white shadow-lg text-black  py-2 rounded'>
        <ul className='w-full' style={{opacity:disabled&&0.3}}>
            <li className='w-full flex flex-row gap-1 items-center px-2 hover:bg-gray-300'>
            <button className='w-full flex flex-row gap-1 items-center' onClick={()=>router(`/edit/${id}`)} style={{cursor:!disabled&&'pointer'}} disabled={disabled}>
            <img className='w-4 h-4' src={editLogo} alt=''/>
            Edit </button></li>
            <li className='w-full flex flex-row gap-1 items-center px-2 hover:bg-gray-300'>
            <button className='w-full flex flex-row gap-1 items-center' onClick={handleDelete} style={{cursor:!disabled&&'pointer'}} disabled={disabled}>
            <img className='w-4 h-4' src={deleteLogo} alt=''/>
            Delete </button></li>
        </ul>
    </div>
  )
}
