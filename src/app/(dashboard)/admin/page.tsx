import UserCard from '@/components/UserCard'
import React from 'react'
import Chart from '@/components/Chart'

const AdminPage = () => {
return (
<div className='p-4 flex gap-4 flex-col md:flex-row '>
  <div className='w-full lg:w-2/3 flex flex-col gap-8'>
    <div className='flex gap-4 justify-between flex-wrap'>
      <UserCard type="student" />
      <UserCard type="teacher" />
      <UserCard type="parents" />
      <UserCard type="staff" />
    </div>


    <div className='MiddleChart flex gap-4 flex-col lg:flex-row'>
      <div className='CountChart w-full lg:w-1/3 h-[450]]'>
        <Chart />
      </div>
      <div className='AttendanceChart w-full lg:w-2/3 h-[450]]'>

      </div>
    </div>

  </div>


</div>
)
}

export default AdminPage