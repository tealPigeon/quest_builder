import type { NextPage } from 'next'
import React from 'react'
import ObjectMenu from "./components/object-menu/object-menu";
import dynamic from "next/dynamic";
import { Stage} from "@inlet/react-pixi";
import Increment from "./components/components-for-store/increment"
import { useDispatch, useSelector } from "react-redux";
import {changeWidth,
    changeHeight,
    changeAngle,
    changeX,
    changeY,
    changeBackgroundImage,
    horizontalMirroring,
    verticalMirroring,
    changeVisibility,
    upObject,
    downObject} from "./store/reducers";
import {listOfObject} from './mocks/list-of-objects-in-menu';
import {listOfBackgroundImages} from "./mocks/list-of-backgrounds";
import PixiApp from "./components/PixiApp";


// const PixiApp = dynamic(() => import("./components/PixiApp"), { ssr: true });

const Home: NextPage = () => {
    // console.log(listOfObject);
    const { objectList, backgroundImage, currentObjectId } = useSelector((state) => state.counter);
    const [background, setBackground] = React.useState('null');
    const [characteristicsIsOpen,setCharacteristicsIsOpen] = React.useState(true);
    const [isHidden,setHidden] = React.useState(false);
    const [mode, setMode] = React.useState(false);
    const [isBackgroundSelected, setIsBackgroundSelected] = React.useState(false);
    const [leftSidePanelState, setLeftSidePanelState] = React.useState('background'); //background, objects, layers
    const [eventCount, setEventCount]=React.useState(0);
    const options = [
        {
            label: "Объект улетает в рюкзак",
            value: "1",
            key:1,
        },
        {
            label: "Объект становится невидимым",
            value: "2",
            key:2,
        },
        {
            label: "Объект становится видимым",
            value: "3",
            key:3,
        },
        {
            label: "Повляется задание",
            value: "4",
            key:4,
        },
        {
            label: "Повляется подсказка",
            value: "5",
            key:5,
        },
    ];
    const [action, setAction] = React.useState('')

    function handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
        // console.log(event)
        setAction(event.target.value);
    }
    const dispatch = useDispatch();

    function addBackground(src: String)
    {
        dispatch(changeBackgroundImage(src));
    }
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeWidth(Number(event.target.value)));
    }

    function handleInputChangeHeight(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeHeight(Number(event.target.value)));
    }

    function handleInputChangeAngle(event: React.ChangeEvent<HTMLInputElement>) {
        let str = String(event.target.value).replace('\u00B0','');;
        dispatch(changeAngle(Number(str)));
        // console.log(event.target.value)
        // dispatch(changeAngle(Number(event.target.value)));
    }

    function handleInputChangeX(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(changeX(Number(event.target.value)));
    }

    function handleInputChangeY(event: React.ChangeEvent<HTMLInputElement>) {
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

    // upObject, downObject
    return (
        <div className="App">
            <Increment/>
            {/*<h1>{width}</h1>*/}
            <header className="header">
                <div className="header-button">
                    <div id="cursor-icon-active" className="header-button-image" />
                    {/*<img className="header-button-image active-button" src={'cursor-icon.svg'} width={24} height={24} alt="" />*/}
                </div>
                <div className="header-button">
                    <div id="hand-icon" className="header-button-image" />
                    {/*<img className="header-button-image" src={'hand.svg'} width={24} height={24} alt="" />*/}
                </div>
                <div className="header-button">
                    <div id="cancel-icon" className="header-button-image" />
                    {/*<img className="header-button-image" src={'cancel.svg'} width={24} height={24} alt="" />*/}
                </div>
                <div className="header-button">
                    <div id="recover-icon" className="header-button-image" />
                    {/*<img className="header-button-image" src={'recover.svg'} width={24} height={24} alt="" />*/}
                </div>
                <div className='header-title'>КВЕСТРУКТОР</div>
                <button className='header-button-preview'>
                    <img className="header-button-preview-image" src={'preview_icon.svg'} width={20} height={16} alt="" />
                    предпросмотр</button>
                <button className='header-button-next'>ДАЛЕЕ</button>
            </header>
            <div className='box'>
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

                            leftSidePanelState === 'background' ? (<div className='side-panel-container-backgrounds'>
                                {listOfBackgroundImages.map((element)=> <div className='background' style={{backgroundImage: `url(${element.image})`} }  onClick={() => addBackground(element.image)} />)}
                            </div>) : leftSidePanelState === 'objects' ?
                                listOfObject.map((element)=><ObjectMenu title={element.title} content={element.content}/>) :
                                <div className='side-panel-container-backgrounds'>
                                    { background === 'background1' ?<div className='background background-1'></div>:background === 'background2' ?<div className='background background-2'></div>:background === 'background3'?<div className='background background-3'></div>:null}
                                </div>
                        }


                    </div>
                </div>
                <div className='main-content'>
                    {
                        backgroundImage === null ? <div className='main-text'>Выберите фон, который хотите использовать</div> : <PixiApp />

                    }
                    {/* {*/}
                    {/*     backgroundImage === 'null' ? <div className='main-text'>Выберите фон, который хотите использовать</div> : <div className={background}></div>*/}
                    {/*}*/}
                </div>
                {
                    currentObjectId === null ? null :<div className='right-side-panel'>
                        <div className='title'>{objectList[currentObjectId].name}</div>
                        <div className='content'>

                            {
                                characteristicsIsOpen ?
                                    <>
                                        <div className='switch'>
                                            <div className='tab active-tab' onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                            <div className='tab' onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                                        </div>
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
                                                {/*<img className="delete-button-image" src={'delete-icon.svg'} width={24} height={24} alt="" />*/}
                                            </div>
                                            <div className="position_button" onClick={()=>handleInputverticalMirroring()}>
                                                <div id="reflection-v-icon" className="header-button-image" />
                                                {/*<img className="delete-button-image" src={'delete-icon.svg'} width={24} height={24} alt="" />*/}
                                            </div>
                                        </div>
                                        <div className='settings_field'>
                                            <div className='sub_title'>объект изначально</div>
                                            {isHidden?
                                                <div className='hidden_switch'>
                                                    <div className='hidden_switch_position' onClick={()=>{setHidden(false); handleInputChangeVisibility()}}>виден</div>
                                                    <div className='hidden_switch_position hidden_switch_position_active' onClick={()=>{setHidden(true)}}>скрыт</div>
                                                </div>: <div className='hidden_switch'>
                                                    <div className='hidden_switch_position hidden_switch_position_active' onClick={()=>{setHidden(false);}}>виден</div>
                                                    <div className='hidden_switch_position' onClick={()=>{setHidden(true); handleInputChangeVisibility() }}>скрыт</div>
                                                </div>}

                                        </div>

                                    </>:
                                    <>
                                        <div className='switch'>
                                            <div className='tab' onClick={()=>setCharacteristicsIsOpen(true)}>Свойства</div>
                                            <div className='tab active-tab'  onClick={()=>setCharacteristicsIsOpen(false)}>Поведение</div>
                                        </div>
                                        <div  className='settings_field'>
                                            <div className='add_an_event_container'>
                                                <div className='sub_title'>Список событий</div>
                                                <div className='add_an_event_button' onClick={()=>setEventCount(eventCount+1)}>
                                                    <img className="position_button_image" src={'add_an_event_icon.svg'} width={24} height={24} alt="" />
                                                </div>
                                            </div>

                                            <div className='add_an_event_title'>Добавьте событие, нажав на «+».</div>
                                            <div className='add_an_event_card'>
                                                <div className='add_an_event_card_header'>
                                                    <div className='add_an_event_card_header_title'>Клик на объект</div>
                                                    <img src={'arrow_up.svg'} width={18} height={10} alt="" />
                                                </div>

                                                <div className='add_an_event_card_content'>
                                                    <div className='sub_title'>Действия</div>
                                                    {

                                                    }
                                                    <div className='type_of_action_title'>Тип действия</div>
                                                    <div className="select-container">
                                                        <select className="select" value={action} onChange={()=>handleSelectChange}>
                                                            {options.map((option) => (
                                                                <option value={option.value}>{option.label}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <button className='delete-button'>
                                                        <div className='delete-button-container'>
                                                            <img className="delete-button-image" src={'delete-icon.svg'} width={24} height={24} alt="" />
                                                            удалить событие
                                                        </div>

                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Home
