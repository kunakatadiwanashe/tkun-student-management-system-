import React from 'react'
import { IoIosMore } from "react-icons/io";

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-kunPrimary even:bg-kunLight p-4 flex-1 min-w-[130px]'>
      <div className='flex justify-between items-center'>
        <span className='text-[12px] bg-white px-2 py-1 rounded-full mb-2'>2024/25</span>
        <IoIosMore />
      </div>
      <h1  className='font-extrabold text-2xl'>1,200</h1>
      <h2 className='capitalize '>{type}</h2>
    </div>
  )
}

export default UserCard
