import AdminNavigation from "../AdminNavigation";
import {useState,useContext} from 'react';
import {CreateUser} from '../../../fetch/methods';
import UserContext from "../../../store/UserContext";
import {useNavigate} from 'react-router';
import classes from './Add.module.css';

function AddUser(){
    
    const navigate=useNavigate();

    const admin=useContext(UserContext);

    const [isLoading,setIsLoading]=useState(false);

    const [username,setUsername]=useState();
    
    const [password,setPassword]=useState();
    
    const [name,setName]=useState();
    
    const [phoneNumber,setPhoneNumber]=useState();
    
    const [email,setEmail]=useState();
    
    const [roleId,setRoleId]=useState();

    const [surname,setSurname]=useState();
    
    const user={username:username,password:password,name:name,surname:surname,phoneNumber:phoneNumber,email:email,roleId:roleId};

    function submitHandler(event){
        event.preventDefault();
        setIsLoading(true);
    }
    CreateUser(user,(admin.user.token),isLoading,navigate,setIsLoading);
    
    return(

        <div>
            <AdminNavigation/>
            <form onSubmit={submitHandler} className={classes.form}>
                <div>
                    <label  htmlFor="username">Username</label>
                    <input id="username" required type='text'  onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="password">Password</label>
                    <input id="password" required type='text'  onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="name">Name</label>
                    <input id="surname" required type='text'  onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="surname">Surname</label>
                    <input id="surname" required type='text'  onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="phoneNumber">Phone Number</label>
                    <input id="phoneNumber" required type='text'  onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="Email">Email</label>
                    <input id="Email" required type='text'  onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label  htmlFor="RoleID">Role ID</label>
                    <input id="RoleID" required type='text'  onChange={(e) => setRoleId(e.target.value)} />
                </div>
                <div>
                    <button>Add user</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;