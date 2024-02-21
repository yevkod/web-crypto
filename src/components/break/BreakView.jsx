import React from 'react'
import { RequestButton } from '../buttons/RequestButton'
import { WhitePaperButton } from '../buttons/WhitePaperButton'

export const BreakView = () => {
    return (
        <div className='bg-[#1673FF] pt-[50px] pb-[50px]  lg:pt-[90px] lg:pb-[90px] px-5'>
            <div className='flex flex-col justify-center'>
                <div className='[font-size:_clamp(2em,4vw,58px)]'>
                    <span>Break free from government & <br></br> big tech overwatch. Go Blank.</span>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 mx-auto pt-12'>
                    <div>
                        <RequestButton text='Request Early Access' className='hover:scale-105 bg-[#0d1c32] hover:bg-[#262064] cursor-pointer transition-all' />
                    </div>
                    <div className='mx-auto lg:mx-0'>
                        <WhitePaperButton text='Whitepaper' fill='white' className='text-white border-[#458FFF] hover:bg-[#404fad] active:bg-[#170d26] hover:scale-105 cursor-pointer transition-all' />
                    </div>
                </div>
            </div>
        </div>
    )
}
