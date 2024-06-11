import React from 'react'
import SingleBusCard from './cards/SingleBusCard'

function BusStateCards({handleSelectedBus}) {
  const buses=[{
    id: 1,
    name: 'التجمع الخامس',
    state: 'late',
    time: '10',
    date: '2021-10-10',
    driver: 'عم ايمن',
    speed: '60',
    driverPhone: '01000000000',
    driverImage: 'https://randomuser.me/api',
  },{
    id: 2,
    name: 'مدينتي',
    state: 'late',
    time: '10',
    date: '2021-10-10',
    driver: 'حماده الاسمر',
    speed: '60',
    driverPhone: '01000000000',
    driverImage: 'https://randomuser.me/api',
  }]
  return (
    <div className='bg-white flex flex-col w-full shadow-lg'>
      <div className='flex flex-col bg-[#00da4c] p-2  text-white'>
        <div className='flex flex-row-reverse justify-between items-center '>
          <div className='flex items-center gap-1'>
            <p className='font-semibold'>منتهي</p>
            <div>
                <svg width="18" height="10" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.31055 3.7002L2.81055 5.2002L6.81055 1.2002" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
              </div>
            </div>
      </div>
      <div className='bg-white'>
      {
          buses.map(bus => {
            return <SingleBusCard bus={bus} key={bus.id} handleSelectedBus={handleSelectedBus}></SingleBusCard>
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
