import React from "react";
import UserContext from "../utilis/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
count2: 1,
        }
        console.log(this.props.name + "Child Constructor")
    }
    componentDidMount(){
        console.log(this.props.name + "Child Component Did Mount")
    }
    render(){
        const {name, location} = this.props;
        const {count, count2} = this.state;
        return(
          <div className="border w-3/12 p-2 m-4">
            <UserContext.Consumer>
{
    ({loggedInUser}) => (
        <h1>{loggedInUser}</h1>
    )  
}
            </UserContext.Consumer>
            <h2>Count: {count}</h2>
            <button className="border p-2 m-4" onClick={()=>{
                this.setState({
                    count: this.state.count +1
                })
            }
            }>Increase Count</button>
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
            <h4>Contact: bhanu@gmail.com</h4>
        </div>  
        )
    }
}
export default UserClass;