import StudentNavigation from "./StudentNavigation";
import { useNavigate } from "react-router-dom";
import {useContext, useState} from 'react';
import UserContext from '../../store/UserContext';
import CourseContext from "../../store/CourseContext";
import { GetData } from "../../fetch/methods";
function StudentMenu(){

    const navigation=useNavigate();
    
    const studentContext=useContext(UserContext);
    
    const courseContext=useContext(CourseContext);
    
    const url="https://smapi.eu-west-3.elasticbeanstalk.com/student/"+studentContext.user.id+"/lessons";

    const [isLoading,setIsLoading]=useState(true);

    GetData(url,studentContext.user.token,courseContext.setLessonIds,setIsLoading,isLoading);
    return(
        <div>
            <StudentNavigation navigation={navigation}/>
            <table>
                <tr>{"First Name: "+studentContext.user.firstName}</tr>
                <tr>{"Last Name: "+studentContext.user.lastName}</tr>
                <tr>{"ID: "+studentContext.user.id}</tr>
                <tr>{"Username: "+studentContext.user.username}</tr>
                <tr>{"Role ID: "+studentContext.user.roleId}</tr>
                <tr>{"Role Name: "+studentContext.user.roleName}</tr>
            </table>
        </div>
    )
}
export default StudentMenu;