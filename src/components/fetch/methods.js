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

export function CreateTeacher(teacher,token,isLoading,navigate,setIsLoading){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}`,'Accept': 'application/json' },
        body: JSON.stringify({userId:teacher.userId,schoolId:teacher.schoolId})};
    
    useEffect( ()=> {
        if(isLoading){
            fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/teacher", requestOptions)
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

export function CreateStudent(student,token,isLoading,navigate,setIsLoading){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}`,'Accept': 'application/json' },
        body: JSON.stringify({studentNo:student.studentNo,
                              userId:student.userId,
                              schoolId:student.schoolId})};

    useEffect( ()=> {
        if(isLoading){
            fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/student", requestOptions)
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

export function CreateCourse(course,token,isLoading,navigate,setIsLoading){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}`,'Accept': 'application/json' },
        body: JSON.stringify({name:course.name,subject:course.subject,teacherId:course.teacherId})};

    useEffect( ()=> {
        if(isLoading){
            fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/lesson", requestOptions)
            .then(resp=>resp.json())
            .then(data=>{
                console.log(data);
                if(data.title==="One or more validation errors occurred."){
                    setIsLoading(false);
                    alert("One or more validation errors occurred.");
                }
                if(data==="Lesson added"){
                    navigate('/courses');
                }
            }).catch(err=> {console.log(err);alert("Something wrong!!!");setIsLoading(false)})
        }},
        [isLoading])
}