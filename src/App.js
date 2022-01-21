import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { axiosSetup } from './utils/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import GamesProvider from './context/GameContext';

axiosSetup();

const App = () => {
  return (
    <BrowserRouter>
      <GamesProvider>
        <Routes />
      </GamesProvider>
    </BrowserRouter>
  );
};

export default App;
