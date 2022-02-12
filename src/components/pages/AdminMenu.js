import UserContext from "../store/UserContext";
import {useContext} from 'react';
import { Link } from "react-router-dom";
function AdminPage(){
    
    const userContext=useContext(UserContext);
    const username=userContext.user.username;
    
    return(
        <div>
            <h1>Admin Menu</h1>
           <Link to='/add-school'>Add School</Link>
           
           <Link to='/' onClick={userContext.logout}>Logout</Link> 
        </div>);
}

export default AdminPage;