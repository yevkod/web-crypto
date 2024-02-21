import React from 'react';
import { utilityArray } from './UtilityArray';

export const UtilityView = () => {
    return (
        <div className='pt-[50px] pb-[50px]  lg:pt-[90px] lg:pb-[90px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 mx-auto max-w-[90rem]'>
                <div className='flex flex-col mx-auto lg:mx-0'>
                    <div className='text-[12px] text-left pl-5 uppercase'>
                        <span>Blank token</span>
                    </div>
                    <div className='[font-size:_clamp(2em,4vw,58px)] lg:leading-[55px] text-left hover:scale-105 cursor-pointer transition-all'>
                        <span>BLANK Token Utility starts on Day 1.</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-auto lg:mx-0 gap-5 lg:gap-3 pt-10 lg:pt-0'>
                    {utilityArray.map((item) => (
                        <div className='flex flex-col max-w-[188px] gap-5 hover:scale-105 cursor-pointer transition-all'>
                            <div className='pt-3'>
                                <img src={item.icon} alt={item.text} />
                            </div>
                            <div className='flex text-left'>
                                <span>{item.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
