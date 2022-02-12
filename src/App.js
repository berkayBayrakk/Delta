import './App.css';
import Card from './components/layout/Card';
import LoginPage from './components/pages/Login';
import AdminPage from './components/pages/AdminMenu';
import {Route,Routes} from 'react-router-dom';
import SchoolAddingPage from './components/pages/AdminPages/AddSchool';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card><LoginPage/></Card>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/add-school" element={<SchoolAddingPage/>} />
    </Routes>
    </div>
    
  );
}

export default App;
