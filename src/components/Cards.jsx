import React from 'react'
import Single from '../images/single.png';
import Double from '../images/double.png';
import Triple from '../images/triple.png';

const Cards = () => {
  return (
    <div className='w-fully py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' >
        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='single-user-img' />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 mx-auto py-3 text-black'>Start Trial</button>
          </div>
        </div>
        <div className='w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-20 rounded-lg hover:scale-105 duration-500'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src={Double} alt='double-user-img' />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center text-4xl font-bold'>$159</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>750 GB Storage</p>
            <p className='py-2 border-b mx-8'>2 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
            <button className='bg-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 mx-auto py-3 text-white'>Start Trial</button>
          </div>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-20 rounded-lg hover:scale-105 duration-500 bg-gray-100'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent rounded' src={Triple} alt='triple-user-img' />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <p className='text-center text-4xl font-bold'>$169</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8'>3 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 8 GB</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 mx-auto py-3 text-black'>Start Trial</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards