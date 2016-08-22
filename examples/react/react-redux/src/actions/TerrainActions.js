import { types } from '../constants/ActionTypes';


// Start generating map
export function mapGenerationStartAction() {
  return {
    type: types.RANDOM_MAP_START,
  };
}


// Map has completed rendering
export function mapGenerationCompleteAction() {
  return {
    type: types.RANDOM_MAP_COMPLETE,
  };
}