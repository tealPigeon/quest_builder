import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/reducers"
import React from 'react'

function Increment()
{
    const dispatch = useDispatch();
    const { width } = useSelector((state) => state.counter);
    // const [inputValue, setInputValue] = React.useState(0);

    function handleInputChange(event) {
        // setInputValue(event.target.value);
        dispatch(incrementByAmount(Number(event.target.value)));
    }

    return(
        <div>
                  <h1> The height is: {width}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <input onChange={handleInputChange}/>
            {/* // <button onClick={()=>dispatch(incrementByAmount())}>Inc</button> */}

        </div>
    )
}

export default Increment;