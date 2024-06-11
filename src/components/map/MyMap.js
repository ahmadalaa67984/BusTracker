import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';

const MyMap = () => {
  const position = [51.505, -0.09];
  const busInfo = useSelector((state) => state.bus.busInfo);
  useEffect(()=>{
    console.log(busInfo)
  },[])
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup >
        {busInfo.name}  دورة
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default MyMap;
