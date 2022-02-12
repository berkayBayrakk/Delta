import classes from './Login.module.css';
import {useState,useEffect,useRef, useContext} from 'react';
import {useNavigate} from 'react-router';
import UserContext from '../store/UserContext';
import img from './show-image.png'

const data=[
    {
        id: 1,
        username: "SYSADMIN",
        name: "ADMIN",
        surname: "ADMIN",
        phoneNumber: 7896363522,
        email: "sys@admin.com",
        role: "SYSADMIN"
    },
    {
        id: 2,
        username: "SYSADMINa",
        name: "ADMIN",
        surname: "ADMIN",
        phoneNumber: 7896363522,
        email: "sys@admin.com",
        role: "SYSADMIN"
    }

];

function LoginPage(){
    const [passwordType,setPasswordType]=useState("password"); 
    const [isValid,setIsValid]=useState(false);
    const userContext=useContext(UserContext);
    const usernameRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();
   
    function submitHandler(event){
        event.preventDefault();
        userContext.fillUserArray(data);
    
        const username =usernameRef.current.value;
        const password=passwordRef.current.value;
        if(userContext.getIndex(username)===-1){
            setIsValid(true);
        }
        else{
            
            if(userContext.getCurrentUser().role==="SYSADMIN")
            
            navigate('/admin')
        } 
    }
    const [post,setPostId]=useState();
    useEffect(() => {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'SYSADMIN',password:"SYSADMIN" })
        };
        fetch('https://smapi.eu-west-3.elasticbeanstalk.com/user/token', requestOptions)
            .then(response => response.json())
            .then(data => {
                setPostId(data.id)
                console.log(data)
            });    
    }, []);
    return(
        
        <form className={classes.form} onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" required type='text' ref={usernameRef} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' required type={passwordType} ref={passwordRef} />
                <img src={img} alt='' className={classes.btn} onClick={()=>{if(passwordType==="password"){setPasswordType("text")}else{setPasswordType("password")} }   }/>
            </div>
            <div>
                <button className={classes.button}>Login</button>
            </div >
             {isValid? <div className={classes.content}><p>"Invalid username or password"</p></div> :null}
        </form>
    );

    
    
}

export default LoginPage;

