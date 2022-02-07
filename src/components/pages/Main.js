import data from "../data";
import Card from "../layout/Card";
function MainPage(){
    
    return(
        <Card>
             <p>{data.username+data.password}</p>
        </Card>);
}

export default MainPage;