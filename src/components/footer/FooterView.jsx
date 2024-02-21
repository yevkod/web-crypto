import React from 'react';
import img_1 from '../../assets/img/footer-img.png';

export const FooterView = () => {
    return (
        <div className='bg-[#0A121E] pt-[120px] pb-[40px] px-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[90rem] mx-auto'>
                <div className='max-w-[416px] mx-auto lg:mx-0'>
                    <div className='flex justify-center lg:justify-start'>
                        <img src={img_1} alt='' />
                    </div>
                    <div className='text-white lg:text-left pt-5'>
                        <span>Privacy shouldn’t be an “opt-in.” Rather, it must be something you could occasionally “opt-out” of on Free Will.</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-0'>
                    <div className='text-white'>
                        <div className='text-gray-400'>
                            Legal
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>Privacy Policy</span>
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>Terms & Conditions</span>
                        </div>
                    </div>
                    <div className='text-white pt-8 md:pt-0'>
                        <div className='text-gray-400'>
                            Socials
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>Medium</span>
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>Github</span>
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>Twitter</span>
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>Telegram</span>
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>Linkedin</span>
                        </div>
                    </div>
                    <div className='text-white pt-8 md:pt-0'>
                        <div className='text-gray-400'>
                            Get in touch
                        </div>
                        <div className='hover:scale-125 cursor-pointer transition-all'>
                            <span>info@goblank.io</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white pt-20'>
                <div>
                    <span>Copyright © Blank 2021. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}
