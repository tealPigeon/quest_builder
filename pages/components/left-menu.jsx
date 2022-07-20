import Objects from "./objects";
import React from "react";
import {listOfObject} from '../mocks/list-of-objects-in-menu';
import {listOfBackgroundImages} from "../mocks/list-of-backgrounds";
import {changeBackgroundImage} from "../store/reducers";
import {useDispatch} from "react-redux";
import Layers from "./layers";

function LeftMenu({width, height})
{
    const [leftSidePanelState, setLeftSidePanelState] = React.useState('background'); //background, objects, layers
    const dispatch = useDispatch();
    // function addBackground(src: String)
    function addBackground(src)
    {
        dispatch(changeBackgroundImage({src, width, height}));
    }
    return (
        <div className='side-panel'>
            <div className='side-panel-container'>
                {
                    leftSidePanelState === 'background' ?
                        (<div className='side-panel-container-block active'>
                            <div id="left-side-panel-background-icon-active" className="left-side-panel-icon selected-icon"/>
                            <div>фон</div>
                        </div>):
                        (<div className='side-panel-container-block' onClick={()=>setLeftSidePanelState('background')}>
                            <div id="left-side-panel-background-icon" className="left-side-panel-icon selected-icon"/>
                            <div>фон</div>
                        </div>)
                }
                {
                    leftSidePanelState === 'objects' ?
                        ( <div className='side-panel-container-block active' >
                            <div id="left-side-panel-objects-icon-active" className="left-side-panel-icon selected-icon"/>
                            <div>объекты</div>
                        </div>):
                        (
                            <div className='side-panel-container-block' onClick={()=>setLeftSidePanelState('objects')}>
                                <div id="left-side-panel-objects-icon" className="left-side-panel-icon"/>
                                <div>объекты</div>
                            </div>)
                }
                {
                    leftSidePanelState === 'layers' ?
                        (
                            <div className='side-panel-container-block active' >
                                <div id="left-side-panel-layers-icon-active" className="left-side-panel-icon"/>
                                <div>слои</div>
                            </div>):
                        (
                            <div className='side-panel-container-block' onClick={()=>setLeftSidePanelState('layers')}>
                                <div id="left-side-panel-layers-icon" className="left-side-panel-icon"/>

                                <div>слои</div>
                            </div>)
                }
            </div>
            <div className='side-panel-scroll'>
                {
                    leftSidePanelState === 'background' ? (
                        <div className='side-panel-container-backgrounds'>
                        {listOfBackgroundImages.map((element)=> <div  key={element.id} className='background' style={{backgroundImage: `url(${element.image})`} }  onClick={() => addBackground(element.image)} />)}
                    </div>) : leftSidePanelState === 'objects' ?
                        listOfObject.map((element)=><Objects title={element.title} content={element.content} key={element.id}/>) : <Layers/>
                }
            </div>
        </div>
    );
};

export default LeftMenu;