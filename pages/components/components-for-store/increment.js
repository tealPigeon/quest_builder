import { useDispatch, useSelector } from "react-redux";
import { change,deleteObject } from "../../store/reducers"
import React from 'react'

function Increment()
{
    const dispatch = useDispatch();
    const { currentObjectId } = useSelector((state) => state.counter);
    // const [inputValue, setInputValue] = React.useState(0);

    function handleInputChange(event) {
        // setInputValue(event.target.value);
        dispatch(change(Number(event.target.value)));
    }

    return(
        <div>
                  <h1> id is {currentObjectId}</h1>
            <button onClick={()=>dispatch(deleteObject())}>deleteObject</button>
            {/* // <button onClick={()=>dispatch(change())}>Inc</button> */}

        </div>
    )
}

export default Increment;