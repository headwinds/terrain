import { types } from '../constants/TerrainActionTypes';

const initialState = {
	map: ["default"],
    message: "Message here....",
    messageVisible: false,
    saved: false,
    generatingMap: false,
};

export default function generateRandomMap(state = initialState, action) {
  switch (action.type) {
  
  case types.RANDOM_MAP_GENERATED:
  	console.log("TerrainReducers - generateRandomMap - state: ", state, action);

  	// generate the map

    return { ...state, generatingMap: false };
  
  default:
    return state;
  }
}