import React from 'react';
import { utilityArray } from './UtilityArray';

export const UtilityView = () => {
    return (
        <div className='pt-[90px] pb-[90px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 mx-auto max-w-[90rem]'>
                <div className='flex flex-col'>
                    <div className='text-[12px] text-left pl-5 uppercase'>
                        <span>Blank token</span>
                    </div>
                    <div className='text-[58px] leading-[55px] text-left'>
                        <span>BLANK Token Utility starts on Day 1.</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {utilityArray.map((item) => (
                        <div className='flex flex-col max-w-[188px] gap-5'>
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
