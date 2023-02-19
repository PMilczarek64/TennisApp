import { useSelector } from "react-redux";
import { createStore } from "redux";
import initialState from "./initialState";
import { strContains } from "../utils";

//selectors
export const getAllCities = (state) => state.cities;
export const getAllObjects = (state) => state.objects;
export const getObjectsByCity = ({ objects }, city) =>
  city !== "" && city !== undefined
    ? objects.filter((object) => object.city === city)
    : objects;
export const getObjectById = ({ objects }, objectId) =>
  objects.find((object) => object.id === objectId);
export const getFirstFacilityByCity = ({ objects }, city) =>
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
export const getAllEvents = ({ objects }) =>
  objects.filter((object) => object.events && object.events);
export const getAllPlayers = (state) => state.players;
export const getFilteredPlayers = ({ players }, city, name, ntrp) =>
  players.filter(
    (player) =>
      strContains(player.city, city) &&
      strContains(player.name, name) &&
      strContains(player.ntrp, ntrp)
  );
export const getAllNtrpLevels = (state) => state.ntrpLevels;
export const getPlayerByUserId = ({ players }, userId) =>
    players.find(player => player.profileOwner == userId);

//action creators
export const setLoggedIn = (payload) => ({ type: "SET_LOGGED_IN", payload });
export const addBooking = (payload) => ({ type: "ADD_BOOKING", payload });
export const deleteBooking = (payload) => ({ type: "DELETE_BOOKING", payload });
export const addPlayerProfile = (payload) => ({type: "ADD_PLAYER_PROFILE", payload});
export const editPlayerProfile = (payload) => ({type: "EDIT_PLAYER_PROFILE", payload});
export const removePlayerProfile = (payload) => ({type: "REMOVE_PLAYER_PROFILE", payload});

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

    case "ADD_PLAYER_PROFILE":
      return {...state, players: state.players.concat([action.payload])};
    case "EDIT_PLAYER_PROFILE":
      return {...state, players: state.players.map(player => player.id === action.payload.id ? {...player, ...action.payload } : player)};
    case "REMOVE_PLAYER_PROFILE": 
      return {...state, players: state.players.filter(player => player.id !== action.payload)};
    case "DELETE_BOOKING":
      const obj = state.objects.find(
        (object) => object.id === action.payload.objectId
      );
      const newObjItem = {
        ...obj,
        events: obj.events.filter(
          (event) => event.id !== action.payload.bookingId.toString()
        ),
      };
      return {
        ...state,
        objects: state.objects.map((item) => {
          if (item.id === action.payload.objectId) {
            return newObjItem;
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
