import AdminNavigation from "./AdminNavigation";
import UserContext from "../../store/UserContext";
import Loader from '../../layout/Loader';
import {useState, useContext} from 'react';
import TypeItemList from "../../types/TypeItemList";
import { GetData,DeleteItem } from "../../fetch/methods";
import {useNavigate} from 'react-router';

function StudentPage(){

    const navigate=useNavigate();

    const userContext=useContext(UserContext);
    
    const [items,setItems]=useState([]);
    
    const [isLoading,setIsLoading]=useState(false);
    
    const getterUrl ="https://smapi.eu-west-3.elasticbeanstalk.com/admin/students";
    
    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/admin/student";

    const token =userContext.user.token;
    
    const [deleteID,setDeleteID]=useState();
    
    const userTable=["Student ID","Student NO","Name","Surname","Username","Phone Number","Email","School ID","School Name","School Address"];

    GetData(getterUrl,token,setItems,setIsLoading,isLoading);
    
    DeleteItem(deleteID,deleteUrl,token,setIsLoading);
    
    return(
        <div>
            <AdminNavigation/>
            {isLoading?<TypeItemList typeItems={items} tableItems={userTable} setDeleteID={setDeleteID}/>:<Loader/>}
            {isLoading?<button onClick={()=>(navigate('/add-student'))}>Add New Student</button>:null}
        </div>
    )
}
export default StudentPage;