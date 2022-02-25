import UserContext from "../../store/UserContext";
import {useContext,useState} from 'react';
import { useNavigate } from "react-router-dom";
import TeacherCourses from "./TeacherCourses";
import TeacherNavigation from "./TeacherNavigation";;
function TeacherMenu(){
    
    const navigation= useNavigate();

    const teacherContext=useContext(UserContext);

    const [items,setItems]=useState([]);

    const [isLoading,setIsLoading]=useState(false);
    
    const userTable=["Id","Name","Subject","Teacher Name","Teacher Id"];

    const [deleteId,setDeleteId]=useState();
    
    const getUrl="https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lessons";

    console.log(teacherContext.user)
    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/teacher/lesson"
    return(
        <div>
            <TeacherNavigation navigastion={navigation}/>
            <TeacherCourses getUrl={getUrl} deleteUrl={deleteUrl} token={teacherContext.user.token} items={items} setItems={setItems} 
                            isLoading={isLoading} setIsLoading={setIsLoading} userTable={userTable} setDeleteID={setDeleteId}
                            deleteId={deleteId} navigation={navigation}/>
        </div>
        
        );
}
export default TeacherMenu;