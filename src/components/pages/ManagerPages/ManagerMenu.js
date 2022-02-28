import ManagerNavigation from "./ManagerNavigation";
import { useNavigate } from "react-router-dom";
import UserContext from '../../store/UserContext';
import {useContext} from 'react';
function ManagerMenu(){

    const naivgation=useNavigate();

    const managerContext=useContext(UserContext);

    return(
        <div>
            <ManagerNavigation naivgation={naivgation}/>
        <table>
            <tr>{"First Name: "+managerContext.user.firstName}</tr>
            <tr>{"Last Name: "+managerContext.user.lastName}</tr>
            <tr>{"ID: "+managerContext.user.id}</tr>
            <tr>{"Username: "+managerContext.user.username}</tr>
            <tr>{"Role ID: "+managerContext.user.roleId}</tr>
            <tr>{"Role Name: "+managerContext.user.roleName}</tr>
        </table>

        </div>
    )
}

export default ManagerMenu;