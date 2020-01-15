import React, {useState} from 'react';

const Jooo = (props) => {


const [test, setTest] = useState(777);


    return(
        <>
        <h1 onClick={() => { props.fn(test)}}>Привет  </h1>
        </>
    )
}
export default Jooo