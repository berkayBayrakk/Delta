import AdminNavigation from "./AdminNavigation";
import TypeItemList from "../../types/TypeItemList";
import {useState, useContext} from 'react';
import UserContext from "../../store/UserContext";
import Loader from '../../layout/Loader';
import { GetData,DeleteItem } from "../../fetch/methods";
import {useNavigate} from 'react-router';
function UserPage(){
    
    const navigate=useNavigate();

    const userContext=useContext(UserContext);
    
    const [items,setItems]=useState([]);
    
    const [isLoading,setIsLoading]=useState(false);
    
    const getterUrl="https://smapi.eu-west-3.elasticbeanstalk.com/admin/users";
    
    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/admin/user";
    
    const token =userContext.user.token;
    
    const [deleteID,setDeleteID]=useState();

    const userTable=["ID","Name","Surname","Username","Phone","Email","Role"];

    GetData(getterUrl,token,setItems,setIsLoading,isLoading);
    
    DeleteItem(deleteID,deleteUrl,token,setIsLoading);
    
    return (
    <div>
        <AdminNavigation/>
        {isLoading?(<TypeItemList typeItems={items} tableItems={userTable} setDeleteID={setDeleteID}/>):<Loader/>}
        {isLoading?<button onClick={()=>(navigate('/add-user'))}>Add New User</button>:null}
    </div>
    )


}

export default UserPage;