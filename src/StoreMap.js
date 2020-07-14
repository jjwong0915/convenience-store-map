import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function StoreMap(props) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCVezvkAlBCEx3_AnWQsyFyIUt5k-IkSSY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: props.geolocation.latitude, lng: props.geolocation.longitude }}
        zoom={15}
      >
        <Marker position={{
          lat: props.geolocation.latitude,
          lng: props.geolocation.longitude,
        }} />
        {
          /* Child components, such as markers, info windows, etc. */
          props.store.map((item, idx) => {
            return (
              <Marker
                key={item.LocationY.toString() + "," + item.LocationX.toString()}
                position={{ lat: item.LocationY, lng: item.LocationX }}
                animation={2}
                label={(idx + 1).toString()}
              />
            )
          })
        }
      </GoogleMap>
    </LoadScript>
  )
}

export default StoreMap;
