import {CreateCourse} from '../../../fetch/methods';
import AdminNavigation from "../AdminNavigation";
import {useState,useContext} from 'react';
import UserContext from "../../../store/UserContext";
import {useNavigate} from 'react-router';
import classes from './Add.module.css';
function AddCourse(){

    const navigate=useNavigate();

    const admin=useContext(UserContext);

    const [isLoading,setIsLoading]=useState(false);

    const [name,setName]=useState();

    const [subject,setSubject]=useState();

    const [teacherId,setTeacherId]=useState();

    const course={name:name,subject:subject,teacherId:teacherId};

    const url="https://smapi.eu-west-3.elasticbeanstalk.com/admin/lesson"

    CreateCourse(url,course,admin.user.token,isLoading,navigate,setIsLoading,"courses");

    function submitHandler(event){
        event.preventDefault();
        setIsLoading(true);
    }

    return(
        <div>
            <AdminNavigation/>
            <form onSubmit={submitHandler} className={classes.form}>
                <div >
                    <label   htmlFor="Name">Name</label>
                    <input id="Name" required type='text'  onChange={(e) => setName(e.target.value)} />
                </div>
                <div >
                    <label  htmlFor="Subject">Subject</label>
                    <input id="Subject" required type='text'  onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className={classes.element}>
                    <label   htmlFor="TeacherId">Teacher ID</label>
                    <input  id="TeacherId" required type='text'  onChange={(e) => setTeacherId(e.target.value)} />
                </div>
                <div >
                <button >Add Course</button>
                </div>
            </form>
        </div>
    )
}
export default AddCourse;