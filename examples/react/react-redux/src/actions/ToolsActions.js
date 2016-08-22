import { types } from '../constants/ActionTypes';

// generate random map

export function requestRandomMapAction( mapName ) {
  return {
    type: types.TOOL_GENERATE_RANDOM_MAP,
    mapName: mapName,
  };
}

// export 

export function exportStartAction() {
  return {
    type: types.EXPORT,
  };
}

