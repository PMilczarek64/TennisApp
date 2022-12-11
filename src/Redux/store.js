import { useSelector } from "react-redux";
import { createStore } from "redux";
import initialState from "./initialState";

//selectors
export const getAllCities = (state) => state.cities;
export const getObjectsByCity = ({ objects }, city) =>
  objects.filter((object) => object.city === city);
export const getObjectById = ({ objects }, objectId) =>
  objects.find((object) => object.id === objectId);
export const getFirstCourtByCity = ({ objects }, city) =>
  objects.find((object) => object.city === city);
export const getUserName = ({ users }, userName, password) =>
  users.find(
    (user) => user.userName === userName && user.password === password
  );
export const getLoggingInInfo = ({ users }) =>
  users.find((item) => item.loggedInfo !== false);
export const getUserObjectsByUserId = ({ objects }, userId) =>
  objects.filter((object) => object.propertyOfUser === userId);
export const getEventsByObjectId = ({ objects }, objectId) =>
  objects.filter((object) => object.id === objectId)[0].events;
  
//action creators
export const setLoggedIn = (payload) => ({ type: "SET_LOGGED_IN", payload });
export const addBooking = (payload) => ({ type: "ADD_BOOKING", payload });

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userName === action.payload.name
            ? { ...user, loggedInfo: action.payload.setLogged }
            : user
        ),
      };

    case "ADD_BOOKING":
      const object = state.objects.find(
        (object) => object.id === action.payload.objectId
      );

      const newObjectItem = {
        ...object,
        events: object.events.concat([action.payload]),
      };
      
      return {
        ...state,
        objects: state.objects.map((item) => {
          if (item.id === action.payload.objectId) {
            return newObjectItem;
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
