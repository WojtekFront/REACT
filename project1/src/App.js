import React, { Component, createElement } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput';
import Person from './Person/Person';

class App extends Component {

state={persons:[
  {name:"Jan", age:21},
  {name:"Jan1", age:211},
  {name:"Jan2", age:2111}
]
}

switchNameHandler = ()=>{
 // this.state.persons[0].name="HHH";
 this.setState({persons:[
  {name:"Kran", age:31},
  {},
  {name:"Kran2"}
]
})
}

render(){
  return(
<div className="App">
  <button onClick={this.switchNameHandler}>Switch name</button>
  <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
  <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Helga is from German</Person>
  <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
  </div>
)
}








// state={persons: [
//   {username: "supermax", userage: 12 },
//   {username: "Mat", userage: 33},
//   {username: "Poli", age:22}
  
// ]
// }

// userNameChangedHandler = (event) => {
// this.setState({username: event.target.value})
// }
// switchNameHandler = (newName)=>{
// this.setState({
//   persons:[
//     {username:newName, userage:20}
//   ]
// })
// }

//   render(){ 
//     const style ={
//       backroundColor: "pink",
//       padding:"8px"
//     }
//     return(
// <div className="App">

// <h1>Hello World!</h1>
// <button 
// style={style}
// // onClick={()=>this.switchNameHandler("MMarek")}>Push
// >
// </button>
// <Person>
//   name={this.state.persons[0].username}
//   age={this.state.persons[0].userage}
//   click={this.state.bind(this, "MaX")}
//   changed={this.userNameChangedHandler}
// </Person>

//  <UserInput changed={this.userNameChangedHandler} currentName={this.state.username}/> 
//  <UserOutput userName = "Jan" userAge = "22" />
//  <UserOutput userName = "Maria" userAge = "15" />
//  <UserOutput userName = {this.state.username} userAge = {this.state.userage}/>


//  <Person username="Max" userage="66"/>
// </div>


    //return React.createElement("div",{className:"App"},createElement("h1",null,"Hello world"))
 
   
  
}

export default App;
