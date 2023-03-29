import React from "react";
import MyAccount from "../features/MyAccount/MyAccount/MyAccount";

const MyAccountPage = ({userLogged}) => {
  return (
    <MyAccount userLogged={userLogged}/>
  );
};

export default MyAccountPage;