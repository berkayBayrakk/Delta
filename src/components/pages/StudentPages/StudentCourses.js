import StudentNavigation from "./StudentNavigation";
import { useNavigate } from "react-router-dom";
import {useContext,useState} from 'react';
import {GetData,TakeCourse} from '../../fetch/methods';
import UserContext from '../../store/UserContext';
import CourseContext from '../../store/CourseContext';
import Loader from '../../layout/Loader';
import TypeItemListStudent from "../../types/TypeItemListStudent";
function StudentCourses(){

    const studentContext=useContext(UserContext);

    const courseContext=useContext(CourseContext)
    
    const navigation=useNavigate();

    const [items,setItems]=useState([]);

    const [takeCourseId,setTakeCourseId]=useState();

    const [isLoading,setIsLoading]=useState(false);

    const url="https://smapi.eu-west-3.elasticbeanstalk.com/student/lessons";

    const tableItems=["Course ID","Name","Subject","Teacher ID","Teacher Name"];

    const postUrl="https://smapi.eu-west-3.elasticbeanstalk.com/student/"+studentContext.user.id+"/lesson/"+takeCourseId;

    const [isExecute,setIsExecute]=useState(false);

    GetData(url,studentContext.user.token,setItems,setIsLoading,isLoading);

    TakeCourse(postUrl,setIsExecute,isExecute,studentContext.user.token);

    return(
        <div>
            <StudentNavigation navigation={navigation}/>
            {isLoading?<TypeItemListStudent setIsExecute={setIsExecute} typeItems={items} courseContext={courseContext} 
            tableItems={tableItems} setTakeCourseId={setTakeCourseId}/>:<Loader/>}
        </div>
    )
}

export default StudentCourses;