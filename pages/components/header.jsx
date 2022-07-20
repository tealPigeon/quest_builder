import React from "react";
import {setCurrentObjectId, setHandMode, setCursorMode} from "../store/reducers";
import {useDispatch, useSelector} from "react-redux";
import { ActionCreators } from 'redux-undo';

function Header()
{
    const dispatch = useDispatch();
    const {mode, objectList, background} = useSelector((state) =>  state.counter.present);
    // let str = `${objectList}`;
    let innerStr =''
    const downloadTxtFile = () => {
        objectList.forEach(function(item, i, arr) {
            console.log(item.top);
            innerStr+=`{name:"${item.name}", width:"${item.width}", left:"${item.left}", top:"${item.top}", height:"${item.height}", visible:${item.visible}, interactive:${item.interactive},buttonMode:${item.interactive}, fullwidth: false,  img:"${item.image}", simpleInfo:${item.simpleInfo}, info:{ru: "${item.info}"}, inBack:"${item.inBack}"},\n`
        });
        const element = document.createElement("a");
        let str =`var arr = [{name: "Room", width:"${background.width}", left:"${background.left}", top:"${background.top}", height:"${background.height}", visible:true, interactive:${background.interactive},buttonMode:${background.interactive}, fullwidth: true, img:"${background.image}"},\n ${innerStr}]; \n export { arr }`;
        const file = new Blob([str], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "quest.js";
        document.body.appendChild(element);
        element.click();
    };
    function inputCursor()
    {
        // dispatch(setCursorMode());
        // setMode('cursor');
        dispatch({ type:'setCursorMode'});

        console.log("inputCursor")
    }

    function inputHand()
    {
        // backgroundMovementMode
        dispatch({ type:'setHandMode'});

        // setMode('hand')

        console.log("inputHand")
    }

    function inputCancel()
    {
        dispatch(ActionCreators.undo());
        console.log("inputCancel")
    }

    function inputRecover()
    {
        dispatch(ActionCreators.redo());
        console.log("inputRecover")
    }

    function inputPreview()
    {
        console.log("inputPreview")
    }

    function inputNext()
    {
        console.log("inputNext")
    }

    return (
        <header className="header">
            <div className="header-button"  onClick={()=>inputCursor()}>
                {
                    mode === 'cursor' ? <div id="cursor-icon-active" className="header-button-image"/>
                        : <div id="cursor-icon" className="header-button-image"/>
                }
                {/*<img className="header-button-image active-button" src={'cursor-icon.svg'} width={24} height={24} alt="" />*/}
            </div>
            <div className="header-button"  onClick={()=>inputHand()}>
                {
                    mode === 'hand' ? <div id="hand-icon-active" className="header-button-image"/>
                        :  <div id="hand-icon" className="header-button-image" />

                }
                {/*<img className="header-button-image" src={'hand.svg'} width={24} height={24} alt="" />*/}
            </div>
            <div className="header-button">
                <div id="cancel-icon" className="header-button-image"  onClick={()=>inputCancel()}/>
                {/*<img className="header-button-image" src={'cancel.svg'} width={24} height={24} alt="" />*/}
            </div>
            <div className="header-button">
                <div id="recover-icon" className="header-button-image"  onClick={()=>inputRecover()}/>
                {/*<img className="header-button-image" src={'recover.svg'} width={24} height={24} alt="" />*/}
            </div>
            <div className='header-title'>КВЕСТРУКТОР</div>
            {/*<button className='header-button-preview' onClick={()=>inputPreview()}>*/}
            {/*    <img className="header-button-preview-image" src={'preview_icon.svg'} width={20} height={16} alt="" />*/}
            {/*    предпросмотр*/}
            {/*</button>*/}
            <button className='header-button-next' onClick={downloadTxtFile}>Скачать файл</button>
        </header>
    );
};

export default Header;