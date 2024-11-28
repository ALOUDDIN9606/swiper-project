import React from 'react'
import { toast, Bounce } from 'react-toastify'

const Section = () => {
  const handleShow = () => {
    toast.info("hello", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    })
  }

  return (
    <div className='text-center'>
        <h2 className='my-6 text-[30px]'>Section</h2>
        <button className='bg-red-500 px-10 py-2 rounded-xl' onClick={handleShow}>Show</button>
    </div>
  )
}

export default Section