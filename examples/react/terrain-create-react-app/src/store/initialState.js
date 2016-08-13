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
  	map: ["default"],
    message: "Message here....",
    messageVisible: false,
    saved: false,
  }
};

export default initialState;