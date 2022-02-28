import { useEffect } from "react";

export function GetData(url,token,setItems,setIsLoading,isLoading){
    useEffect(()=>{
        fetch(url, {
            method:'GET',
            headers: {'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`}
            }).then(resp => resp.json())
            .then( json => {setItems(json);setIsLoading(true)})
        },[isLoading])
}

export function DeleteItem(id,url,token,setIsLoading){
    useEffect(()=>{
            if(id!=undefined){
                setIsLoading(false)
                fetch(url+"/"+id, {
                    method:'DELETE',
                    headers: {'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`}
                    }).then(setIsLoading(false))
                    .then(setIsLoading(false))     
            }
    },[id])
    
}

export function CreateUser(user,token,isLoading,navigate,setIsLoading){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}` },
        body: JSON.stringify({  
            username: (user.username),  password: (user.password), name: (user.name),  surname: (user.surname),  
            phoneNumber: (user.phoneNumber),  email: (user.email),  roleId: parseInt(user.roleId)})};

    function isValid(roleId){
        if(isNaN(roleId)===false){
           return true;
        }
        else{
            return false
        }
    }

    useEffect(()=>{
        if(isLoading && isValid(user.roleId)){ 
            fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/user", requestOptions)
            .then(resp=>resp.json())
            .then(data=>{navigate('/users');
            })}
        else if(isValid(user.roleId)===false && isLoading===true){
            alert("Invalid Role ID");setIsLoading(false)}
        else{
            setIsLoading(false);
        }     
    },[isLoading])
        
}

export function CreateTeacher(url,teacher,token,isLoading,navigate,setIsLoading){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}`,'Accept': 'application/json' },
        body: JSON.stringify({userId:teacher.userId,schoolId:teacher.schoolId})};
    
    useEffect( ()=> {
        if(isLoading){
            fetch(url, requestOptions)
            .then(resp=>resp.json())
            .then(data=>{
                console.log(data);
                if(data.title==="One or more validation errors occurred."){
                    setIsLoading(false);
                    alert("One or more validation errors occurred.");
                }
                if(data==="Teacher added"){
                    navigate('/teachers');
                }
            }).catch(err=> {console.log(err);alert("Something wrong!!!");setIsLoading(false)})
        }},
            [isLoading])
}

export function CreateStudent(url,student,token,isLoading,navigate,setIsLoading){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}`,'Accept': 'application/json' },
        body: JSON.stringify({studentNo:student.studentNo,
                              userId:student.userId,
                              schoolId:student.schoolId})};

    useEffect( ()=> {
        if(isLoading){
            fetch(url, requestOptions)
            .then(resp=>resp.json())
            .then(data=>{
                console.log(data);
                if(data.title==="One or more validation errors occurred."){
                    setIsLoading(false);
                    alert("One or more validation errors occurred.");
                }
                if(data==="Student added"){
                    navigate('/students');
                }
            }).catch(err=> {console.log(err);alert("Something wrong!!!");setIsLoading(false)})
        }},
        [isLoading])
}

export function CreateCourse(url,course,token,isLoading,navigate,setIsLoading,navigatePlace){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}`,'Accept': 'application/json' },
        body: JSON.stringify({name:course.name,subject:course.subject,teacherId:course.teacherId})};

    useEffect( ()=> {
        if(isLoading){
            fetch(url, requestOptions)
            .then(resp=>resp.json())
            .then(data=>{
                
                if(data.title==="One or more validation errors occurred."){
                    setIsLoading(false);
                    alert("One or more validation errors occurred.");
                }
                else if(data==="Lesson added"){
                    navigate('/'+navigatePlace);
                }
                else if(data==="Lesson created"){
                    console.log(data);
                    navigate('/'+navigatePlace);
                }
            }).catch(err=> {console.log(err);alert("Something wrong!!!");setIsLoading(false)})
        }},
        [isLoading])
}

export function TakeCourse(url,setIsExecute,isExecute,token){
    useEffect( ()=>{
        if(isExecute){
            const requestOptions={
                method:"POST",
                headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}`,'Accept': 'application/json' }
            }
            fetch(url,requestOptions)
            .then(resp=>resp.json())
            .then(data=>{
                if(data==="Lesson created"){
                    setIsExecute(false);
                }
            }).catch(err =>{
                alert("Something wrong!!!");
            })
        }
    },[isExecute]  )
}