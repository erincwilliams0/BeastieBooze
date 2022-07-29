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

// const LatLngLiteral = new google.maps.LatLngLiteral;
// const DirectionsResult = google.maps.DirectionsResult;
// const MapOptions = google.maps.MapOptions;
// const service = new google.maps.places.PlacesService(map);


const Map = () => {
  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 29.951065, lng: -90.071533 }), []);
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), []);
  const onLoad = useCallback(map => (mapRef.current = map), []);
  // const bars = useMemo(() => generateBars(center), [center]);

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
          onLoad={onLoad}
        >
        </GoogleMap>
      </div>
    </div>
  )
}

// const generateBars = (center) => {
//   const _bars = [];

//   for(let i = 0; i < 50; i++) {
//     const direction = Math.random() < 0.5 ? -2 : 2;
//     _bars.push({
//       lat: center.lat + Math.random() / direction,
//       lng: center.lng + Math.random() / direction
//     });
//   }

//   return _bars;
// }

export default Map;