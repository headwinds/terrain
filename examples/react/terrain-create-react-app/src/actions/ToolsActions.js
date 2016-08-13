import { types } from '../constants/ToolsActionTypes';

export function generateRandomMap( mapName ) {
  return {
    type: types.GENERATE_RANDOM_MAP,
    mapName: mapName,
  };
}

export function dispatchGenerateRandomMap( mapName ) {
  return (dispatch, getState) => {
    
    //const { map } = getState();

    console.log("MapActions dispatchGenerateRandomMap arguments: ", arguments);

    dispatch( generateRandomMap( mapName ) );

     
  };
}