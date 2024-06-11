import React, { useEffect, useState } from 'react'
import SingleBusCard from './cards/SingleBusCard'

function BusStateCards({handleSelectedBus}) {
  const withState = true;
  const [busStatus, setBusStatus]=useState('الكل');
  const[dropDown,setDropDown]=useState(false)

  const buses=[{
    id: 1,
    name: 'المعادي',
    state: 'متأخر',
    time: '10',
    date: '2021-10-10',
    driver: 'عثمان',
    speed: '60',
    driverPhone: '01000000000',
    driverImage: 'https://randomuser.me/api',
  },{
    id: 2,
    name: 'مصر الجديدة',
    state: 'في الموعد',
    time: '10',
    date: '2021-10-10',
    driver: 'إبراهيم الابيض',
    speed: '190',
    driverPhone: '01000000000',
    driverImage: 'https://randomuser.me/api',
  }]

  return (
    <div className='bg-white flex flex-col w-full shadow-lg'>
      <div className='flex flex-col bg-[#ffb800] p-2  text-white'>
        <div className='flex flex-row-reverse justify-between items-center '>
          <div className='flex items-center gap-1'>
            <p className='font-semibold'>في الطريق</p>
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9 22H7.10001C5.40001 22 4 20.61 4 18.9V5.10001C4 3.40001 5.39001 2 7.10001 2H16.9C18.6 2 20 3.39001 20 5.10001V18.9C20 20.61 18.61 22 16.9 22Z" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.5 13H5.5C4.67 13 4 12.33 4 11.5V9.5C4 8.67 4.67 8 5.5 8H18.5C19.33 8 20 8.67 20 9.5V11.5C20 12.33 19.33 13 18.5 13Z" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.49451 17.7002H8.50349" stroke="#ffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.4945 17.7002H15.5035" stroke="#ffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.5 5H14.5" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
            <div>
                <svg width="17" height="17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 1 11 1C5.5 1 1 5.5 1 11C1 16.5 5.5 21 11 21Z" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10"/>
                </svg>
            </div>
        </div>
            <div className='flex flex-row-reverse justify-between px-4 items-center gap-1'>
              <div className='flex flex-row-reverse gap-1 items-center'>
                  <p className='font-bold text-2xl'>60</p>
                  <p className='text-2xl font-light' >باصات</p>
              <div>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
                <div className='flex gap-1 relative text-xs'>

                  <div className='relative cursor-pointer' onClick={()=>setDropDown(!dropDown)}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 17.5H15" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M5 17.5H2" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M22 6.5H19" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9 6.5H2" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M11 3.5H17C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5Z" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                  </div>
                  <p className='font-bold'>أختر حالة الباص</p>

                  {dropDown && (
                <div className='absolute flex flex-col top-full bg-white text-black text-xs text-right shadow-md'>
                    <p className='p-1 text-gray-500 hover:bg-gray-200 cursor-pointer w-20 border-b'
                        onClick={() => setBusStatus('الكل')}
                    >الكل</p>
                    <p className='p-1 text-gray-500 hover:bg-gray-200 cursor-pointer w-20 border-b'
                        onClick={() => setBusStatus('في الموعد')}
                    >في الموعد</p>
                    <p className='p-1 text-gray-500 hover:bg-gray-200 cursor-pointer w-20'
                        onClick={() => setBusStatus('متأخر')}
                    >متأخر</p>
                </div>
            )}
                </div>

              </div>
            </div>
      </div>
      <div className='bg-white'>
        {
          buses.map(bus => {
            if(busStatus==='الكل'||bus.state===busStatus)
              {
                return <SingleBusCard bus={bus} key={bus.id} withState={withState} handleSelectedBus={handleSelectedBus} ></SingleBusCard>
              }
          })
        }

      </div>
      <div className='flex flex-col justify-center gap-4 p-4'>
        <p className='text-center text-gray-400'>جميع الرحلات</p>
        <div className='flex gap-2 items-center justify-center'>
            <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
            <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
            <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
        </div>
      </div>
    </div>
  )
}

export default BusStateCards
