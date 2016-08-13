import { types } from '../constants/ToolsActionTypes';

export default function dispatchGenerateRandomMap(state = false, action) {
  switch (action.type) {
  case types.GENERATE_RANDOM_MAP:
  	console.log("ToolsReducers - dispatchGenerateRandomMap - state: ", state, action);
 
    return true;
  default:
    return state;
  }
}