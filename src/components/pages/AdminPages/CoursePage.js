import AdminNavigation from "./AdminNavigation";
import UserContext from "../../store/UserContext";
import Loader from '../../layout/Loader';
import {useState, useContext} from 'react';
import TypeItemList from "../../types/TypeItemList";
import { GetData,DeleteItem } from "../../fetch/methods";
import {useNavigate} from 'react-router';
function CoursePage(){

    const navigate =useNavigate();

    const userContext=useContext(UserContext);
    
    const [items,setItems]=useState([]);
    
    const [isLoading,setIsLoading]=useState(false);
    
    const getterUrl ="https://smapi.eu-west-3.elasticbeanstalk.com/admin/lessons";
    
    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/admin/lesson";

    const token =userContext.user.token;
    
    const [deleteID,setDeleteID]=useState();
    
    const userTable=["ID", "Name","Subject","Teacher Name","Teacher ID"];

    GetData(getterUrl,token,setItems,setIsLoading,isLoading);
    
    DeleteItem(deleteID,deleteUrl,token,setIsLoading);

    return(
        <div>
            <AdminNavigation/>
            {isLoading?<TypeItemList typeItems={items} tableItems={userTable} setDeleteID={setDeleteID} />:<Loader />}
            {isLoading?<button  onClick={()=>(navigate('/add-course'))}>Add New Course</button>:null}
        </div>
    )
}
export default CoursePage