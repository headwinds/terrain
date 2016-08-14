import { types } from '../constants/ToolsActionTypes';

const initialState = {
	map: ["hello"],
	activeTool: "none",
	mapName: "default"
};

export default function dispatchGenerateRandomMap(state = initialState, action) {
  switch (action.type) {
  case types.TOOL_GENERATE_RANDOM_MAP:
  	console.log("ToolsReducers - dispatchGenerateRandomMap - state: ", state, action);
 
    return { ...state, activeTool: types.TOOL_GENERATE_RANDOM_MAP };
  default:
    return state;
  }
}