import React from 'react'
import { marketArray } from './UtilityArray'

export const MarketView = () => {
    return (
        <div className='pt-[90px] pb-[90px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 mx-auto max-w-[90rem]'>
                <div className='flex flex-col'>
                    <div className='text-[12px] text-left pl-5 uppercase'>
                        <span>Market</span>
                    </div>
                    <div className='text-[58px] leading-[55px] text-left'>
                        <span>We’ve eliminated friction to guarantee successful market entrance.</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {marketArray.map((item) => (
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
