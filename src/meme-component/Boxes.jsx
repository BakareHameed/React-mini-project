import React from 'react';

const Boxes =(props) => {
    // const [power, setPower] = React.useState(props.on)
    // function changeColor(){
    //     setPower(prevstate => !prevstate)
    // }
    const styles ={
        backgroundColor: props.on? "#222222":"#cccccc"
    }

    return(
        <div style={styles} className="box"></div>
        )
}
export default Boxes;