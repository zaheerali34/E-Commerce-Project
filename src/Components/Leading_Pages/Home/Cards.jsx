import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#000000b1] fixed z-50 top-0 left-0 right-0 flex items-center justify-center'>
        <div className='w-2/3 h-full bg-white rounded-[4rem] flex items-center justify-center px-12'>
            <div className='w-full flex items-center justify-between'>
                <h3 className='text-2xl uppercase font-[fontThree]'>my Cart</h3>
                <span className='text-2xl text-gray-500'>X</span>
            </div>
        </div>
    </div>
  )
}

export default Cards