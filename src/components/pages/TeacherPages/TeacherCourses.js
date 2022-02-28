import {GetData,DeleteItem} from '../../fetch/methods';
import TypeItemList from '../../types/TypeItemList';
import Loader from '../../layout/Loader';
import {useState,useContext} from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from '../../store/UserContext';
import TeacherNavigation from './TeacherNavigation';

function TeacherCourses(){
    
    const navigation= useNavigate();

    const teacherContext=useContext(UserContext);

    const [items,setItems]=useState([]);

    const [isLoading,setIsLoading]=useState(false);
    
    const userTable=["Id","Name","Subject","Teacher Name","Teacher Id"];

    const [deleteId,setDeleteId]=useState();

    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lesson"

    const getUrl="https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lessons";

    GetData(getUrl,teacherContext.user.token,setItems,setIsLoading,isLoading);
    DeleteItem(deleteId,deleteUrl,teacherContext.user.token,setIsLoading);
    return(
        <div>
            <TeacherNavigation navigation={navigation}/>
             {isLoading?<TypeItemList typeItems={items} tableItems={userTable} setDeleteID={setDeleteId}/>:<Loader/>}
             {isLoading?<button onClick={()=>(navigation('/add-teacher-teacherpage'))}>Add New Course</button>:null}
        </div>
    )
}
export default TeacherCourses;