import { types } from '../constants/TerrainActionTypes';

export function randomMapGeneratedAction( mapName ) {
  return {
    type: types.RANDOM_MAP_GENERATED,
  };
}

export function randomMapGenerated() {
  return (dispatch, getState) => {
    
    //const { map } = getState();
    console.log("TerrainActions  randomMapGenerated");

    dispatch( randomMapGenerated() );

  };
}