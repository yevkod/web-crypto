import React from 'react'
import { teamArray } from './TeamArray'

export const TeamView = () => {
    return (
        <div className='bg-[#EAEEF2] pt-[90px] pb-[90px]'>
            <div className='max-w-[757px] mx-auto'>
                <div className='text-center text-[12px] uppercase'>
                    <span>Team</span>
                </div>
                <div className='text-center [font-size:_clamp(2em,4vw,58px)] lg:leading-[65px]'>
                    <span>We choose to reveal our identities so you can maintain anonymity.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[90rem] mx-auto gap-5 pt-8 px-5 text-left'>
                {teamArray.map((item) => (
                    <div className='flex flex-col hover:scale-110 cursor-pointer transition-all'>
                        <img className='max-w-[100%]' src={item.icon} alt={item.name} />
                        <div className='pt-5'>
                            <div className='text-[#1673FF]'>
                                <span>{item.category}</span>
                            </div>
                            <div className='flex gap-6 items-center'>
                                <span className='text-[18px] font-medium'>{item.name}</span>
                                <img className='w-4 h-4 cursor-pointer' src={item.linkedin} alt={item.name} />
                            </div>
                            <div className='text-gray-500 pt-1'>
                                {item.position}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
