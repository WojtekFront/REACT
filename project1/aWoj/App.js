import React, { Component, createElement } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput';
import Person from './Person/Person';

class App extends Component {

state={persons:[
  {id:"1", name:"Jan", age:21},
  {id:"2", name:"Jan1", age:211},
  {id:"3", name:"Jan2", age:2111}
],
showPersons: false

}

// switchNameHandler = (newName)=>{
//   this.state.persons[0].name="HHH";
//  this.setState({persons:[
//   {name: newName, age:6},
//   {name:"Kran12", age:66},
//   {name:"Kran22", age:666}
// ]
// })
// }

deletePersonHandler =(personIndex)=>{
  const persons =this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons:persons})
}

nameChangedHanler = (event,id)=>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  });

  const person = {...this.state.persons[personIndex]};

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons:persons}
    // {
    //   persons:[
    //     {name: "jaj", age:21},
    //     {name: event.target.value, age:211},
    //     {name: "jaj", age:2111}
        
    //   ]
    // }
  )
}

togglePersonHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow});
} 

render(){
  const style={
    backroundColor:"white",
    font: 'inherit',
    border: '1px solid blue',
    padding: "8px",
    cursor: "pointer"
  }


let persons = null;

if(this.state.showPersons){
  persons = (
<div>
{this.state.persons.map((person, index)=>{
return <Person 
click = {()=>this.deletePersonHandler(index)}
name = {person.name} 
age ={person.age}
key={person.id}
changed={(event)=>this.nameChangedHanler(event, person.id)}
/>

})}
  {/* <Person 
    name={this.state.persons[0].name} 
    age={this.state.persons[0].age}
    
    >some value</Person>
  <Person 
    name={this.state.persons[1].name} 
    age={this.state.persons[1].age}
    click={this.switchNameHandler.bind(this, "Max")}
    changed={this.nameChangedHanler}
    >Helga is from German</Person>
  <Person 
    name={this.state.persons[2].name}  
    age={this.state.persons[2].age}
    
  /> */}
  </div>
  )
}

  return(
<div className="App">
  <button 
  style={style}
  // onClick={() => this.switchNameHandler('Mimi')} 
  onClick={this.togglePersonHandler}>Switch name</button>
 
  {persons}
  
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
