
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    changeAngle,
    changeHeight, changeVisibility,
    changeWidth,
    changeX,
    changeY, downObject,
    horizontalMirroring, upObject,
    verticalMirroring
} from "../store/reducers";


function Features()
{

    const dispatch = useDispatch();
    const { objectList, currentObjectId } = useSelector((state) =>  state.counter.present);
    // function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    function handleInputChange(event) {
        dispatch(changeWidth(Number(event.target.value)));
    }

    function handleInputChangeHeight(event) {
        dispatch(changeHeight(Number(event.target.value)));
    }

    function handleInputChangeAngle(event) {
        let str = String(event.target.value).replace('\u00B0','');;
        dispatch(changeAngle(Number(str)));
    }

    function handleInputChangeX(event) {
        dispatch(changeX(Number(event.target.value)));
    }

    function handleInputChangeY(event) {
        dispatch(changeY(Number(event.target.value)));
    }

    function handleInputhorizontalMirroring() {
        dispatch(horizontalMirroring());
    }

    function handleInputverticalMirroring() {
        dispatch(verticalMirroring());
    }
    function handleInputChangeVisibility() {
        dispatch(changeVisibility());
    }

    function handleInputUpObject() {
        dispatch(upObject());
    }
    function handleInputDownObject() {
        dispatch(downObject());
    }

    return (
        <>
        <div className='settings_field'>
            <div className='sub_title'>размер и угол</div>
            <div className='settings'>
                <label>
                    В
                    {
                        currentObjectId < objectList.length ? <input type={"text"} id="height" onChange={handleInputChangeHeight} value={objectList[currentObjectId].height}/> :<input type={"text"} id="height" onChange={handleInputChangeHeight} />
                    }

                </label>
                <label>
                    Ш
                    {
                        currentObjectId < objectList.length ? <input type={"text"} id="width"  onChange={handleInputChange} value={objectList[currentObjectId].width}/> :<input type={"text"} id="width"  onChange={handleInputChange} />
                    }

                </label>
                <label>
                    У
                    {
                        currentObjectId < objectList.length ? <input type={"text"} id="angle" onChange={handleInputChangeAngle} placeholder={`${objectList[currentObjectId].angle}\u00B0`} value={`${objectList[currentObjectId].angle}\u00B0`}/> :<input type={"text"} id="angle" onChange={handleInputChangeAngle} />
                    }

                </label>
            </div>
        </div>

    <div  className='settings_field'>
        <div className='sub_title'>Положение</div>
        <div className='settings'>
            <label>
                X
                {
                    currentObjectId < objectList.length ?  <input type={"text"} id="x" onChange={handleInputChangeX} value={objectList[currentObjectId].left}/> : <input type={"text"} id="x" onChange={handleInputChangeX} />
                }

            </label>
            <label>
                Y
                {
                    currentObjectId < objectList.length ?  <input type={"text"} id="y" onChange={handleInputChangeY} value={objectList[currentObjectId].top}/> : <input type={"text"} id="y" onChange={handleInputChangeY} />
                }

            </label>
        </div>
    </div>
    <div className="position">
        <div className="position_button" onClick={()=>handleInputUpObject()}>
            {/*handleInputUpObject()*/}
            <div id="layers-up-icon" className="header-button-image" />
            {/*<img className="layers-up-image" width={24} height={24} alt="" />*/}
        </div>
        <div className="position_button" onClick={()=>handleInputDownObject()}>
            <div id="layers-down-icon" className="header-button-image" />
            {/*<img className="delete-button-image" src={'delete-icon.svg'} width={24} height={24} alt="" />*/}
        </div>
        <div className="position_button" onClick={()=>handleInputhorizontalMirroring()}>
            <div id="reflection-h-icon" className="header-button-image" />
        </div>
        <div className="position_button" onClick={()=>handleInputverticalMirroring()}>
            <div id="reflection-v-icon" className="header-button-image" />
        </div>
    </div>
    <div className='settings_field'>
        <div className='sub_title'>объект изначально</div>
        { objectList[currentObjectId].visible ? <div className='hidden_switch'>
                <div className='hidden_switch_position hidden_switch_position_active'>виден</div>
                <div className='hidden_switch_position' onClick={()=>{handleInputChangeVisibility()}}>скрыт</div>
            </div>
            :  <div className='hidden_switch'>
                <div className='hidden_switch_position' onClick={()=>{ handleInputChangeVisibility()}}>виден</div>
                <div className='hidden_switch_position hidden_switch_position_active'>скрыт</div>
            </div>}
    </div>
            </>
);
};

export default Features;