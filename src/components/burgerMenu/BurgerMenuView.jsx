import React from 'react'
import { Link } from 'react-scroll'

export const BurgerMenuView = ({ setMenu }) => {

    const handleMenu = () => {
        setMenu(false);
    }

    return (
        <div className='flex z-50 flex-col py-10 px-10 shadow-md rounded-lg'>
            <ul className='flex flex-col gap-5'>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="anonymousView" smooth={true} duration={500} onClick={handleMenu}>Why Blank</Link>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="howItWorkView" smooth={true} duration={500} onClick={handleMenu}>How it Works</Link>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="utilityView" smooth={true} duration={500} onClick={handleMenu}>Blank Token</Link>
                </li>
                <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                    <Link to="comparisonView" smooth={true} duration={500} onClick={handleMenu}>What Blank Offers</Link>
                </li>
            </ul>
            <div className='flex flex-col pt-8 gap-5'>
                <div>
                    <button className='bg-[#4C5560] px-7 py-2 text-white rounded-md hover:bg-[#373f44] active:bg-[#000000] hover:scale-105 cursor-pointer transition-all'>
                        <span>Token Metrics</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
