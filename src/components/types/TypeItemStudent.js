import {useEffect,useState} from 'react';

function TypeItemStudent(props){

    const takeCourseId=Object.values(props.typeItem)[0];
    const [isValid,setIsValid]=useState(true);
    
    useEffect(()=>{

        props.courseContext.lessonIds.forEach(element => {
            if(element.id===takeCourseId){
                console.log(takeCourseId)

                setIsValid(false);
            }
        });
        
    },[isValid])

    function buttonClickHandler(){
        props.courseContext.addLesson(props.typeItem);
        props.setIsExecute(true);
        props.setTakeCourseId(takeCourseId);
        setIsValid(false);
    }

    return(
        <tr>
            {Object.entries(props.typeItem).map(item => (<td>{item[1]}</td>))}
            {isValid?<td><button onClick={buttonClickHandler}>Take Lesson</button></td>:<td>You have this lesson</td>}  
        </tr>
    )
}
export default TypeItemStudent;


