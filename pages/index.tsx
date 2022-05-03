import type { NextPage } from 'next'
import React, {SyntheticEvent} from 'react'
import Accordion from "./accordion/accordion";
// import dynamic from "next/dynamic";
import BackgroundIcon from '../public/background-icon.svg';
import ObjectIcon from '../public/objects-icon.svg';
import LayerIcon from '../public/layers-icon.svg'
import HandIcon from '../public/hand.svg'
import HandIconActive from '../public/hand-active.svg';
import CoursorIcon from '../public/coursor-icon.svg'
import CancelIcon from '../public/cancel.svg'
import RecoverIcon from '../public/recover.svg'
import LayersUp from '../public/layers_up.svg'
import LayersDown from '../public/layers_down.svg'
import ReflectionH from '../public/reflection_H.svg'
import ReflectionY from '../public/reflection_V.svg'

// const PixiApp = dynamic(() => import("./components/PixiApp"), { ssr: false });


const Home: NextPage = () => {
    const [background, setBackground] = React.useState('null');
    const [characteristicsIsOpen,setCharacteristicsIsOpen] = React.useState(true);
    const [isHidden,setHidden] = React.useState(false);
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
    const listAccordion  = [
        {
            title: "Двери",
            content:""
            // {
            //     img:"Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
            // }
        },
        {
            title: "Диваны и кресла",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Столы и стулья",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Шкафы, тумбы, стеллажи",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Окна и шторы",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Освещение",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Техника",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Декор для дома",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Растения",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Книги и бумажные листочки",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Игрушки",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
        {
            title: "Животные",
            content:
                "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
        },
    ];
    function handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
        console.log(event)
        setAction(event.target.value);
    }
    console.log(leftSidePanelState);
    return (
        <div className="App">
            <header className="App-header">
                <div className="App-header-button">
                    <CoursorIcon className="App-header-button-image active-button"/>
                </div>
                <div className="App-header-button">
                    <HandIcon className="App-header-button-inactive"/>
                    {/*<HandIconActive/>*/}
                </div>
                <div className="App-header-button">
                    <CancelIcon className="App-header-button-inactive "/>
                </div>
                <div className="App-header-button">
                    <RecoverIcon className="App-header-button-inactive"/>
                </div>
                <div className='App-header-title'>КВЕСТРУКТОР</div>
                <button className='App-header-button-preview'>
                    <img className="App-header-button-preview-image" src={'preview_icon.svg'} width={20} height={16} alt="" />
                    предпросмотр</button>
                <button className='App-header-button-next'>ДАЛЕЕ</button>
            </header>
            <div className='box'>
                <div className='side-panel'>
                    <div className='side-panel-container'>
                        {
                            leftSidePanelState === 'background' ?
                                (<div className='side-panel-container-block active' onClick={()=>setLeftSidePanelState('background')}>
                                    <BackgroundIcon className="left-side-panel-icon selected-icon" />
                                    <div>фон</div>
                                </div>):
                                (<div className='side-panel-container-block' onClick={()=>setLeftSidePanelState('background')}>
                                    <BackgroundIcon className="left-side-panel-icon"  />
                                    <div>фон</div>
                                </div>)
                        }
                        {
                            leftSidePanelState === 'objects' ?
                                (                        <div className='side-panel-container-block active' onClick={()=>setLeftSidePanelState('objects')}>
                                    <ObjectIcon className="left-side-panel-icon selected-icon" />
                                    <div>объекты</div>
                                </div>):
                                (                        <div className='side-panel-container-block' onClick={()=>setLeftSidePanelState('objects')}>
                                    <ObjectIcon className="left-side-panel-icon" />
                                    <div>объекты</div>
                                </div>)
                        }
                        {
                            leftSidePanelState === 'layers' ?
                                (                        <div className='side-panel-container-block active' onClick={()=>setLeftSidePanelState('layers')}>
                                    <LayerIcon className="left-side-panel-icon selected-icon" />
                                    <div>слои</div>
                                </div>):
                                (                        <div className='side-panel-container-block' onClick={()=>setLeftSidePanelState('layers')}>
                                    <LayerIcon className="left-side-panel-icon"/>
                                    <div>слои</div>
                                </div>)
                        }
                    </div>
                    <div className='side-panel-scroll'>
                        {
                            leftSidePanelState === 'background' ? (<div className='side-panel-container-backgrounds'>
                                <div className='background background-1'  onClick={() => setBackground("background1")}></div>
                                <div className='background background-2'  onClick={() => setBackground("background2")}></div>
                                <div className='background background-3'  onClick={() => setBackground("background3")}></div>
                            </div>) : leftSidePanelState === 'objects' ?
                                listAccordion.map((element)=><Accordion title={element.title} content={element.content}/>) :
                                <div className='side-panel-container-backgrounds'>
                                    { background === 'background1' ?<div className='background background-1'></div>:background === 'background2' ?<div className='background background-2'></div>:background === 'background3'?<div className='background background-3'></div>:null}
                                </div>
                        }


                    </div>
                </div>
                <div className='main-content'>
                    {
                        background === 'null' ? <div className='main-text'>Выберите фон, который хотите использовать</div> : <div className={background}></div>
                    }
                </div>
                <div className='right-side-panel'>
                    <div className='title'>Объект</div>
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
                                                <input type={"text"} id="height"/>
                                            </label>
                                            <label>
                                                Ш
                                                <input type={"text"} id="width"/>
                                            </label>
                                            <label>
                                                У
                                                <input type={"text"} id="angle"/>
                                            </label>
                                        </div>

                                    </div>

                                    <div  className='settings_field'>
                                        <div className='sub_title'>Положение</div>
                                        <div className='settings'>
                                            <label>
                                                X
                                                <input type={"text"} id="x"/>
                                            </label>
                                            <label>
                                                Y
                                                <input type={"text"} id="y"/>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="position">
                                        <div className="position_button">
                                            <LayersUp className="position_button_image" width={24} height={24} alt="" />
                                        </div>
                                        <div className="position_button">
                                            <LayersDown className="position_button_image" width={24} height={24} alt="" />
                                        </div>
                                        <div className="position_button">
                                            <ReflectionH className="position_button_image" width={24} height={24} alt="" />
                                        </div>
                                        <div className="position_button">
                                            <ReflectionY className="position_button_image" width={24} height={24} alt="" />
                                        </div>
                                    </div>
                                    <div className='settings_field'>
                                        <div className='sub_title'>объект изначально</div>
                                        {isHidden?
                                            <div className='hidden_switch'>
                                                <div className='hidden_switch_position' onClick={()=>{setHidden(false)}}>виден</div>
                                                <div className='hidden_switch_position hidden_switch_position_active' onClick={()=>{setHidden(true)}}>скрыт</div>
                                            </div>: <div className='hidden_switch'>
                                                <div className='hidden_switch_position hidden_switch_position_active' onClick={()=>{setHidden(false)}}>виден</div>
                                                <div className='hidden_switch_position' onClick={()=>{setHidden(true)}}>скрыт</div>
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
            </div>
        </div>
    )
}

export default Home
