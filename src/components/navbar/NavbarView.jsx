import React from 'react';
import img_navbar from '../../assets/img/img-navbar.png';

export const NavbarView = () => {
    return (
        <div className='flex bg-[#E7F1FB] h-[78px] items-center justify-center'>
            <div className='flex justify-between px-5 w-[100vw]'>
                <div className='flex cursor-pointer items-center'>
                    <img src={img_navbar} alt='img_navbar' />
                </div>
                <div className='flex gap-8'>
                    <ul className='flex gap-5 text-[#455A74] py-3'>
                        <li className='hover:underline cursor-pointer font-medium uppercase text-[12px]'>Why Blank</li>
                        <li className='hover:underline cursor-pointer font-medium uppercase text-[12px]'>What blank offers</li>
                        <li className='hover:underline cursor-pointer font-medium uppercase text-[12px]'>How it works</li>
                        <li className='hover:underline cursor-pointer font-medium uppercase text-[12px]'>Blank token</li>
                    </ul>
                    <div className='flex'>
                        <button className='bg-[#4C5560] px-7 py-2 text-white rounded-md hover:bg-[#373f44] active:bg-[#000000]'>
                            <span>Token Metrics</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}