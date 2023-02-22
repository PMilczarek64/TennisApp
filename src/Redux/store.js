import { createStore, combineReducers} from "redux";
import initialState from "./initialState";
import objectsReducer from "./objectsRedux";
import usersReducer from "./usersRedux";
import playersReducer from "./playersRedux";

//selectors
export const getAllCities = (state) => state.cities;
export const getAllNtrpLevels = (state) => state.ntrpLevels;

const subreducers = {
  objects: objectsReducer,
  users: usersReducer,
  players: playersReducer,
}

const reducer = combineReducers(subreducers);


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
