import {GetData,DeleteItem} from '../../fetch/methods';
import TypeItemList from '../../types/TypeItemList';
import Loader from '../../layout/Loader';
function TeacherCourses(props){
    
    GetData(props.getUrl,props.token,props.setItems,props.setIsLoading,props.isLoading);
    DeleteItem(props.deleteId,props.deleteUrl,props.token,props.setIsLoading);
    return(
        <div>
             {props.isLoading?<TypeItemList typeItems={props.items} tableItems={props.userTable} setDeleteID={props.setDeleteID}/>:<Loader/>}
             {props.isLoading?<button onClick={()=>(props.navigation('/add-teacher-teacherpage'))}>Add New Course</button>:null}
        </div>
    )
}
export default TeacherCourses;