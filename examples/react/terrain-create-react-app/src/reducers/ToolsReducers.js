import { types } from '../constants/ToolsActionTypes';

const initialState = {
	map: ["hello"],
	activeTool: "none",
	mapName: "default"
};

export default function dispatchGenerateRandomMap(state = initialState, action) {
  switch (action.type) {
  case types.RANDOM_MAP_START:
  	console.log("ToolsReducers - dispatchGenerateRandomMap - state: ", state, action);
 
    return { ...state, activeTool: types.GENERATE_RANDOM_MAP };
  default:
    return state;
  }
}