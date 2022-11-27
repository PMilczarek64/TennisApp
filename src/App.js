import { GlobalStyle } from './assets/styles/GlobalStyle';
import CourtForm from './features/CourtForm';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';
import Courts from './views/Courts';
import ShowObject from './features/ShowObject';
import LoginForm from './features/LoginForm';
import MyAccount from './features/MyAccount';
import CourtsBooking from './features/CourtsBooking';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <Routes>
        <Route path="/" element={<CourtForm />} />
        <Route path="/courts/:city/" element={<Courts />} />
        <Route path="/courts/:city/:objectId/*" element={<ShowObject /> } />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/myaccount/:userId" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
