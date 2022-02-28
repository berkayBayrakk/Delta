import Card from './components/layout/Card';
import LoginPage from './components/pages/LoginPage/Login';
import AdminPage from './components/pages/AdminPages/AdminMenu';
import {Route,Routes} from 'react-router-dom';
import CoursePage from './components/pages/AdminPages/CoursePage';
import StudentPage from './components/pages/AdminPages/StudentPage'
import TeacherPage from './components/pages/AdminPages/TeacherPage'
import UserPage from './components/pages/AdminPages/UserPage'
import AddUser from './components/pages/AdminPages/AddPages/AddUser';
import AddTeacher from './components/pages/AdminPages/AddPages/AddTeacher';
import AddStudent from './components/pages/AdminPages/AddPages/AddStudent';
import AddCourse from './components/pages/AdminPages/AddPages/AddCourse';
import TeacherMenu from './components/pages/TeacherPages/TeacherMenu';
import TeacherCourses from './components/pages/TeacherPages/TeacherCourses';
import StudentMenu from './components/pages/StudentPages/StudentMenu';
import AddCourseOnTeacher from './components/pages/TeacherPages/AddCourseOnTeacher';
import StudentCourses from './components/pages/StudentPages/StudentCourses';
import StudentMyCourse from './components/pages/StudentPages/StudentMyCourse';
import ManagerMenu from './components/pages/ManagerPages/ManagerMenu';
import ManagerStudent from './components/pages/ManagerPages/ManagerStudent';
import ManagerTeacher from './components/pages/ManagerPages/ManagerTeacher';
import AddTeacherOnManager from './components/pages/ManagerPages/AddPages/AddTeacherOnManager';
import AddStudentOnManager from './components/pages/ManagerPages/AddPages/AddStudentOnManager'
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
        <Route path="/add-user" element={<AddUser />}/>
        <Route path="/add-teacher" element={<AddTeacher />}/>
        <Route path="/add-student" element={<AddStudent />}/>
        <Route path="/add-course" element={<AddCourse />}/>

        <Route path="/teacher" element={<TeacherMenu />}/>
        <Route path='/add-teacher-teacherpage'element={<AddCourseOnTeacher />}/>
        <Route path='/teacher-courses'element={<TeacherCourses />}/>
        
        <Route path="/student" element={<StudentMenu />}/>
        <Route path="/student-courses" element={<StudentCourses />}/>
        <Route path="/student-course" element={<StudentMyCourse />}/>
        
        <Route path="/manager" element={<ManagerMenu/>}/>
        <Route path="/manager-student" element={<ManagerStudent/>}/>
        <Route path="/manager-teacher" element={<ManagerTeacher/>}/>
        <Route path="/add-teacher-manager" element={<AddTeacherOnManager/>}/>
        <Route path="/add-student-manager" element={<AddStudentOnManager/>}/>


        

    </Routes>
    </div>
    
  );
}

export default App;
