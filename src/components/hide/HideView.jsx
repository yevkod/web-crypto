import React from 'react';
import hide_img from '../../assets/img/hide-arrow.png';
import { hideArray } from './HideArray';

export const HideView = () => {
    return (
        <div className='pt-[90px] pb-[90px]'>
            <div>
                <div>
                    <span className='uppercase text-[12px]'>What blank does</span>
                </div>
                <div>
                    <span className='[font-size:_clamp(2em,4vw,8em)]'>Hide it all. Go Blank.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-8 lg:grid-cols-3 gap-12 lg:gap-5 max-w-[90rem] mx-auto px-5'>
                {hideArray.map((item) => (
                    <div className='flex flex-col h-full mx-auto lg:mx-0 w-full hover:scale-110 cursor-pointer transition-all max-w-[392px] max-h-[440px] bg-[#E7F1FB] py-28 px-5' style={{ backgroundImage: `url(${item.background})` }}
                    >
                        <div className='flex justify-center' >
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className='pt-5 text-[20px] font-medium'>
                            <span>{item.title}</span>
                        </div>
                        <div className='text-center pt-5 text-[#455A74] text-[16px]'>
                            <span>{item.description}</span>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
