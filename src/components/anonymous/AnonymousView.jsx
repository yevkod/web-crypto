import React from 'react';
import img_right from '../../assets/img/anonymous.right.png';

export const AnonymousView = () => {
    return (
        <div className='pt-[90px] pb-[90px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-[90rem]'>
                <div className='flex flex-col justify-center text-left max-w-[559px] px-5'>
                    <div className='uppercase text-[12px] pl-5'>
                        <span>Why go blank</span>
                    </div>
                    <div className='text-[58px] leading-[65px] pt-5'>
                        <span>You’re not anonymous, even on blockchain.</span>
                    </div>
                    <div className='text-[17px] text-[#455A74] pt-5'>
                        <span>Even before you connect your wallet, your IP is exposed. Once you connect, your wallet address is exposed. If anyone wants to trace you, they can see the decentralized apps you used, the transfers you made, and the amount of crypto $$$ you hold in your account.</span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={img_right} alt='img_right' />
                </div>
            </div>
        </div>
    )
}