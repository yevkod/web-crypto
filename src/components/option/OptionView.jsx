import React from 'react'
import { RequestButton } from '../buttons/RequestButton'
import { WhitePaperButton } from '../buttons/WhitePaperButton'

export const OptionView = () => {
    return (
        <div className='bg-[#0A121E] pt-[90px] pb-[90px] px-5'>
            <div className='flex flex-col mx-auto max-w-[70rem]'>
                <div className='text-white text-[12px] uppercase'>
                    <span>Your option to go blank</span>
                </div>
                <div className='text-white text-[57px]'>
                    <span>If given a choice: do you reveal your identity or remain anonymous?</span>
                </div>
                <div className='text-[12px] text-[#90A3BF] pt-5'>
                    <span>Because privacy shouldn’t be an “opt-in.” With Blank, it’s something you could occasionally “opt-out” of with</span>
                </div>
                <div className='flex gap-5 mx-auto pt-12'>
                    <div>
                        <RequestButton text='Request Early Access' className='' />
                    </div>
                    <div>
                        <WhitePaperButton text='Whitepaper' fill='white' className='text-white border-[#3B414B] hover:bg-[#21252a] active:bg-[#20303e]' />
                    </div>
                </div>
            </div>
        </div>
    )
}
