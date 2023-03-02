import { GlobalStyle } from "./assets/styles/GlobalStyle";
import CourtForm from "./features/CourtForm";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import Courts from "./views/Courts";
import ShowObject from "./features/ShowObject";
import LoginForm from "./features/LoginForm";
import MyAccount from "./features/MyAccount/MyAccount";
import MyBookings from "./features/MyAccount/MyBookings";
import NotFound from "./views/404NotFound";
import Footer from "./views/Footer";
import styled from "styled-components";
import { useRef } from "react";
import FindAPartnerCards from "./features/FindAPartner/FindAPartnerCards";
import { getLoggingInInfo } from "./Redux/usersRedux";
import { useSelector } from "react-redux";
import AccountSettings from "./features/MyAccount/AccountSettings";

const RoutesContainer = styled.div`
margin: 0;
padding: 0;
`;

function App() {

  const userLogged = useSelector(getLoggingInInfo);

  const pages = {
    home: useRef(null),
    content: useRef(null),
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <GlobalStyle />
      <Home action={scrollToSection} pages={pages} passedRef={pages.home} />
      <RoutesContainer ref={pages.content}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<CourtForm />} />
          <Route path="/courts/" element={<Courts />} />
          <Route path="/courts/:city" element={<Courts />} />
          <Route path="/courts/:city/:objectId/*" element={<ShowObject />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/myaccount/:userId" element={<MyAccount userLogged={userLogged}/>} />
          <Route path="/myaccount/:userId/bookings" element={<MyBookings />} />
          <Route path="/myaccount/:userId/settings" element={<AccountSettings />} />
          <Route path="/findapartner/*" element={<FindAPartnerCards />} />
        </Routes>
      </RoutesContainer>
      <Footer />
    </div>
  );
}

export default App;
