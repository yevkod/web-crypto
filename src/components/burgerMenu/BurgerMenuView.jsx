import React from 'react'

export const BurgerMenuView = () => {
    return (
        <div className='flex z-50 flex-col py-10 px-10 shadow-md rounded-lg'>
            <ul className='flex flex-col gap-5'>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <a href="#anonymousView">Why Blank</a>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <a href="#howItWorkView">How it Works</a>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <a href="#utilityView">Blank Token</a>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <a href="#comparisonView">What Blank Offers</a>
                </li>
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
