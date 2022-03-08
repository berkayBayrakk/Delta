import Card from './components/layout/Card';
import LoginPage from './components/pages/LoginPage/Login';
import AdminPage from './components/pages/AdminPages/AdminMenu';
import {Route,Routes,Navigate} from 'react-router-dom';
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
import AddStudentOnManager from './components/pages/ManagerPages/AddPages/AddStudentOnManager';
import UserContext from './components/store/UserContext';
import {useContext}from 'react';

function App() {

  const user=useContext(UserContext);

  function isValid(roleName){
    console.log(user.user.roleName);
    if(user.user.roleName===roleName){
      return true;
    }
    else{return false}
  }

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Card><LoginPage/></Card>} />
        
        <Route path="/admin" element={isValid("SYSADMIN")?<AdminPage/>:<Card><LoginPage/></Card>}/>
        <Route path="/users" element={isValid("SYSADMIN")?<UserPage/>:<Card><LoginPage/></Card>}/>
        <Route path="/teachers" element={isValid("SYSADMIN")?<TeacherPage/>:<Card><LoginPage/></Card>}/>
        <Route path="/students" element={isValid("SYSADMIN")?<StudentPage/>:<Card><LoginPage/></Card>}/>
        <Route path="/courses" element={isValid("SYSADMIN")?<CoursePage/>:<Card><LoginPage/></Card>}/>
        <Route path="/add-user" element={isValid("SYSADMIN")?<AddUser/>:<Card><LoginPage/></Card>}/>
        <Route path="/add-teacher" element={isValid("SYSADMIN")?<AddTeacher/>:<Card><LoginPage/></Card>}/>
        <Route path="/add-student" element={isValid("SYSADMIN")?<AddStudent/>:<Card><LoginPage/></Card>}/>
        <Route path="/add-course" element={isValid("SYSADMIN")?<AddCourse/>:<Card><LoginPage/></Card>}/>

        <Route path="/teacher" element={isValid("TEACHER")?<TeacherMenu />:<Card><LoginPage/></Card>}/>
        <Route path='/add-teacher-teacherpage'element={isValid("TEACHER")?<AddCourseOnTeacher />:<Card><LoginPage/></Card>}/>
        <Route path='/teacher-courses'element={isValid("TEACHER")?<TeacherCourses />:<Card><LoginPage/></Card>}/>
        
        <Route path="/student" element={isValid("STUDENT")?<StudentMenu />:<Card><LoginPage/></Card>}/>
        <Route path="/student-courses" element={isValid("STUDENT")?<StudentCourses />:<Card><LoginPage/></Card>}/>
        <Route path="/student-course" element={isValid("STUDENT")?<StudentMyCourse />:<Card><LoginPage/></Card>}/>
        
        <Route path="/manager" element={isValid("MANAGER")?<ManagerMenu/>:<Card><LoginPage/></Card>}/>
        <Route path="/manager-student" element={isValid("MANAGER")?<ManagerStudent/>:<Card><LoginPage/></Card>}/>
        <Route path="/manager-teacher" element={<ManagerTeacher/>}/>
        <Route path="/add-teacher-manager" element={isValid("MANAGER")?<AddTeacherOnManager/>:<Card><LoginPage/></Card>}/>
        <Route path="/add-student-manager" element={isValid("MANAGER")?<AddStudentOnManager/>:<Card><LoginPage/></Card>}/>
        
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
    
    </div>
    
  );
}

export default App;
