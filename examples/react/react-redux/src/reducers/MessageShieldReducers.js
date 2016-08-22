import { types } from '../constants/ActionTypes';
import initialState from '../store/initialState';

export default function getNewState(state = initialState.messageShieldState, action) {
  switch (action.type) {
      case types.TOOL_GENERATE_RANDOM_MAP:
      // the app has started to generate the map
      return { messageVisible: true, message: "Please Wait... Generating Random Map" };

    case types.RANDOM_MAP_START:

      // the app has started to generate the map
      return { messageVisible: true, message: "Please Wait... Generating Random Map" };

    case types.RANDOM_MAP_COMPLETE:  

      // the app has completed generating the map
      return { messageVisible: false, message: "" };
    
    default:
    return state;
  }
}