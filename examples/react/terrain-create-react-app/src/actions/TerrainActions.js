import { types } from '../constants/TerrainActionTypes';

export function randomMapGeneratedAction() {
  return {
    type: types.RANDOM_MAP_GENERATED,
  };
}

export function randomMapGenerated() {
  return (dispatch, getState) => {
    
    //const { map } = getState();
    console.log("TerrainActions  randomMapGenerated");

    let action = randomMapGeneratedAction();

    dispatch( action );

  };
}