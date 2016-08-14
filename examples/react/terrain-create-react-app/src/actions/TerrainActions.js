import { types } from '../constants/TerrainActionTypes';


// Start generating map


export function startGeneratingMapAction() {
  return {
    type: types.RANDOM_MAP_START,
  };
}



export function startGeneratingMapCommand() {
  return (dispatch, getState) => {
    
    //const { map } = getState();
    console.log("TerrainActions  startGeneratingMap");

    let action = startGeneratingMapAction();

    dispatch( action );

  };
}

// Map has completed rendering

export function mapCompleteAction() {
  return {
    type: types.RANDOM_MAP_COMPLETE,
  };
}

export function mapCompleteCommand() {
  return (dispatch, getState) => {
    
    //const { map } = getState();
    console.log("TerrainActions  mapComplete");

    let action = mapCompleteAction();

    dispatch( action );

  };
}