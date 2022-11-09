import { createStore } from 'redux';
import initialState from './initialState';

//selectors
export const getAllCities = state => state.cities;
export const getObjectsByCity = ({ objects }, city) => objects.filter(object => object.city === city);
export const getObjectById = ({ objects }, objectId ) => objects.find(object => object.id === objectId);
export const getFirstCourtByCity = ({ objects }, city) => objects.find(object => object.city === city);
export const getUserName = ({ users }, userName, password) => users.find(user => user.userName === userName && user.password === password);
export const getLoggingInInfo = ({ users }) => users.find(item => item.loggedInfo !== false );
////export const getAllourWorkCards = state => state.ourWorkCards;
////export const getAllAboutUsCards = state => state.aboutUsCards;
////export const getAllGridItems = state => state.contentGridItems;

//action creators
export const setLoggedIn = payload => ({ type: 'SET_LOGGED_IN', payload });

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOGGED_IN':
      return {...state, users: state.users.map(user => (user.userName === action.payload.name) ? {...user, loggedInfo: action.payload.setLogged} : user)};
      //return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
    default:
    return state;
  };
  
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;