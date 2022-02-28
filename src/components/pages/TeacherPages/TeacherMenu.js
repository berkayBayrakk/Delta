import UserContext from "../../store/UserContext";
import {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import TeacherNavigation from "./TeacherNavigation";;
function TeacherMenu(){
    
    const navigation= useNavigate();

    const teacherContext=useContext(UserContext);
    console.log(teacherContext.user); 
    return(
        <div>
            <TeacherNavigation navigation={navigation}/>
            <table>
                <tr>{"ID: "+teacherContext.user.id}</tr>
                <tr>{"Username: "+teacherContext.user.username}</tr>
                <tr>{"First Name: "+teacherContext.user.firstName}</tr>
                <tr>{"Last Name: "+teacherContext.user.lastName}</tr>
                <tr>{"Role Name: "+teacherContext.user.roleName}</tr>
            </table>
            
        </div>
        
        );
}
export default TeacherMenu;