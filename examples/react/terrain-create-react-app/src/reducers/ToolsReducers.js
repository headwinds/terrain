import { GENERATE_RANDOM_MAP } from '../constants/ActionTypes';

export default function generateRandomMap(state = ["hello"], action) {
  switch (action.type) {
  case GENERATE_RANDOM_MAP:
  	console.log("ToolsReducers - GENERATE_RANDOM_MAP - state: ", state, action);
    
  	// notify the map needs to be generated

    return state.concat(action.mapName);
  default:
    return state;
  }
}