import React from 'react'
import BigCalendar from '@/components/BigCalendar'
import Announcements from '@/components/Announcements'
import Calendar from '@/components/Calendar'

const Student = () => {
  return (
    <div className='p-4 flex gap-4 flex-col xl:flex-row'>
      <div className='w-full xl:w-2/3'>
         <div className='h-full bg-white p-4 rounded-md'>
            <h1 className='text-xl front-semibold'>Schedule</h1>
            <BigCalendar />
         </div>
      </div>
       


      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
         <Calendar />
         <Announcements />
      </div>
    </div>
  )
}

export default Student
