import './App.css';
import Card from './components/layout/Card';
import LoginPage from './components/pages/Login';
import AdminPage from './components/pages/AdminMenu';
import {Route,Routes} from 'react-router-dom';
import CoursePage from './components/pages/AdminPages/CoursePage';
import StudentPage from './components/pages/AdminPages/StudentPage'
import TeacherPage from './components/pages/AdminPages/TeacherPage'
import UserPage from './components/pages/AdminPages/UserPage'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Card><LoginPage/></Card>} />
        <Route path="/admin" element={<AdminPage />}/>
        <Route path="/users" element={<UserPage />}/>
        <Route path="/teachers" element={<TeacherPage />}/>
        <Route path="/students" element={<StudentPage />}/>
        <Route path="/courses" element={<CoursePage />}/>
    </Routes>
    </div>
    
  );
}

export default App;
