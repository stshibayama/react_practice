import React, {Component} from 'react';
import {render} from "react-dom";
import Proptypes from 'prop-types';

const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 100},
        {name: "NoName", }
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

User.propTypes ={
    name:Proptypes.string,
    age:Proptypes.number.isRequired
}


// User.defaultProps ={
//   age :1
// }

export default App;
