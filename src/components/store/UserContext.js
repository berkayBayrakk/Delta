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
    logout:()=>{}
})


export function UserContextProvider(props){
    
    const [user,setUser]=useState({firstName:"",id:null,lastName:"",roleId:null,roleName:"",token:"",username:""});

    const context={
        user:user,
        login:login,
        logout:logout    
    }

    function login(initialUser){
        setUser(initialUser);
    }

    function logout(){
        setUser(null);
    }

   return(
       <UserContext.Provider value={context}>
           {props.children}
       </UserContext.Provider>
   )

}

export default UserContext;