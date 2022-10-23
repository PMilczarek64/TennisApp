import { GlobalStyle } from './assets/styles/GlobalStyle';
import CourtBooking from './views/CourtBooking';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
      <CourtBooking />
    </div>
  );
}

export default App;
