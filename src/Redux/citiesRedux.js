import initialState from "./initialState";

//selectors
export const getAllCities = (state) => state.cities;


const citiesReducer = (statePart = initialState.cities, action) => {
      return statePart;
  
};

export default citiesReducer;
