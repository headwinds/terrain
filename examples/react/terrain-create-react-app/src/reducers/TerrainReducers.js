import { types } from '../constants/TerrainActionTypes';

const initialState = {
	map: ["default"],
    message: "Message here....",
    messageVisible: false,
    saved: false,
    generatingMap: false,
    mapComplete: false,
};

export default function generateRandomMap(state = initialState, action) {
  switch (action.type) {
  
    case types.RANDOM_MAP_START:
    	console.log("TerrainReducers - RANDOM_MAP_START - state: ", state, action);

    	// the app has started to generate the map

      return { ...state, generatingMap: true, mapComplete: false, messageVisible: true, message: "Please Wait... Generating Random Map" };

    case types.RANDOM_MAP_COMPLETE:  

      console.log("TerrainReducers - RANDOM_MAP_COMPLETE - state: ", state, action);

      // the app has completed generating the map

      return { ...state, generatingMap: false, mapComplete: true, messageVisible: false, message: "" };
    
    default:
      return state;
    }
}