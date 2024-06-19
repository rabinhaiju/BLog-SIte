import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-antique-white'>
    <div className='w-full sm:w-[90%] lg:w-[50%] max-w-[600px] bg-white p-8 shadow-md rounded-lg'>
      <h1 className='text-3xl font-bold mb-6 text-center'>Contact Us</h1>

      <div className='mb-4'>
        <label htmlFor='email' className='block mb-2'>
           Name
        </label>
        <input
        placeholder='Rabinhaiju'
          type='text'
          id='email'
          className='w-full px-3 py-2 border rounded-md'
          style={{ borderColor: '#ccc' }}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block mb-2'>
          Email
        </label>
        <input
        placeholder='email@website.com'
          type='text'
          id='email'
          className='w-full px-3 py-2 border rounded-md'
          style={{ borderColor: '#ccc' }}
        />
      </div>
     

       <div className='mb-4'>
  <label htmlFor='Message' className='block mb-2'>
    Message:
  </label>
  <textarea
  placeholder='What would you like to say'
    id='Message'
    className='w-full py-[100px]  border rounded-md text-center'
    style={{ borderColor: '#ccc' }}
  />
</div>
      <div className='flex flex-col sm:flex-row gap-3'>
        <button className='w-full sm:w-auto bg-yellow-900 text-white py-2 px-4 rounded-md mb-2 sm:mb-0'>
        Submit
        </button>
        
      </div>
     
    </div>
  </div>
  )
}

export default Contact
