import React from "react"
import {
    setCursorMode,
    changeObjectFliesInBackpack,
    changeAddAHint,
    changeBecomeVisible,
    changeBecomeUnvisible,
    changeTask,
    changeActionClick,
    addText, changeName
} from "../store/reducers";
import {useDispatch, useSelector} from "react-redux";


function Actions()
{
    const [eventSelectionWindow, setEventSelectionWindow] = React.useState(false);
    const {objectList, currentObjectId}= useSelector((state) =>  state.counter.present);
    const dispatch = useDispatch();
    const [hit, setHit] = React.useState(objectList[currentObjectId].info)
// , inBack, simpleInfo, task, becomeVisible ,becomeUnvisible
    // const [eventCount, setEventCount]=React.useState(0);
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
            label: "Появляется задание",
            value: "4",
            key:4,
        },
        {
            label: "Появляется подсказка",
            value: "5",
            key:5,
        },
    ];
    const [action, setAction] = React.useState('')

    // function handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
    function handleSelectChange(event) {
        setAction(event.target.value);
        switch(event.target.value) {
            case "1":
                dispatch(changeObjectFliesInBackpack(true));
                break;
            case "2":
                dispatch(changeBecomeUnvisible(true));
                break;
            case "3":
                dispatch(changeBecomeVisible(true));
                break;
            case "4":
                dispatch(changeTask(true));
                break;
            case "5":
                dispatch(changeAddAHint(true));
                break;
            default:
                break;
        }
        console.log(event.target.value);
    }


    function createClickAction()
    {
        console.log("createClickAction");
        dispatch(changeActionClick(true));
        setEventSelectionWindow(false);
        console.log(currentObjectId!=null && objectList[currentObjectId].actionClick)

    }

    function createMoveAction()
    {
        console.log("createMoveAction");
        setEventSelectionWindow(false);
    }

    function inputChangeHit(event) {
        if(event != undefined)
            setHit(String(event.target.value))
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            dispatch(addText(hit));
        }
    }

    return (
        <>
            <div  className='settings_field'>
                <div className='add_an_event_container'>
                    <div className='sub_title'>Список событий</div>
                    <div className='add_an_event_button' onClick={()=>setEventSelectionWindow(!eventSelectionWindow)}>
                        <img className="position_button_image" src={'add_an_event_icon.svg'} width={24} height={24} alt="" />

                    </div>

                </div>
                {
                    eventSelectionWindow ? <div className="event_selection">
                        <div className="event" onClick={()=>createClickAction()}> Клик на объект</div>
                        <div className="borderline"></div>
                        <div className="event" onClick={()=>createMoveAction()}> Перемещение объекта на ...</div>
                    </div>:null
                }

                {
                    currentObjectId!=null && objectList[currentObjectId].actionClick ?
                        <div className='add_an_event_card'>
                            <div className='add_an_event_card_header'>
                                <div className='add_an_event_card_header_title' >Клик на объект</div>
                                {/*<img src={'arrow_up.svg'} width={18} height={10} alt="" />*/}
                            </div>

                            <div className='add_an_event_card_content'>
                                <div className='sub_title'>Действия</div>
                                {
                                    objectList[currentObjectId].inBack ? <> <div className='action-item'><div className='action_title'>Объект улетает в рюкзак</div><button className="action-delete-button-image" onClick={()=>{dispatch(changeObjectFliesInBackpack(false))}}><img  src={'delete-icon.svg'} width={24} height={24} alt="" /></button></div><div className='bottom_line'></div></> : null
                                }
                                {
                                    objectList[currentObjectId].simpleInfo ? <>
                                        <div className='action-item'>
                                            <div className='action_title'>Появляется подсказка</div>
                                            <button className="action-delete-button-image" onClick={()=>{dispatch(changeAddAHint(false))}}>
                                                <img  src={'delete-icon.svg'} width={24} height={24} alt="" /></button></div>
                                        <input className="hit_input" type={"text"} autoFocus  id="hit" onChange={inputChangeHit} defaultValue={hit} onKeyDown={handleKeyDown}/>
                                        <div className='bottom_line'>
                                    </div>
                                    </> : null
                                }
                                {
                                    objectList[currentObjectId].task ? <><div className='action-item'><div className='action_title'>Появляется задание</div><button className="action-delete-button-image" onClick={()=>{dispatch(changeTask(false))}}><img  src={'delete-icon.svg'} width={24} height={24} alt="" /></button></div><div className='bottom_line'></div></> : null
                                }
                                {
                                    objectList[currentObjectId].becomeVisible ? <><div className='action-item'><div className='action_title'>Становится видимым</div><button className="action-delete-button-image" onClick={()=>{dispatch(changeBecomeVisible(false))}}><img  src={'delete-icon.svg'} width={24} height={24} alt="" /></button></div><div className='bottom_line'></div></> : null
                                }
                                {
                                    objectList[currentObjectId].becomeUnvisible ? <><div className='action-item'><div className='action_title'>Становится невидимым</div><button className="action-delete-button-image" onClick={()=>{dispatch(changeBecomeUnvisible(false))}}><img  src={'delete-icon.svg'} width={24} height={24} alt="" /></button></div><div className='bottom_line'></div></> : null
                                }
                                <div className='type_of_action_title'>Тип действия</div>
                                <div className="select-container">
                                    <select className="select" value={action} onChange={handleSelectChange}>
                                        <option value="" defaultValue disabled hidden>Добавить из списка</option>
                                        {options.map((option) => (
                                            <option key={option.key} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <button className='delete-button' onClick={()=>dispatch(changeActionClick(false))}>
                                    <div className='delete-button-container'>
                                        <img className="delete-button-image" src={'delete-icon.svg'} width={24} height={24} alt="" />
                                        удалить событие
                                    </div>

                                </button>
                            </div> </div>
                        :                 <div className='add_an_event_title'>Добавьте событие, нажав на «+».</div>}



            </div>
        </>
    );
}

export default Actions;