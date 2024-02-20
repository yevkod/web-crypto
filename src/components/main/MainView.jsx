import React from 'react';
import { mainArray } from './MainArray';
import main_img from '../../assets/img/bg-img-main.png';
import img_right from '../../assets/img/bg-img-right.png';
import img_right_ui from '../../assets/img/img-right-main.png';
import { RequestButton } from '../buttons/RequestButton';
import { WhitePaperButton } from '../buttons/WhitePaperButton';

export const MainView = () => {
    return (
        <div className='relative bg-main bg-cover bg-center h-full w-full pt-[90px] pb-[90px] z-20'>
            <div className='flex absolute bottom-0 right-0 h-[] -z-10'>
                <img src={main_img} alt='main_img' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto p-5 gap-16'>
                <div className='flex relative flex-col items-start'>
                    {/* <div className='flex flex-col h-4 gap-5'>
                        {mainArray.map((item) => (
                            <>
                                <div className='flex flex-col'>
                                    <img className='h-3 w-3 cursor-pointer' src={item.icon} alt='images' />
                                </div>
                            </>
                        ))}
                    </div> */}
                    <div className='text-[12px] uppercase pl-4'>
                        <span>The most private, non-custodial Ethereum wallet</span>
                    </div>
                    <div className='text-[72px] text-left leading-[72px] pt-4'>
                        <span>Reclaim privacy <br></br> on your Ethereum transfers</span>
                    </div>
                    <div className='flex flex-col items-start text-[18px] pt-8 text-[#455A74]'>
                        <span className='text-left'>Blank hides your financial data by mixing transfers with the pool of funds within Blank, ensuring that outward transfers remain anonymous. Your privacy level only goes up with each additional transfer inside.</span>
                    </div>
                    <div className='flex gap-12 pt-7'>
                        <div className='flex w-full'>
                            <RequestButton text='Request Early Access' className='' />
                        </div>
                        <div>
                            <WhitePaperButton text='Whitepaper' fill='black' className='' />
                        </div>
                    </div>
                </div>
                <div className='flex relative justify-center'>
                    <div className='max-w-[100%]'>
                        <img src={img_right} alt='img_right' />
                    </div>
                    <div className='absolute top-[2%] right-[20%] max-w-[100%]'>
                        <img src={img_right_ui} alt='img_right_ui' />
                    </div>
                </div>
            </div>
        </div>
    )
}
