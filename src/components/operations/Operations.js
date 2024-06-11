import React from 'react'
import OperationInfoCard from './OperationInfoCard'
import BusStateCards from './BusStateCardsLate';
import { useSelector } from 'react-redux';

function Operations({selectedBus}) {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
  return (
    <div className='flex items-center bg-[#ebebf2] p-2  shadow-md z-10 justify-between'>
        <div>
             <OperationInfoCard selectedBus={selectedBus}></OperationInfoCard>
        </div>
        <div className='flex flex-col gap-1'>
            <p className='font-bold text-2xl'>جميع العمليات</p>

            <p className='text-gray-600'>{formattedDate}</p>
        </div>

    </div>
  )
}

export default Operations
