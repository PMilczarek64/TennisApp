import { GlobalStyle } from "./assets/styles/GlobalStyle";
import Home from "./pages/Home";
import Hero from "./features/Hero/Hero";
import { Routes, Route } from "react-router-dom";
import Courts from "./pages/FullCourtsList";
import LoginForm from "./features/Auth/LoginForm/LoginForm";
import MyAccountPage from "./pages/MyAccount";
import MyBookings from "./features/MyAccount/MyBookings/MyBookings";
import NotFound from "./pages/404NotFound";
import Footer from "./views/Footer";
import styled from "styled-components";
import { useRef } from "react";
import { getLoggingInInfo } from "./Redux/usersRedux";
import { useSelector } from "react-redux";
import AccountSettings from "./features/MyAccount/AccountSettings";
import Contact from "./pages/Contact/Contact";
import FindAPartnerPage from "./pages/FindAPartner";
import ShowCompany from "./pages/ShowCompany";

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
      <Hero action={scrollToSection} pages={pages} passedRef={pages.home} />
      <RoutesContainer ref={pages.content}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/courts/" element={<Courts />} />
          <Route path="/courts/:city" element={<Courts />} />
          <Route path="/courts/:city/:objectId/*" element={<ShowCompany />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/myaccount/:userId" element={<MyAccountPage userLogged={userLogged}/>} />
          <Route path="/myaccount/:userId/bookings" element={<MyBookings />} />
          <Route path="/myaccount/:userId/settings" element={<AccountSettings />} />
          <Route path="/findapartner/*" element={<FindAPartnerPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RoutesContainer>
      <Footer />
    </div>
  );
}

export default App;
