import { GENERATE_RANDOM_MAP } from '../constants/ActionTypes';

export default function generateRandomMap(state = ["foo"], action) {
  switch (action.type) {
  case GENERATE_RANDOM_MAP:
  	console.log("TerrainReducers - GENERATE_RANDOM_MAP - state: ", state, action);

  	// generate the map

    return state.concat(action.mapName);
  default:
    return state;
  }
}