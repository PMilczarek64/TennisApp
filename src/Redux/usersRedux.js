import initialState from "./initialState";


//selectors
export const getUserName = ({ users }, userName, password) =>
  users.find(
    (user) => user.userName === userName && user.password === password
  );
export const getLoggingInInfo = ({ users }) =>
  users.find((item) => item.loggedInfo !== false);

//actions
const createActionName = actionName => `${actionName}`;
const SET_LOGGED_IN = createActionName("SET_LOGGED_IN");

//actions creators
export const setLoggedIn = (payload) => ({ type: SET_LOGGED_IN, payload });

const usersReducer = (statePart = initialState.users, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return statePart.map((user) =>
        user.userName === action.payload.name
          ? { ...user, loggedInfo: action.payload.setLogged }
          : user
      );

    default:
      return statePart;
  }
};

export default usersReducer;
