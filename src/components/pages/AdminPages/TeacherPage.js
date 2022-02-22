import AdminNavigation from "./AdminNavigation";
import TypeItemList from "../../types/TypeItemList";
import {useState, useContext} from 'react';
import UserContext from "../../store/UserContext";
import Loader from '../../layout/Loader';
import { GetData,DeleteItem } from "../../fetch/methods";
import {useNavigate} from 'react-router';
function TeacherPage(){
    
    const navigate=useNavigate();

    const userContext=useContext(UserContext);
    
    const [items,setItems]=useState([]);
    
    const [isLoading,setIsLoading]=useState(false);
    
    const getterUrl ="https://smapi.eu-west-3.elasticbeanstalk.com/admin/teachers";
    
    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/admin/teacher";

    const token =userContext.user.token;
    
    const [deleteID,setDeleteID]=useState();
    
    const userTable=["Teacher ID","Name","Surname","Username","Phone Number","Email","School ID","School Name","School Address"];

    GetData(getterUrl,token,setItems,setIsLoading,isLoading);
    
    DeleteItem(deleteID,deleteUrl,token,setIsLoading);

    return (
    <div>
        <AdminNavigation/>
        {isLoading?<TypeItemList typeItems={items} tableItems={userTable} setDeleteID={setDeleteID}/>:<Loader/>}
        {isLoading?<button onClick={()=>(navigate('/add-teacher'))}>Add New Teacher</button>:null}
    </div>)
}

export default TeacherPage;