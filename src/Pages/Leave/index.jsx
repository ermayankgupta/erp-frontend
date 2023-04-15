import React from 'react'
import AddLeave from './AddLeave'

const Leave = () => {
  return (
    <>
    <AddLeave />
    <div className="grid md:grid-cols-4 gap-6 mt-6">
      <div className='bg-white border border-border p-[15px] text-center rounded'>
        <p className='text-darkgray font-medium text-lg md:text-base mb-1'>Annual Leave</p>
        <p className='text-2xl font-medium'>12</p>
      </div>
      <div className='bg-white border border-border p-[15px] text-center rounded'>
        <p className='text-darkgray font-medium text-lg md:text-base mb-1'>Medical Leave</p>
        <p className='text-2xl font-medium'>6</p>
      </div>
      <div className='bg-white border border-border p-[15px] text-center rounded'>
        <p className='text-darkgray font-medium text-lg md:text-base mb-1'>Casual Leave</p>
        <p className='text-2xl font-medium'>6</p>
      </div>
      <div className='bg-white border border-border p-[15px] text-center rounded'>
        <p className='text-darkgray font-medium text-lg md:text-base mb-1'>Remaining Leave</p>
        <p className='text-2xl font-medium'>12</p>
      </div>
    </div>
    </>
  )
}

export default Leave