import { Link } from "react-router-dom";
import classes from './AdminNavigation.module.css'
import { useNavigate } from "react-router-dom";
function AdminNavigation(){

    const navigation= useNavigate();

    return(
<header className={classes.header}>
<div className={classes.logo} onClick={()=>(navigation('/admin'))}>Admin Page</div>
<nav>
  <ul>
    <li>
    <Link to='/users'>User</Link>
    </li>
    <li>
    <Link to='/teachers'>Teacher</Link> 
    </li>
    <li>
    <Link to='/students'>Student</Link> 
    </li>
    <li>
    <Link to='/courses'>Course</Link> 
    </li>
    <li>
    <Link to='/'>Logout</Link> 
    </li>
  </ul>
</nav>
</header>
    )
}

export default AdminNavigation;