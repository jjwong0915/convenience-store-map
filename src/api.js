import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function useConvenienceStore() {
  const [state, setState] = useState({
    toilet: false,
    atm: false,
    wifi: false,
    coffee: false,
    icecream: false,
    lat: 0,
    log: 0,
    storeList: [],
  });
  const previousState = usePrevious(state);
  if (
    state.toilet !== previousState?.toilet ||
    state.atm !== previousState?.atm ||
    state.wifi !== previousState?.wifi ||
    state.coffee !== previousState?.coffee ||
    state.icecream !== previousState?.icecream ||
    state.lat !== previousState?.lat ||
    state.log !== previousState?.log
  ) {
    axios.get("/api", {
      params: {
        toilet: state.toilet ? '1' : '0',
        atm: state.atm ? '1' : '0',
        wifi: state.wifi ? '1' : '0',
        coffee: state.coffee ? '1' : '0',
        icecream: state.icecream ? '1' : '0',
        lat: state.lat,
        log: state.log,
      }
    }).then((result) => {
      setState({ ...state, storeList: result.data });
    });
  }
  return [state, setState];
}

export default useConvenienceStore;