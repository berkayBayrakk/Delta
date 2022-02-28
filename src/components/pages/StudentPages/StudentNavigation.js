import { Link } from "react-router-dom";
import classes from './StudentMenu.module.css';

function StudentNavigation(props){
    
    return(
        <header className={classes.header}>
            <div className={classes.logo} onClick={()=>(props.navigation('/student'))}>Student Page</div>
                <nav>
                    <ul>
                        <li><Link to='/student-courses'>Courses</Link> </li>
                        <li><Link to='/student-course'>My Courses</Link> </li>
                        <li><Link to='/'>Logout</Link> </li>
                    </ul>
                </nav>
        </header>
    )
    
}

export default StudentNavigation;