import React from 'react';

import './Post.css';

const post = (props) => (

    
    <article className="Post" onClick={props.clicked}>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
        <button type>add comments</button>
        <div className="Info">
            <div className="Author" >{props.author}</div>
        </div>
    </article>
);

export default post;





