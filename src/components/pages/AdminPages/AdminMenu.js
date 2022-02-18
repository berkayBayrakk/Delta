import UserContext from "../../store/UserContext";
import {useContext,useEffect,useState} from 'react';
import AdminNavigation from "./AdminNavigation";
function AdminPage(){
    
    const userContext=useContext(UserContext);
    const id =userContext.user.id;
    const token =userContext.user.token;
    const [items,setItems]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    useEffect(()=>{
        fetch("https://smapi.eu-west-3.elasticbeanstalk.com/admin/user/"+id, {
            method:'GET',
            headers: {'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`}
            }).then(resp => resp.json())
            .then( json => {setItems(json);setIsLoading(true)})
        },[])

    return(
        <div>
            <AdminNavigation/>
            {isLoading?<table>
                <tr>
                    <tr>{"ID: "+items.id}</tr>
                    <tr>{"Username: "+items.username}</tr>
                    <tr>{"First Name: "+items.name}</tr>
                    <tr>{"Last Name: "+items.surname}</tr>
                    <tr>{"Role Name: "+items.role}</tr>
                    <tr>{"Phone Number: "+items.phoneNumber}</tr>
                    <tr>{"Email: "+items.email}</tr>
                </tr>
            </table>:null}
        </div>);
}

export default AdminPage;