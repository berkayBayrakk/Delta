import AdminNavigation from "../AdminNavigation";
import {useState,useContext} from 'react';
import {CreateTeacher} from '../../../fetch/methods';
import UserContext from "../../../store/UserContext";
import {useNavigate} from 'react-router';
import classes from './Add.module.css';

function AddTeacher(){

    const url="https://smapi.eu-west-3.elasticbeanstalk.com/admin/teacher"

    const navigate=useNavigate();

    const admin=useContext(UserContext);

    const [isLoading,setIsLoading]=useState(false);

    const [userId,setUserId]=useState();

    const [schoolId,setSchoolId]=useState();

    const teacher={userId:userId,schoolId:schoolId};

    function submitHandler(event){
        event.preventDefault();
        setIsLoading(true);
    }

    CreateTeacher(url,teacher,admin.user.token,isLoading,navigate,setIsLoading,"teachers");

    return(
        <div>
            <AdminNavigation/>
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

export default AddTeacher;