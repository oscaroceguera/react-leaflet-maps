import React, { useRef, useState} from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import logo from './logo.svg';
import './App.css';

function App () {
  const [location, setLocation] = useState({
    hasLocation: false,
    latlng: {
      lat: 24.829503 ,
      lng: -107.430475
    }
  })

  const mapRef = useRef(null)

  const handleClick = () => {
    const map = mapRef.current

    if (map != null) {
      map.leafletElement.locate()
    }
  }

  const handleLocationFound = e => {
    setLocation({
      hasLocation: true,
      latlng: e.latlng
    })
  }

  const marker = location.hasLocation ? (
    <Marker position={location.latlng}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null

  return (
    <Map
      center={location.latlng}
      length={4}
      onClick={handleClick}
      onLocationFound={handleLocationFound}
      ref={mapRef}
      zoom={13}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker}
    </Map>
  );

}


export default App;
