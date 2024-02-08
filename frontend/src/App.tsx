import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Provider from './context/Provider';

function App () {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;