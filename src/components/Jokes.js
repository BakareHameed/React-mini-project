import React from 'react';

const Jokes = (props)=>{
    return(
        <div>
            <h3>Setup: {props.setup}</h3>
            <h3>{props.punchline}</h3>
            <hr />
        </div>
    );
}
export default Jokes;