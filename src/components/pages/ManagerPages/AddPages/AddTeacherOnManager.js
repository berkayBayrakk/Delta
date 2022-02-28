import ManagerNavigation from '../ManagerNavigation';
import {useState,useContext} from 'react';
import {CreateTeacher} from '../../../fetch/methods';
import UserContext from "../../../store/UserContext";
import {useNavigate} from 'react-router';
import classes from '../../AdminPages/AddPages/Add.module.css';

function AddTeacherOnManager(){
    
    const url="https://smapi.eu-west-3.elasticbeanstalk.com/manager/teacher"

    const navigate=useNavigate();

    const manager=useContext(UserContext);

    const [isLoading,setIsLoading]=useState(false);

    const [userId,setUserId]=useState();

    const [schoolId,setSchoolId]=useState();

    const teacher={userId:userId,schoolId:schoolId};

    function submitHandler(event){
        event.preventDefault();
        setIsLoading(true);
    }

    CreateTeacher(url,teacher,manager.user.token,isLoading,navigate,setIsLoading);

    return(
        <div>
            <ManagerNavigation navigation={navigate}/>
            <form onSubmit={submitHandler} className={classes.form}>
                <div>
                    <label  htmlFor="UserId">User ID</label>
                    <input id="UserId" required type='text'  onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="SchoolId">School ID</label>
                    <input id="SchoolId" required type='text'  onChange={(e) => setSchoolId(e.target.value)} />
                </div>
                <div>
                    <button>Add Teacher</button>
                </div>
            </form>
        </div>
    )
}

export default AddTeacherOnManager;