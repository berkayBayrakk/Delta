import classes from './TypeItems.module.css';
function TypeItem(props){

    const deleteID=Object.values(props.typeItem)[0];

    return(
        <tr>
            {Object.entries(props.typeItem).map(item => (<td>{item[1]}</td>))}
            <td><button onClick={()=>props.setDeleteID(deleteID)} className={classes.button}>Delete</button></td>  
        </tr>
    )
}
export default TypeItem;


