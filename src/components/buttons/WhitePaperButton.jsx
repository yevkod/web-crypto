import React from 'react'
import { MainButtonArrow } from '../svgs/mainButtonArrow/MainButtonArrow'

export const WhitePaperButton = ({text, className, fill, ...rest}) => {
    return (
        <div>
            <button className={`flex border-[#BBC4CF] hover:bg-[#e3e5e8] active:bg-[#d8dadc] border-2 gap-16 py-3.5 px-5 text-[12px] rounded-sm uppercase ${className}`} {...rest}>
                <span>{text}</span>
                <div className='w-[16px] h-[16px]'>
                    <MainButtonArrow color={fill} />
                </div>
            </button>
        </div>
    )
}
