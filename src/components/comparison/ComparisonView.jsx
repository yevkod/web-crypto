import React from 'react';
import comparison from '../../assets/img/decentralized.png';

export const ComparisonView = () => {
  return (
    <div>
      <div className='max-w-[90rem] mx-auto pt-[40px] pb-[90px] px-5'>
        <div className='uppercase text-[12px]'>
          <span>Innovating decentralized finance</span>
        </div>
        <div className='uppercase text-center pt-3 lg:leading-[55px] [font-size:_clamp(2em,4vw,8em)] hover:scale-105 cursor-pointer transition-all'>
          <span>We’re taking the best that exists, and making it better.</span>
        </div>
        <div className='flex justify-center pt-20 max-w-[100%] mx-auto'>
          <img className='max-w-[100%]' src={comparison} alt='comparison' />
        </div>
      </div>
    </div>
  )
}
