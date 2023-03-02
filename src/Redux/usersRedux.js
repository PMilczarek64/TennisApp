import initialState from "./initialState";


//selectors
export const getUserName = ({ users }, userName, password) =>
  users.find(
    (user) => user.userName === userName && user.password === password
  );

export const getPassword = ({ users }) => 
  users.find((item) => item.loggedInfo !== false );

export const getLoggingInInfo = ({ users }) =>
  users.find((item) => item.loggedInfo !== false);

//actions
const createActionName = actionName => `${actionName}`;
const SET_LOGGED_IN = createActionName("SET_LOGGED_IN");
const UPDATE_PASSWORD = createActionName("UPDATE_PASSWORD");

//actions creators
export const setLoggedIn = (payload) => ({ type: SET_LOGGED_IN, payload });
export const updatePassword = (payload) => ({ type: UPDATE_PASSWORD, payload });

const usersReducer = (statePart = initialState.users, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return statePart.map((user) =>
        user.userName === action.payload.name
          ? { ...user, loggedInfo: action.payload.setLogged }
          : user
      );
    case UPDATE_PASSWORD:
      return statePart.map((user) =>
        user.id === action.payload.id
          ? {...user, password: action.payload.newPassword}
          : user
      );

    default:
      return statePart;
  }
};

export default usersReducer;
