import React, {Component} from 'react';
import {render} from "react-dom";

// class App extends Component{
//   render() {
//     return(
//     <React.Fragment>
//       <label htmlFor="bar">Bar</label>
//       <input type="text" onClick={() => {console.log("Cliked")}} />
//     </React.Fragment>
//     )
//   }
// }

const App =() => {
  return <div>
    <Cat/>
    <Cat/>
    <Cat/>
    <Cat/>
  </div>
}

const Cat = () => {
  return <div>Mow!</div>
}

export default App;
