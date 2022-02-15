import UserContext from "../store/UserContext";
import {useContext} from 'react';
import AdminNavigation from "./AdminPages/AdminNavigation";

function AdminPage(){
    
    const userContext=useContext(UserContext);
    
    return(
        <div>
            <AdminNavigation/>
            <form>
                <ul>
                    <li>
                    {"Username: "+userContext.user.username}
                    </li>
                    <li>
                    {"First Name: "+userContext.user.firstName}
                    </li>
                    <li>
                    {"Last Name: "+userContext.user.lastName}
                    </li>
                    <li>
                    {"Role Name: "+userContext.user.roleName}
                    </li>
                    <li>
                    {"Role ID: "+userContext.user.roleId}
                    </li>
                    <li>
                    {"ID: "+userContext.user.id}
                    </li>
                </ul>
            </form>
        </div>);
}

export default AdminPage;