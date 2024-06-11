import React from 'react'
import { useDispatch } from 'react-redux';
import { setBusInfo } from '../../store/store';
import { useNavigate } from 'react-router-dom';

function OperationInfoCard({selectedBus}) {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = () => {
        dispatch(setBusInfo(selectedBus));
        navigate('/map');
      };
  return (
    <div className='bg-white flex items-center flex-row-reverse p-2 gap-4 shadow-sm' >
        <div className='flex flex-col'>
            <div className='flex flex-row-reverse items-end'>
                <p className='font-bold'>
                {selectedBus.name}
                </p>
                <div className='flex gap-1 pr-1'>
                  <p className='text-gray-400 text-sm'>دقيقة</p>
                  <p className='text-gray-400 text-sm'>{selectedBus.time}</p>
                </div>
            </div>
            <div className='flex flex-row-reverse text-gray-400 items-center gap-1'>
                 <div>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='text-sm '>
                    {selectedBus.driver}
                </p>
                <div>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-row-reverse items-center gap-1'>
                <div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12" stroke="#ff002f" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001" stroke="#ff002f" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <p className='font-bold text-[#ff002f] text-lg'>
                    {selectedBus.speed}
                </p>
                <p className='text-gray-400 text-xs font-bold'>كم /دقيقة</p>
            </div>
            <div className='flex flex-row-reverse text-gray-400 items-center gap-1'>

                <p className='text-sm '>
                    تخطى السرعة
                </p>

            </div>
        </div>
        <div className='cursor-pointer h-full hover:bg-gray-200 rounded-full p-1' onClick={()=>handleSubmit()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z" stroke="#292D32" stroke-width="1.5"/>
            <path d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z" stroke="#292D32" stroke-width="1.5"/>
            </svg>

        </div>
    </div>
  )
}

export default OperationInfoCard
