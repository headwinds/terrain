import { types } from '../constants/ActionTypes';
import initialState from '../store/initialState';

export default function getNewState(state = initialState.toolsState, action) {
  switch (action.type) {
  case types.TOOL_GENERATE_RANDOM_MAP:
  	console.log("ToolsReducers - changeState - state: ", state, action);
 
    return { ...state, activeTool: types.TOOL_GENERATE_RANDOM_MAP };
  default:
    return state;
  }
}