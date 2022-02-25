import classes from './Card.module.css';

function Card(props){
    return( 
        <div >
            <div className={classes.table}>
                <h1 className={classes.text}>School Management</h1>
            </div>
            <div className= {classes.card}>
            {props.children}
            </div>
        </div>
    )
}
export default Card;