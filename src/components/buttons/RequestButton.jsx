import React from 'react'
import { MainButtonArrow } from '../svgs/mainButtonArrow/MainButtonArrow'

export const RequestButton = ({text, className, ...rest}) => {
    return (
        <div>
            <button className={`flex bg-[#1673FF] hover:bg-[#4276c5] active:bg-[#2f5389] px-7 gap-12 w-full items-center py-4 justify-around text-white rounded-sm text-[12px] uppercase ${className}`} {...rest}>
                <span>{text}</span>
                <div className='w-[16px] h-[16px]'>
                    <MainButtonArrow color="white" />
                </div>
            </button>
        </div>
    )
}
