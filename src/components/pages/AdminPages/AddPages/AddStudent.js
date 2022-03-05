import AdminNavigation from "../AdminNavigation";
import {useState,useContext} from 'react';
import {CreateStudent} from '../../../fetch/methods';
import UserContext from "../../../store/UserContext";
import {useNavigate} from 'react-router';
import classes from './Add.module.css';

function AddStudent(){

    const navigate=useNavigate();

    const admin=useContext(UserContext);

    const [isLoading,setIsLoading]=useState(false);

    const [studentNo,setStudentNo]=useState();

    const [schoolId,setSchoolId]=useState();

    const [userId,setUserId]=useState();

    const student={studentNo:studentNo,schoolId:schoolId,userId:userId};

    const url="https://smapi.eu-west-3.elasticbeanstalk.com/admin/student"

    function submitHandler(event){
        event.preventDefault();
        setIsLoading(true);
    }

    CreateStudent(url,student,admin.user.token,isLoading,navigate,setIsLoading);

    return(
        <div>
            <AdminNavigation/>
            <form onSubmit={submitHandler} className={classes.form}>
                <div>
                    <label  htmlFor="StudentNo">Student No</label>
                    <input id="StudentNo" required type='text'  onChange={(e) => setStudentNo(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="SchoolId">School ID</label>
                    <input id="SchoolId" required type='text'  onChange={(e) => setSchoolId(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="UserId">User ID</label>
                    <input id="UserId" required type='text'  onChange={(e) => setUserId(e.target.value)} />
                </div>
                <div>
                <button>Add Student</button>
                </div>
            </form>
        </div>
    )
}

export default AddStudent;