import { GlobalStyle } from './assets/styles/GlobalStyle';
import CourtForm from './features/CourtForm';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import Courts from './views/Courts';
import ShowObject from './features/ShowObject';
import LoginForm from './features/LoginForm';
import MyAccount from './features/MyAccount';
import CourtsBooking from './features/CourtsBooking';
import MyBookings from './features/MyBookings';
import NotFound from './views/404NotFound';
import Footer from './views/Footer';
import styled from 'styled-components';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<CourtForm />} />
        <Route path="/courts/" element={<Courts />} />
        <Route path="/courts/:city" element={<Courts />} />
        <Route path="/courts/:city/:objectId/*" element={<ShowObject /> } />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/myaccount/:userId" element={<MyAccount />} />
        <Route path="/myaccount/:userId/bookings" element={<MyBookings />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
