import React from 'react';
import img_navbar from '../../assets/img/img-navbar.png';
import burger from '../../assets/img/burgerIcon.svg';
import { Link } from 'react-scroll';

export const NavbarView = ({ menu, setMenu }) => {

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <div className='flex bg-[#E7F1FB] fixed z-[10000] h-[78px] items-center justify-center'>
            <div className='flex justify-between px-5 w-[100vw]'>
                <div className='flex cursor-pointer items-center hover:scale-105 transition-all'>
                    <img src={img_navbar} alt='img_navbar' />
                </div>
                <div className='flex gap-8 px-5'>
                    <ul className='hidden lg:flex gap-5 text-[#455A74] py-3'>
                        <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                            <Link to="anonymousView" smooth={true} duration={500}>Why Blank</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                            <Link to="howItWorkView" smooth={true} duration={500}>How it Works</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                            <Link to="utilityView" smooth={true} duration={500}>Blank Token</Link>
                        </li>
                        <li className='hover:underline hover:scale-110 cursor-pointer transition-all font-medium uppercase text-[12px]'>
                            <Link to="comparisonView" smooth={true} duration={500}>What Blank Offers</Link>
                        </li>
                    </ul>
                    <div className='flex lg:hidden justify-end w-10 cursor-pointer' onClick={handleMenu}>
                        <img src={burger} alt='burger' />
                    </div>
                    <div className='hidden lg:flex'>
                        <button className='bg-[#4C5560] px-7 py-2 text-white rounded-md hover:bg-[#373f44] active:bg-[#000000] hover:scale-105 cursor-pointer transition-all'>
                            <span>Token Metrics</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
