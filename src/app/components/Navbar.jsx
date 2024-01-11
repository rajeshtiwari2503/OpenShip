"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenMore, setIsOpenMore] = useState(false);
    const [selectIcon, setSelectIcon] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdownMore = () => {
        setIsOpenMore(!isOpenMore);
        setSelectIcon(!selectIcon)
    };

    return (
        <nav className='fixed top-0  left-0 right-0 z-10 bg-[#2874f0] bg-opacity-100'>
            <div className='flex container py-1  flex-wrap items-center justify-between mx-auto px-36  '>
                <div>
                    <Link href={"/"} className='text-3xl md:text-2xl text-white font-semibold' >
                        FlipKart
                    </Link>
                    <div style={{ marginTop: "-5px" }} className='text-sm'> Explore Plus+</div>
                </div>

                <div className='   flex  items-center'>
                    <div className='w-[360px] relative'>
                        <div className='relative'>
                            <input className='w-full p-2 bg-white' type='text' placeholder='Seach for product brands and more' />
                            <button className='absolute right-1  -translat-y-1/2 p-2 '>
                                <SearchIcon color='primary' fontSize='medium'/>
                            </button>
                        </div>
                    </div>
                    <div className="  relative inline-block text-left" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} >
                        <div className='cursor-poiter font-bold ml-5 pl-8 pr-8  bg-white flex items-center justify-center text-[#a2c3f9] ' >
                            <div className='p-1'>Login</div>
                            {isOpen && (
                                <div className="w-[250px] absolute top-10   rounded-md shadow-lg"  >
                                    <div className=' flex justify-center mt-2'>
                                        <div className='w-10 h-4 ml-4  absolute bg-white rotate-45'>

                                        </div>
                                    </div>
                                    <div className='   bg-white'>
                                        {/* Dropdown content */}
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 1
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 2
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 3
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='font-bold pl-10 text-white'>Become a Seller</div>
                    <div className="  relative inline-block text-left" onMouseEnter={toggleDropdownMore} onMouseLeave={toggleDropdownMore} >
                        <div className='cursor-poiter font-bold    flex items-center justify-center text-[#a2c3f9] ' >
                            <div className='font-bold pl-12 text-white'>More 
                           {selectIcon ?
                            <KeyboardArrowDownIcon />
                          :  <KeyboardArrowUpIcon />
                            }
                            </div>
                            {isOpenMore && (
                                <div className="w-[250px] ml-14 absolute top-10   rounded-md shadow-lg"  >
                                    <div className=' flex justify-center mt-1'>
                                        <div className='w-10 h-4 ml-4  absolute bg-white rotate-45'>

                                        </div>
                                    </div>
                                    <div className='   bg-white'>
                                        {/* Dropdown content */}
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 1
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 2
                                            </a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                Option 3
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='font-bold pl-12 text-white'>
                    <ShoppingCartIcon />
                       <span className='ml-2'>Cart</span> 
                        
                        </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar