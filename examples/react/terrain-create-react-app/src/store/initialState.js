var initialState = {
  /*
  auth: {
    isLoggedIn: false,
    isLoggingIn: false,
    response: null,
  },
  */
  toolsState: {
  	map: ["hello"],
  	activeTool: "none",
  	mapName: "default"
  },
  terrainState: {
    message: "Please Wait... Generating Random Map",
    messageVisible: true,
    saved: false,
    generatingMap: false,
    mapComplete: false,
  }
};

export default initialState;