import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h3>Name: {props.name}</h3>
            <h4>Location: {props.location}</h4>
            <h4>Contact: laxmiprasanna04@gmail.com</h4>
        </div>
    )
}
export default User;