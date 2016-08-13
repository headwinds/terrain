import { GENERATE_RANDOM_MAP } from '../constants/TerrainActionTypes';

export default function generateRandomMap(state = false, action) {
  switch (action.type) {
  case GENERATE_RANDOM_MAP:
  	console.log("TerrainReducers - generateRandomMap - state: ", state, action);

  	// generate the map

    return true;
  default:
    return state;
  }
}