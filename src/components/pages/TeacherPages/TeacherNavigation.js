import classes from './TeacherMenu.module.css';
import { Link } from "react-router-dom";

function TeacherNavigation(props){
    return(
        <header className={classes.header}>
            <div className={classes.logo} onClick={()=>(props.navigation('/teacher'))}>Teacher Page</div>
                <nav>
                    <ul>
                        <li>
                        <   Link to='/'>Logout</Link> 
                        </li>
                    </ul>
                </nav>
            </header>
    )
}

export default TeacherNavigation;