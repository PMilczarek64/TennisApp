import initialState from "./initialState";
import { strContains } from "../utils";

//selectors

export const getAllPlayers = (state) => state.players;
export const getPlayerByUserId = ({ players }, userId) =>
  players.find(player => player.profileOwner === userId);
export const getFilteredPlayers = ({ players }, city, name, ntrp) =>
  players.filter(
    (player) =>
      strContains(player.city, city) &&
      strContains(player.name, name) &&
      strContains(player.ntrp, ntrp)
  );

//action creators
const createActionName = actionName => `${actionName}`;
const ADD_PLAYER_PROFILE = createActionName("ADD_PLAYER_PROFILE");
const EDIT_PLAYER_PROFILE = createActionName("EDIT_PLAYER_PROFILE");
const REMOVE_PLAYER_PROFILE = createActionName("REMOVE_PLAYER_PROFILE");

  //actions
export const addPlayerProfile = (payload) => ({type: ADD_PLAYER_PROFILE, payload});
export const editPlayerProfile = (payload) => ({type: EDIT_PLAYER_PROFILE, payload});
export const removePlayerProfile = (payload) => ({type: REMOVE_PLAYER_PROFILE, payload});

const playersReducer = (statePart = initialState.players, action) => {
  switch (action.type) {
    case ADD_PLAYER_PROFILE:
      return statePart.concat([action.payload]);
    case EDIT_PLAYER_PROFILE:
      return statePart.map(player => player.id === action.payload.id ? {...player, ...action.payload } : player);
    case REMOVE_PLAYER_PROFILE: 
      return statePart.filter(player => player.id !== action.payload);
    default:
      return statePart;
  }
};

export default playersReducer;

