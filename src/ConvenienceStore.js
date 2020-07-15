import { useState, useEffect } from 'react';
import axios from 'axios';

function useConvenienceStore() {
  const [filter, setFilter] = useState({
    toilet: false,
    atm: false,
    wifi: false,
    coffee: false,
    icecream: false,
  });
  const updateFilter = (filter_type, enabled) => {
    ("update filter");
    setFilter({ ...filter, [filter_type]: enabled });
  };
  //
  const [geolocation, setGeolocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      setGeolocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);
  //
  const [store, setStore] = useState([])
  useEffect(() => {
    axios.get("/api", {
      params: {
        toilet: filter.toilet ? '1' : '0',
        atm: filter.atm ? '1' : '0',
        wifi: filter.wifi ? '1' : '0',
        coffee: filter.coffee ? '1' : '0',
        icecream: filter.icecream ? '1' : '0',
        lat: geolocation.latitude,
        log: geolocation.longitude,
      }
    }).then((result) => {
      setStore(result.data);
    });
  }, [
    filter.toilet, filter.atm, filter.wifi, filter.coffee, filter.icecream,
    geolocation.latitude, geolocation.longitude,
  ]);
  return [filter, geolocation, store, updateFilter];
}

export default useConvenienceStore;