import classes from './TypeItemList.module.css'
import TypeItemStudent from './TypeItemStudent'
function TypeItemListStudent(props){

    return(
        <div className={classes.App}>
            <table className={classes.table}>
            <tr>
                {props.tableItems.map(item=>(<th>{item}</th>))}
            </tr>
                {props.typeItems.map((item)=> 
                (<TypeItemStudent setIsExecute={props.setIsExecute} typeItem={item} setTakeCourseId={props.setTakeCourseId} courseContext={props.courseContext}
                />))}
            
            </table>
        </div>
    )
}
export default TypeItemListStudent;

