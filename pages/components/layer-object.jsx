import React from "react";
import {changeWidth, deleteObject, makeCopy, changeName} from "../store/reducers";
import {useDispatch} from "react-redux";

function LayerObject( {name})
{
    const [menuIsOpen, setMenuIsOpen] =  React.useState(false);
    const [rename, setRename] = React.useState(false);
    const dispatch = useDispatch();

    function inputChangeName(event) {
        if(event != undefined)
        dispatch(changeName(String(event.target.value)));
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            setRename(false)
        }
    }


    return <div className="layers_name"  >
        {
            rename ?
                <>
                <div className="layers_image"></div>
                <input type={"text"} autoFocus className="layers_input"  id="name" onChange={inputChangeName} onKeyDown={handleKeyDown} value={name}/>
                    <div className="layers_image_menu" onClick={()=>setMenuIsOpen(!menuIsOpen)}></div>
                </>
                :
               <>
                   <div className="layers_image"></div>
                   <div>{name}</div>
                   <div className="layers_image_menu" onClick={()=>setMenuIsOpen(!menuIsOpen)}></div>
               </>
        }
        {menuIsOpen?<div className="layers_context_menu">
            <div className="layers_item" onClick={()=>{dispatch(makeCopy()); setMenuIsOpen(!menuIsOpen)}}>Создать дубликат</div>
            <div className="layers_item"  onClick={()=>{setRename(true); setMenuIsOpen(!menuIsOpen)}}>Переименовать</div>
            <div className="layers_item"  style={{color: "#D22D25"}} onClick={()=>{dispatch(deleteObject()); setMenuIsOpen(!menuIsOpen)}}>Удалить</div>
        </div>:null}
        {/*<div className="layers_image"></div>*/}
        {/*<div>{name}</div>*/}
        {/*<div className="layers_image_menu" onClick={()=>setMenuIsOpen(!menuIsOpen)}></div>*/}
        {/*{menuIsOpen?<div className="layers_context_menu">*/}
        {/*    <div className="layers_item" onClick={()=>dispatch(makeCopy())}>Создать дубликат</div>*/}
        {/*    <div className="layers_item"  onClick={()=>setRename(true)}>Переименовать</div>*/}
        {/*    <div className="layers_item"  style={{color: "#D22D25"}} onClick={()=>dispatch(deleteObject())}>Удалить</div>*/}
        {/*</div>:null}*/}

    </div>
}

export default LayerObject;