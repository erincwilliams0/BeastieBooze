import React, { useState, useMemo, useCallback, useRef } from 'react';
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from '@react-google-maps/api';
// import Places from './places.jsx';
// import Distance from './distance.jsx';

// const LatLngLiteral = google.maps.LatLngLiteral;
// const DirectionsResult = google.maps.DirectionsResult;
// const MapOptions = google.maps.MapOptions;


const Map = () => {
  const center = useMemo(() => ({ lat: 29.951065, lng: -90.071533 }), []);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), []);

  return (
    <div style={{
      display: 'flex',
      height: '100vh'
    }}>
      <div className='map'>
        <GoogleMap
          zoom={12.3}
          center={center}
          mapContainerClassName='map-container'
          options={options}
        ></GoogleMap>
      </div>
    </div>
  )
}

// const generateBars = (position: LatLngLiteral) => {
//   const _bars: Array<LatLngLiteral> = [];

//   for(let i = 0; i < 50; i++) {
//     const direction = Math.random() < 0.5 ? -2 : 2;
//     _bars.push({
//       lat: position.lat + Math.random() / direction,
//       lng: position.lng + Math.random() / direction
//     });
//   }

//   return _bars;
// }

export default Map;