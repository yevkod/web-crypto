import React from 'react';
import main_img from '../../assets/img/bg-img-main.png';
import img_right from '../../assets/img/main-right-all.png';
import { RequestButton } from '../buttons/RequestButton';
import { WhitePaperButton } from '../buttons/WhitePaperButton';

export const MainView = () => {
    return (
        <div className='relative bg-main bg-cover bg-center h-full w-full pt-[50px] pb-[50px]  lg:pt-[90px] lg:pb-[90px] z-20'>
            <div className='flex absolute bottom-0 right-0 h-[] -z-10'>
                <img src={main_img} alt='main_img' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto p-5 gap-16'>
                <div className='flex relative justify-center flex-col items-center lg:items-start'>
                    <div className='text-[12px] uppercase pl-4 pt-5 lg:pt-0'>
                        <span>The most private, non-custodial Ethereum wallet</span>
                    </div>
                    <div className='[font-size:_clamp(2em,4vw,58px)] text-left lg:leading-[72px] pt-4 hover:scale-105 cursor-pointer transition-all'>
                        <span>Reclaim privacy <br></br> on your Ethereum transfers</span>
                    </div>
                    <div className='flex flex-col items-start text-[18px] pt-8 text-[#455A74]'>
                        <span className='text-left'>Blank hides your financial data by mixing transfers with the pool of funds within Blank, ensuring that outward transfers remain anonymous. Your privacy level only goes up with each additional transfer inside.</span>
                    </div>
                    <div className='flex flex-col sm:flex-row mx-auto sm:mx-0 gap-12 pt-7'>
                        <div className='flex w-full'>
                            <RequestButton text='Request Early Access' className='hover:scale-105 cursor-pointer transition-all' />
                        </div>
                        <div className='flex flex-col sm:flex-row mx-auto sm:mx-0'>
                            <WhitePaperButton text='Whitepaper' fill='black' className='hover:scale-105 cursor-pointer transition-all' />
                        </div>
                    </div>
                </div>
                <div className='flex relative justify-center'>
                    <div className='max-w-[100%] hover:scale-105 cursor-pointer transition-all'>
                        <img src={img_right} alt='img_right' />
                    </div>
                </div>
            </div>
        </div>
    )
}
