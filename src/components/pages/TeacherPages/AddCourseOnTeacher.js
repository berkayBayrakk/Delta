import { useState ,useContext} from "react";
import {CreateCourse} from '../../fetch/methods';
import {useNavigate} from 'react-router';
import UserContext from "../../store/UserContext";
import TeacherNavigation from "./TeacherNavigation";
import classes from '../AdminPages/AddPages/Add.module.css'
function AddCourseOnTeacher(){

    const navigate=useNavigate();

    const teacherContext=useContext(UserContext);

    const [isLoading,setIsLoading]=useState(false);

    const [name,setName]=useState();

    const [subject,setSubject]=useState();

    const [teacherId,setTeacherId]=useState();

    const course={name:name,subject:subject,teacherId:teacherId};
    
    const url="https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lesson";

    CreateCourse(url,course,teacherContext.user.token,isLoading,navigate,setIsLoading,"teacher");
    
    function submitHandler(event){
        event.preventDefault();
        setIsLoading(true);
        
    }

    return(
        <div>
            <TeacherNavigation navigation={navigate}/>
            <form onSubmit={submitHandler} className={classes.form}>
                <div>
                    <label  htmlFor="Name">Course Name</label>
                    <input id="Name" required type='text'  onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="Subject">Subject</label>
                    <input id="Subject" required type='text'  onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="TeacherId">Teacher ID</label>
                    <input id="TeacherId" required type='text'  onChange={(e) => setTeacherId(e.target.value)} />
                </div>
                <div>
                    <button>Add Course</button>
                </div>
            </form>
        </div>    
    )
            
}

export default AddCourseOnTeacher;