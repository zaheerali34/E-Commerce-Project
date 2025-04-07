import React from 'react'

function Header() {
  return (
    <div className='w-full py-4 px-[8rem] max-xl:px-[5rem] max-md:px-[3.5rem] max-sm:px-[2rem]'>
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-start gap-4'>
                <span className='w-[25px] h-[25px] bg-black rounded-[8px]'></span>
                <h5 className='uppercase'>Shops</h5>
            </div>

            <nav>
                <ul className='flex items-center gap-12 cursor-pointer max-md:hidden'>
                    <li className='text-gray-900 text-sm'>Home</li>
                    <li className='text-gray-900 text-sm'>Shop</li>
                    <li className='text-gray-900 text-sm'>About us</li>
                    <li className='text-gray-900 text-sm'>Contacts</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header