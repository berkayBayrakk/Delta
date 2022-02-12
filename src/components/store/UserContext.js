import { useState,createContext } from "react";


const UserContext=createContext({
    userList:[],
    user:{
        username:"",
        index:-1
    },
    fillUserArray: (userData) => {},
    getIndex:(username)=>{},
    getCurrentUser:(username)=>{},
    logout:()=>{}
})


export function UserContextProvider(props){
    
    const [userArray,setUserArray]=useState([]);
    const [user,setUser]=useState({username:"",index:-1});

    const context={
    userList:userArray,
    user:user,
    fillUserArray:fillUserArray,
    getIndex:getIndex,
    getCurrentUser:getCurrentUser,
    logout:logout
   }
   function logout(){
    while (userArray.length) {
        userArray.pop();
      }
   }

   function fillUserArray(userData){
        for(let i=0;i<userData.length;i++){
            userArray.push(userData[i])
        }
   }

   function getIndex(username){
    for (let i = 0; i < userArray.length; i++) {
        if(userArray[i].username===username){
        user.index=i;
        user.username=username;
        return(i);
        }
      }
      return(-1);
   }

   function getCurrentUser(){
       return(userArray[user.index]);
   }

   return(
       <UserContext.Provider value={context}>
           {props.children}
       </UserContext.Provider>
   )

}

export default UserContext;