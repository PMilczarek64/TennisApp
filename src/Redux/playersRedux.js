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

  //actions
export const addPlayerProfile = (payload) => ({type: "ADD_PLAYER_PROFILE", payload});
export const editPlayerProfile = (payload) => ({type: "EDIT_PLAYER_PROFILE", payload});
export const removePlayerProfile = (payload) => ({type: "REMOVE_PLAYER_PROFILE", payload});

const playersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PLAYER_PROFILE":
      return {...state, players: state.players.concat([action.payload])};
    case "EDIT_PLAYER_PROFILE":
      return {...state, players: state.players.map(player => player.id === action.payload.id ? {...player, ...action.payload } : player)};
    case "REMOVE_PLAYER_PROFILE": 
      return {...state, players: state.players.filter(player => player.id !== action.payload)};
    default:
      return state;
  }
};

export default playersReducer;

