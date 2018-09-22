const initialState = {
  profiles: []
};

function profile(state = initialState, action) {
  switch (action.type) {
    case "ADD_PROFILES": {
      return {
        profiles: action.payload.profiles
      };
    }
    default:
      return state;
  }
}

export default profile;
