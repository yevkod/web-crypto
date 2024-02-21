import React from 'react'
import { partnersArray } from './PartnersArray'

export const PartnersView = () => {
    return (
        <div className='pt-[90px] pb-[90px]'>
            <div className='uppercase text-[12px] text-center text-gray-500'>
                <span>Meet our Partners</span>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto max-w-[90rem] pt-5 gap-3'>
                {partnersArray.map((item) => (
                    <div className='flex justify-center hover:scale-125 cursor-pointer transition-all'>
                        <div className='flex items-center'>
                            <img src={item.icon} alt='' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
