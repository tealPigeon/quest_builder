import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {changeWidth,
    changeHeight,
    changeAngle,
    changeX,
    changeY,
    horizontalMirroring,
    verticalMirroring,
    changeVisibility,
    upObject,
    downObject} from "../store/reducers";
import Features from "./features";
import Actions from "./actions";

function RightMenu()
{
    const { objectList, backgroundImage, currentObjectId, mode } = useSelector((state) =>  state.counter.present);
    const [characteristicsIsOpen,setCharacteristicsIsOpen] = React.useState(true);

    return (
        <>
        {
            currentObjectId === null || mode ==='hand' ? null :<div className='right-side-panel'>
            <div className='title'>{objectList[currentObjectId].name}</div>
            <div className='content'>

                {
                    characteristicsIsOpen ?
                        <>
                            <div className='switch'>
                                <div className='tab active-tab' onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                <div className='tab' onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                            </div>
                            <Features/>
                        </>:
                        <>
                            <div className='switch'>
                                <div className='tab' onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                <div className='tab active-tab'  onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                            </div>
                            <Actions/>

                        </>
                }
            </div>
        </div>
}</>
    );
};

export default RightMenu;