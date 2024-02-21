import React from 'react'

export const BurgerMenuView = () => {
    return (
        <div className='flex z-50 flex-col py-10 px-10 shadow-md rounded-lg'>
            <ul className='flex flex-col gap-5'>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Why Blank</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>What blank offers</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>How it works</li>
                <li className='underline text-center cursor-pointer text-gray-900 text-[18px] font-medium'>Blank token</li>
            </ul>
            <div className='flex flex-col pt-8 gap-5'>
                <div>
                    <button className='bg-[#4C5560] px-7 py-2 text-white rounded-md hover:bg-[#373f44] active:bg-[#000000] hover:scale-105 cursor-pointer transition-all'>
                        <span>Token Metrics</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
