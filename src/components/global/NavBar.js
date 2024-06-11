import React from 'react'
import { useSelector } from 'react-redux';

function NavBar() {

  return (
    <div className="flex w-full shadow-md items-center z-[999] bg-white">
        <div className='flex justify-center items-center p-4 bg-gray-400'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22Z" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.9707 12.7001L7.9707 12.6801C8.7207 12.6801 9.5607 13.2501 9.8407 13.9501L10.9807 16.8301C11.2407 17.4801 11.6507 17.4801 11.9107 16.8301L14.2007 11.0201C14.4207 10.4601 14.8307 10.4401 15.1107 10.9701L16.1507 12.9401C16.4607 13.5301 17.2607 14.0101 17.9207 14.0101H21.9807" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>

        <div className='flex justify-between flex-1'>
            <div className='p-4'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0206 2.91016C8.71058 2.91016 6.02058 5.60016 6.02058 8.91016V11.8002C6.02058 12.4102 5.76058 13.3402 5.45058 13.8602L4.30058 15.7702C3.59058 16.9502 4.08058 18.2602 5.38058 18.7002C9.69058 20.1402 14.3406 20.1402 18.6506 18.7002C19.8606 18.3002 20.3906 16.8702 19.7306 15.7702L18.5806 13.8602C18.2806 13.3402 18.0206 12.4102 18.0206 11.8002V8.91016C18.0206 5.61016 15.3206 2.91016 12.0206 2.91016Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
            </div>
            <div className='flex flex-row-reverse gap-1 items-center  p-2'>
                <div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 22L20 20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <input type="text" className='p-2  text-right outline-none' placeholder='البحث'/>
            </div>
        </div>
        <div className='flex  gap-1 items-center  p-3 border-l'>
        <p className='px-4 py-1 bg-[#5900ff] text-white rounded-sm cursor-pointer'>easy</p>
            <div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 22V11" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 7V2" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22V17" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13V2" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 22V11" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5 7V2" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 11H7" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 11H21" stroke="#5900ff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 13H14" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

        </div>
    </div>
  )
}

export default NavBar
