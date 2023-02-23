import initialState from "./initialState";

//selectors
export const getAllNtrpLevels = (state) => state.ntrpLevels;

const ntrpLevelsReducer = (statePart = initialState.ntrpLevels, action) => {
      return statePart;
};

export default ntrpLevelsReducer;
