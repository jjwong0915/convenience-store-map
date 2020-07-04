import React, { useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

function StoreMap(props) {
  const [state, setState] = props.store;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setState({
        ...state,
        lat: pos.coords.latitude,
        log: pos.coords.longitude,
      });
    });
  });

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCVezvkAlBCEx3_AnWQsyFyIUt5k-IkSSY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: state.lat, lng: state.log }}
        zoom={15}
      >
        { /* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(StoreMap)
