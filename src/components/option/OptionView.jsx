import React from 'react'
import { RequestButton } from '../buttons/RequestButton'
import { WhitePaperButton } from '../buttons/WhitePaperButton'

export const OptionView = () => {
    return (
        <div className='bg-[#0A121E] pt-[50px] pb-[50px]  lg:pt-[90px] lg:pb-[90px] px-5'>
            <div className='flex flex-col mx-auto max-w-[70rem]'>
                <div className='text-white text-[12px] uppercase'>
                    <span>Your option to go blank</span>
                </div>
                <div className='text-white [font-size:_clamp(2em,4vw,58px)]'>
                    <span>If given a choice: do you reveal your identity or remain anonymous?</span>
                </div>
                <div className='text-[12px] text-[#90A3BF] pt-5'>
                    <span>Because privacy shouldn’t be an “opt-in.” With Blank, it’s something you could occasionally “opt-out” of with</span>
                </div>
                <div className='flex flex-col lg:flex-row gap-5 mx-auto pt-12'>
                    <div>
                        <RequestButton text='Request Early Access' className='hover:scale-105 cursor-pointer transition-all' />
                    </div>
                    <div className='mx-auto lg:mx-0'>
                        <WhitePaperButton text='Whitepaper' fill='white' className='text-white border-[#3B414B] hover:bg-[#21252a] active:bg-[#20303e] hover:scale-105 cursor-pointer transition-all' />
                    </div>
                </div>
            </div>
        </div>
    )
}
