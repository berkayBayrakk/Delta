import TypeItem from "./TypeItem";
import classes from './TypeItemList.module.css'
function TypeItemList(props){
    
    return(
        <div className={classes.App}>
            <table className={classes.table}>
            <tr>
                {props.tableItems.map(item=>(<th>{item}</th>))}
            </tr>
                {props.typeItems.map((item)=> 
                (<TypeItem typeItem={item} setDeleteID={props.setDeleteID}
                />))}
            
            </table>
            
        </div>
    )
}
export default TypeItemList;

