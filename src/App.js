import React, {Component} from 'react';
import {render} from "react-dom";

const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 100},
        {name: "NoName"}
    ]
    return (
        <div>

            {
              profiles.map((profile, index) => {
                return <User name={profile.name} age={profile.age} key={index} />
                })
            }
        </div>
    )
}

const User = (props) => {
    return <div>Mow!zz {props.name} , and {props.age} year</div>
}

User.defaultProps ={
  age :1
}

export default App;
