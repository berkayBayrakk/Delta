import './App.css';
import Card from './components/layout/Card';
import LoginPage from './components/pages/Login';
import MainPage from './components/pages/Main';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card><LoginPage/></Card>} />
        <Route path="/main" element={<MainPage />} />
    </Routes>
    </div>
    
  );
}

export default App;
