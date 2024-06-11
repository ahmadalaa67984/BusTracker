import React, { useEffect, useState } from 'react'
import Operations from '../components/operations/Operations'
import BusStateCards from '../components/operations/BusStateCardsLate'
import BusStateCardsInWay from '../components/operations/BusStateCardsInWay'
import BusStateCardsArraived from '../components/operations/BusStateCardsArraived'
import axios from 'axios';


function DashBoard() {
  const [selectedBus,setSelectedBus] = useState({
    id: 1,
    name: 'المعادي',
    state: 'late',
    time: '10',
    date: '2021-10-10',
    driver: 'حماده الاسمر',
    speed: '60',
    driverPhone: '01000000000',
    driverImage: 'https://randomuser.me/api',
  });

  const handleSelectedBus = (bus) => {
    setSelectedBus(bus);
    console.log(bus);
  }
  const fetchBuses=async()=>{
    const url = 'https://retro.umoiq.com/service/publicXMLFeed?command=agencyList ';

        // Make a GET request to the URL
        axios.get(url)
        .then(response => {
            // Handle the response data
            console.log('Data:', response.data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
  }
  useEffect(()=>{
    //call the api with get method using axios
    fetchBuses();

  },[])
  return (
    <div className='flex flex-col '>
        <Operations selectedBus={selectedBus}/>
        <div className='flex flex-row-reverse justify-around flex-1 py-10'>
          <div className='w-[30%]'>
            <BusStateCards handleSelectedBus={handleSelectedBus}></BusStateCards>
          </div>
          <div className='w-[30%]'>
            <BusStateCardsInWay handleSelectedBus={handleSelectedBus}></BusStateCardsInWay>
          </div>
          <div className='w-[30%]'>
            <BusStateCardsArraived  handleSelectedBus={handleSelectedBus}></BusStateCardsArraived>
          </div>
        </div>
    </div>
  )
}

export default DashBoard
