import React from 'react';
import { extensionArray, privacyArray, secureArray } from './HowItWorkArray';


export const HowItWorkView = () => {
  return (
    <div className='pt-[90px] pb-[90px]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-5 max-w-[90rem] mx-auto'>
        {extensionArray.map((item) => (
          <>
            <div>
              <img src={item.icon} alt={item.title} />
            </div>
            <div className='text-left max-w-[560px]'>
              <div className='text-[12px] uppercase pl-5 pt-3'>
                <span>{item.title}</span>
              </div>
              <div className='text-[58px] leading-[60px] pt-8'>
                <span>{item.content}</span>
              </div>
              <div className='text-[18px] text-[#455A74] pt-8'>
                <span>{item.description}</span>
                <div className='pt-8'>
                  <span>{item.definition}</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-5 pt-[90px] max-w-[90rem] mx-auto'>
        {privacyArray.map((item) => (
          <>
            <div className='text-left max-w-[560px]'>
              <div className='text-[12px] uppercase pl-5 pt-3'>
                <span>{item.title}</span>
              </div>
              <div className='text-[58px] leading-[60px] pt-8'>
                <span>{item.content}</span>
              </div>
              <div className='text-[18px] text-[#455A74] pt-8'>
                <span>{item.description}</span>
                <div className='flex flex-col pt-5 gap-3'>
                  {item.definitions.map((definition, index) => (
                    <div className='flex items-center gap-2'>
                      <img className='w-4 h-4' src={definition.tick} alt={item.title} />
                      <div className='text-black'>
                        <span>{definition.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <img src={item.icon} alt={item.title} />
            </div>
          </>
        ))}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-5 pt-[90px] max-w-[90rem] mx-auto'>
        {secureArray.map((item) => (
          <>
            <div className='flex justify-start'>
              <img src={item.icon} alt={item.title} />
            </div>
            <div className='text-left max-w-[560px]'>
              <div className='text-[12px] uppercase pl-5 pt-3'>
                <span>{item.title}</span>
              </div>
              <div className='text-[58px] leading-[60px] pt-8'>
                <span>{item.content}</span>
              </div>
              <div className='text-[18px] text-[#455A74] pt-8'>
                <span>{item.description}</span>
                <div className='flex flex-col pt-5 gap-3'>
                  {item.definitions.map((definition, index) => (
                    <div className='flex items-center gap-2'>
                      <img className='w-4 h-4' src={definition.tick} alt={item.title} />
                      <div className='text-black'>
                        <span>{definition.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
