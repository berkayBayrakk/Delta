import StudentNavigation from "./StudentNavigation";
import { useNavigate } from "react-router-dom";
import TypeItemList from '../../types/TypeItemList';
import {useContext,useState,useEffect} from 'react';
import {GetData,DeleteItem} from '../../fetch/methods';
import UserContext from '../../store/UserContext';
import Loader from '../../layout/Loader';
import CourseContext from '../../store/CourseContext';

function StudentMyCourse(){

    const studentContext=useContext(UserContext);

    const courseContext=useContext(CourseContext);

    const navigation=useNavigate();

    const [items,setItems]=useState([]);

    const [deleteId,setDeleteId]=useState();

    const [isLoading,setIsLoading]=useState(false);

    const url="https://smapi.eu-west-3.elasticbeanstalk.com/student/"+studentContext.user.id+"/lessons";

    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/student/"+studentContext.user.id+"/lesson";

    const tableItems=["Course ID","Name","Subject","Teacher ID","Teacher Name"];

    GetData(url,studentContext.user.token,setItems,setIsLoading,isLoading);

    DeleteItem(deleteId,deleteUrl,studentContext.user.token,setIsLoading)
    
    useEffect(()=>{
        courseContext.removeLesson(deleteId);
        },[deleteId])

    return(
        <div>
            <StudentNavigation navigation={navigation}/>
            {isLoading?<TypeItemList typeItems={items} setDeleteID={setDeleteId} tableItems={tableItems} />:<Loader/>}
        </div>
    )


}

export default StudentMyCourse;