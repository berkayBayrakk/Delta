import classes from './Login.module.css';
import {useState,useEffect,useRef} from 'react';
import {useNavigate} from 'react-router';
import data from '../data';
function LoginPage(){
    const string="Invalid username or password"; 
    const [loadedUsers,setLoadedUsers]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [isValid,setIsValid]=useState(false);
    const usernameRef=useRef();
    const passwordRef=useRef();

    const navigate=useNavigate();
    function submitHandler(event){
        event.preventDefault();
        const username =usernameRef.current.value;
        const password=passwordRef.current.value;
        
        
       
        for(const user in loadedUsers){
            if(user.username===username && user.password===password){

                data.username=username;
                data.password=password;
                navigate('/main');
            }
        }

        setIsValid(true);
        
    }

    useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
    .then(response => {return response.json()})
    .then((data)=>
        {
        const users=[];
        console.log(data);
        for(const key in data){
                
            const user={
            id:key,
            ...data[key]
            };

            users.push(user);                 
        };
        
        setIsLoading(false);
        setLoadedUsers(users)}
        )},
        [isLoading])
    
    
    

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" required type='text' ref={usernameRef} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input id='password' required type='password' ref={passwordRef} />
            </div>
            <div>
                <button className={classes.button}>Login</button>
            </div >
             {isValid? <div className={classes.content}><p>{string}</p></div> :null}
        </form>
    );
    
}

export default LoginPage;