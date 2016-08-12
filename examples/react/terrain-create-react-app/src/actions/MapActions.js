import { GENERATE_RANDOM_MAP } from '../constants/ActionTypes';

export function generateRandomMap( mapName ) {
  return {
    type: GENERATE_RANDOM_MAP,
    mapName: mapName,
  };
}

export function dispatchGenerateRandomMap( mapName ) {
  return (dispatch, getState) => {
    
    //const { map } = getState();

    console.log("MapActions dispatchGenerateRandomMap mapName: ", mapName);

    let what = dispatch( generateRandomMap( mapName ) );

     console.log("MapActions dispatchGenerateRandomMap what: ", what);
  };
}