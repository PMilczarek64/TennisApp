//selectors
export const getUserName = ({ users }, userName, password) =>
  users.find(
    (user) => user.userName === userName && user.password === password
  );
export const getLoggingInInfo = ({ users }) =>
  users.find((item) => item.loggedInfo !== false);

//actions
export const setLoggedIn = (payload) => ({ type: "SET_LOGGED_IN", payload });

const usersReducer = (statePart = [], action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return {
        users: statePart.map((user) =>
          user.userName === action.payload.name
            ? { ...user, loggedInfo: action.payload.setLogged }
            : user
        ),
      };
    default:
      return statePart;
  }
};

export default usersReducer;
