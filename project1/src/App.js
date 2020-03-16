import React, { Component, createElement } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
state={
  username: "supermax"
  //userage: "12"
}

userNameChangedHandler = (event) => {
this.setState({username: event.target.value})
}

  render(){ 
    return(
<div className="App">

<h1>Hello World!</h1>
 <UserInput changed={this.userNameChangedHandler} currentName={this.state.username}/> 
 <UserOutput userName = "Jan" userAge = "22" />
 <UserOutput userName = "Maria" userAge = "15" />
 <UserOutput userName = {this.state.username} userAge = {this.state.userage}/>
</div>


    //return React.createElement("div",{className:"App"},createElement("h1",null,"Hello world"))
 
   ) }
  
}

export default App;
