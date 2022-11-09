import { createStore } from 'redux';
import initialState from './initialState';

//selectors
export const getAllCities = state => state.cities;
export const getObjectsByCity = ({ objects }, city) => objects.filter(object => object.city === city);
export const getObjectById = ({ objects }, objectId ) => objects.find(object => object.id === objectId);
export const getFirstCourtByCity = ({ objects }, city) => objects.find(object => object.city === city);
export const getUserName = ({ users }, userName, password) => users.find(user => user.userName === userName && user.password === password);
export const getLoggingInInfo = ({ users }) => users.find(item => item.userLogged !== undefined);
////export const getAllourWorkCards = state => state.ourWorkCards;
////export const getAllAboutUsCards = state => state.aboutUsCards;
////export const getAllGridItems = state => state.contentGridItems;

const reducer = (state, action) => {
  return state;
};


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;