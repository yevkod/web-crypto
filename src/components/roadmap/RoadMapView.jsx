import React from 'react'

export const RoadMapView = () => {
    return (
        <div className='pt-[50px] pb-[50px]  lg:pt-[90px] lg:pb-[90px] px-5'>
            <div className='max-w-[90rem] mx-auto'>
                <div className='flex flex-col items-center lg:items-start'>
                    <div className='text-[12px] uppercase text-left pl-5'>
                        <span>Roadmap</span>
                    </div>
                    <div className='[font-size:_clamp(2em,4vw,58px)] max-w-[623px] lg:text-left lg:leading-[65px] hover:scale-105 cursor-pointer transition-all text-center'>
                        <span>A roadmap that delivers instant functionality, with more to come.</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-cols-5 text-left pt-8'>
                    <div className='max-w-[288px] mx-auto'>
                        <div className='border-b-2 border-[#EAEEF2]'>2021 Q1</div>
                        <div className='pt-3'>
                            <span>Blank V1 - Early Access</span>
                        </div>
                        <div className='flex flex-col bg-[#E7F1FB] p-4 mt-5 font-medium hover:scale-105 cursor-pointer transition-all'>
                            <div>
                                <span>Web Extension and Blank Tornado Relayer</span>
                            </div>
                            <div>
                                <span>Proof-of-Funds Compliance Key</span>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[288px] mx-auto pt-5 md:p-0'>
                        <div className='border-b-2 border-[#EAEEF2]'>2021 Q2</div>
                        <div className='pt-3'>
                            <span>Blank V2</span>
                        </div>
                        <div className='flex flex-col bg-[#E7F1FB] p-4 mt-5 font-medium hover:scale-105 cursor-pointer transition-all'>
                            <div>
                                <span>ERC-20 Support</span>
                            </div>
                            <div>
                                <span>Web3 Compatibility</span>
                            </div>
                        </div>
                        <div className='flex flex-col bg-[#E7F1FB] mt-4 p-4 font-medium hover:scale-105 cursor-pointer transition-all'>
                            <div>
                                <span>Public Security Audit</span>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[288px] mx-auto pt-5 lg:p-0'>
                        <div className='border-b-2 border-[#EAEEF2]'>2021 Q3</div>
                        <div className='pt-3'>
                            <span>Blank V3</span>
                        </div>
                        <div className='flex flex-col bg-[#E7F1FB] p-4 mt-5 font-medium hover:scale-105 cursor-pointer transition-all'>
                            <div>
                                <span>Automatic Deposits</span>
                            </div>
                            <div>
                                <span>One Time Address</span>
                            </div>
                            <div>
                                <span>Referral System</span>
                            </div>
                            <div>
                                <span>Tor Integration</span>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[288px] mx-auto pt-5 lg:p-0'>
                        <div className='border-b-2 border-[#EAEEF2]'>2021 Q4</div>
                        <div className='pt-3'>
                            <span>Blank V4</span>
                        </div>
                        <div className='flex flex-col bg-[#E7F1FB] p-4 mt-5 font-medium hover:scale-105 cursor-pointer transition-all'>
                            <div>
                                <span>Partial Withdrawal</span>
                            </div>
                            <div>
                                <span>Unique Liquidity Provision Incentives Platform</span>
                            </div>
                            <div>
                                <span>Integration with Metamask Snaps Plugin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
