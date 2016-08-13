import { types } from '../constants/TerrainActionTypes';

export function startGeneratingMapAction() {
  return {
    type: types.RANDOM_MAP_START,
  };
}

export function startGeneratingMap() {
  return (dispatch, getState) => {
    
    //const { map } = getState();
    console.log("TerrainActions  startGeneratingMap");

    let action = startGeneratingMapAction();

    dispatch( action );

  };
}