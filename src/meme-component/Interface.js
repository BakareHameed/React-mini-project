import React from 'react';

const Interface =() =>{
    const [starWarsData , setStarWarsData] = React.useState({})

    const [count, setCount] = React.useState(0)
    function add() {
        setCount(prevCount => prevCount + 1)
    }

    React.useEffect(()=>{
        console.log("Effect just ran")
    }, [count])
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))

    return(
        <div>
            <pre >{JSON.stringify(starWarsData, 2, null)}</pre>
            <h1 >The count is {count}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}
export default Interface;