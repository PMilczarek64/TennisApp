import { createStore, combineReducers} from "redux";
import initialState from "./initialState";
import objectsReducer from "./objectsRedux";
import usersReducer from "./usersRedux";
import playersReducer from "./playersRedux";
import ntrpLevelsReducer from "./ntrpLevelsRedux";
import citiesReducer from "./citiesRedux";

//selectors

const subreducers = {
  objects: objectsReducer,
  users: usersReducer,
  players: playersReducer,
  ntrpLevels: ntrpLevelsReducer,
  cities: citiesReducer,
}

const reducer = combineReducers(subreducers);


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
