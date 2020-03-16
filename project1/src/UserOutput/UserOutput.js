import React from 'react';

const userOutput=(props)=>{
const style={
color:"darkgray",
border: "2px solid blue"

}

    return(
<div style={style}>
    <p>Imie {props.userName}</p>
    <p>Data urodzenia {props.userAge}</p>
</div>
    );
}

export default userOutput;