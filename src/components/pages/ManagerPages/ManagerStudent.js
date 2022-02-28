import ManagerNavigation from "./ManagerNavigation";
import {GetData,DeleteItem} from '../../fetch/methods';
import {useState,useContext} from 'react';
import UserContext from "../../store/UserContext";
import { useNavigate } from "react-router-dom";
import TypeItems from '../../types/TypeItemList';
import Loader from '../../layout/Loader';
function ManagerStudent(){
    
    const navigation=useNavigate();

    const getUrl="https://smapi.eu-west-3.elasticbeanstalk.com/management/students";

    const deleteUrl="https://smapi.eu-west-3.elasticbeanstalk.com/management/student"

    const tableItems=["Student ID","Student No","Name","Surname","Username","Phone Number","Email","School ID","School Name","School Address"];

    const adminContext=useContext(UserContext);

    const [items,setItems]=useState([]);

    const [isLoading,setIsLoading]=useState(false);

    const [deleteId,setDeleteId]=useState();

    GetData(getUrl,adminContext.user.token,setItems,setIsLoading,isLoading);
    
    DeleteItem(deleteId,deleteUrl,adminContext.user.token,setIsLoading);

    return(
        <div>
            <ManagerNavigation navigation={navigation}/>
            {isLoading?<TypeItems tableItems={tableItems} typeItems={items} setDeleteID={setDeleteId} />:<Loader/>}
            {isLoading?<button  onClick={()=>(navigation('/add-student-manager'))}>Add Student</button>:null}
        </div>
    )
}

export default ManagerStudent;