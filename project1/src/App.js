import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render(){ return(
<div className="App">

<h1>Hello World!</h1>
<Person/>
</div>


    //return React.createElement("div",{className:"App"},createElement("h1",null,"Hello world"))
 
   ) }
  
}

export default App;
