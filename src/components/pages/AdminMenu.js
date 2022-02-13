import UserContext from "../store/UserContext";
import {useContext} from 'react';
import { Link } from "react-router-dom";
function AdminPage(){
    
    const userContext=useContext(UserContext);
    
    return(
        <div>
            <h1>{userContext.user.token}</h1>
           <Link to='/add-school'>Add School</Link>
           
           <Link to='/' onClick={userContext.logout}>Logout</Link> 
        </div>);
}

export default AdminPage;