import React from 'react'

function Journal() {
  return (
    <div className='w-full h-screen max-sm:h-full flex items-start justify-center flex-col px-[10rem] max-md:px-[5rem] max-sm:px-[2rem]'>
        <h1 className='text-[4vw] uppercase font-semibold py-[5rem] max-sm:text-[2rem]'>Journal</h1>

        <div className='w-full flex items-center flex-col gap-20'>
            <div className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                <h3>Jun 8, 2023</h3>
                <p>What is matcha?</p>
            </div>
            <div className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                <h3>May 4, 2023</h3>
                <p>How to make tea on fire, lazy cooking</p>
            </div>
            <div className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                <h3>Jun 8, 2023</h3>
                <p>What is matcha?</p>
            </div>
            <div className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour]  border-b-2 py-3 border-gray-200'>
                <h3>Mar 6, 2023</h3>
                <p>Chaban (Tea Tray), hucheng, chachuan, and other variants of tea trays</p>
            </div>
            <div className='w-full flex items-center max-sm:flex-col max-sm:gap-1 max-sm:items-start gap-20 font-[fontFour] border-b-2 py-3 border-gray-200'>
                <h3>Jan 16, 2023</h3>
                <p>How to brew Shu (ripe) Pu-erh tea correctly</p>
            </div>
        </div>
    </div>
  )
}

export default Journal