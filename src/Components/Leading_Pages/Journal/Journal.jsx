import React from 'react'

function Journal() {
  return (
    <div className='w-full h-screen flex items-start justify-center flex-col px-[10rem] '>
        <h1 className='text-[4vw] uppercase font-semibold py-[5rem]'>Journal</h1>

        <div className='w-full flex items-center flex-col gap-20'>
            <div className='w-full flex items-center gap-20  border-b-2 py-3 border-gray-200'>
                <h3>Jun 8, 2023</h3>
                <p>What is matcha?</p>
            </div>
            <div className='w-full flex items-center gap-20 border-b-2 py-3 border-gray-200'>
                <h3>Jun 8, 2023</h3>
                <p>What is matcha?</p>
            </div>
            <div className='w-full flex items-center gap-20 border-b-2 py-3 border-gray-200'>
                <h3>Jun 8, 2023</h3>
                <p>What is matcha?</p>
            </div>
            <div className='w-full flex items-center gap-20 border-b-2 py-3 border-gray-200'>
                <h3>Jun 8, 2023</h3>
                <p>What is matcha?</p>
            </div>
            <div className='w-full flex items-center gap-20 border-b-2 py-3 border-gray-200'>
                <h3>Jun 8, 2023</h3>
                <p>What is matcha?</p>
            </div>
        </div>
    </div>
  )
}

export default Journal