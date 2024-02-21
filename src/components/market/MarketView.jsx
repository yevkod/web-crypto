import React from 'react'
import { marketArray } from './UtilityArray'

export const MarketView = () => {
    return (
        <div className='pt-[90px] pb-[90px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 mx-auto max-w-[90rem] gap-16'>
                <div className='flex flex-col mx-auto lg:mx-0'>
                    <div className='text-[12px] text-left pl-5 uppercase'>
                        <span>Market</span>
                    </div>
                    <div className='[font-size:_clamp(2em,4vw,58px)] lg:leading-[55px] text-left max-w-[559px] hover:scale-105 cursor-pointer transition-all'>
                        <span>We’ve eliminated friction to guarantee successful market entrance.</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mx-auto lg:mx-0 gap-5 lg:gap-3'>
                    {marketArray.map((item) => (
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
