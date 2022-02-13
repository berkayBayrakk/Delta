import { useState,createContext } from "react";


const UserContext=createContext({

    user:{
    firstName: "",
    id:null,
    lastName:"",
    roleId:null,
    roleName:"",
    token:"",
    username:""},
    login:(initialUser)=>{},
    getUser:()=>{}
})


export function UserContextProvider(props){
    
    const [user,setUser]=useState({firstName:"",id:null,lastName:"",roleId:null,roleName:"",token:"",username:""});

    const context={
        user:user,
        login:login,
        getUser:getUser    
    }

    function login(initialUser){
        setUser(initialUser);
    }
    function getUser(){
        return(user);
    }
   

   return(
       <UserContext.Provider value={context}>
           {props.children}
       </UserContext.Provider>
   )

}

export default UserContext;