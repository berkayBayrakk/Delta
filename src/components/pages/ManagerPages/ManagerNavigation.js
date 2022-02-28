import { Link } from "react-router-dom";
import classes from './ManagerNavigation.module.css';

function ManagerNavigation(props){
    return(
        <header className={classes.header}>
            <div className={classes.logo} onClick={()=>(props.navigation('/manager'))}>Manager Page</div>
                <nav>
                    <ul>
                        <li><Link to='/manager-teacher'>Teachers</Link> </li>
                        <li><Link to='/manager-student'>Students</Link> </li>
                        <li><Link to='/'>Logout</Link> </li>
                    </ul>
                </nav>
        </header>
    )
}

export default ManagerNavigation;