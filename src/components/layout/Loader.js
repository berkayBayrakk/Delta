import classes from './Loader.module.css';

function Loader(){
    return <div>
        <div className={classes.loader}></div>
        <h1 className={classes.text}>"Loading..."</h1>
    </div>
}

export default Loader;