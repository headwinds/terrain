import { types } from '../constants/ActionTypes';
import initialState from '../store/initialState';

export default function getNewState(state = initialState.terrainState, action) {
  switch (action.type) {

    case types.TOOL_GENERATE_RANDOM_MAP:
     
      // the tool has requested the terrain to start generating the map

      return { generatingMap: true,  };

    case types.RANDOM_MAP_START:
     
      // the app has started to generate the map

      return { generatingMap: true,  };

    case types.RANDOM_MAP_COMPLETE:  

      // the app has completed generating the map

      return { generatingMap: false,  };
    
    default:
      return state;
    }
}