import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("Parent componentDidMount")
    }
render(){
    console.log("Parent Render")
    return(
        <div>
            <h1>About:</h1>
            <h2>This is a food delivery app</h2>
            <div className="user-profiles">
<UserClass name={"First"} location= {"Vijayawada"}/>
<UserClass name={"Second"} location= {"Vijayawada"}/>
<UserClass name={"Third"} location= {"Vijayawada"}/>

</div>
        </div>
    )
}
}
export default About;