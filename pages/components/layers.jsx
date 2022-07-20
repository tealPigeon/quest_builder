import React, { Component, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {useDispatch, useSelector} from "react-redux";
import {changeBackgroundX, changeList, setCurrentObjectId} from "../store/reducers";
import LayerObject from "./layer-object";

const getItemStyle = (currentObjectId, isDragging, draggableStyle) => ({
    userSelect: "none",
    // padding: '10px',
    margin: `0 0 10px 0`,
    width: 336,
    borderBottom:2,
    borderColor:"grey",
    background: isDragging || currentObjectId ? "#E6F0F0" : "white",
    color: isDragging || currentObjectId ? "#006666" : "black",
    fontSize: '18px',
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    // background: isDraggingOver ? "lightblue" : "white",
    background: "white",

    // padding: '10px',
    position: "relative",
    padding: '32px'
});

const queryAttr = "data-rbd-drag-handle-draggable-id";

const Layers = props => {

    const dispatch = useDispatch();
    const {objectList, currentObjectId} = useSelector((state) =>  state.counter.present);

    const [placeholderProps, setPlaceholderProps] = useState({});
    // const [copyObjectList, setItems] = useState(Array.from(objectList));
    let copyObjectList = (Array.from(objectList)).reverse();
    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }
        setPlaceholderProps({})
        console.log(copyObjectList)
        // const objlist =
        dispatch(changeList( reorder(copyObjectList, result.source.index, result.destination.index, currentObjectId)));
        // reorder(objectList, result.source.index, result.destination.index);
        // setItems();
    };

    function Click(id)
    {
        dispatch(setCurrentObjectId(id));
    }


    const reorder = (list, startIndex, endIndex,currentObjectId) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        const copy = Array.from(result).reverse();
        const id = copy.findIndex((el)=>el.id===currentObjectId);
        dispatch(setCurrentObjectId(id));
        const res = Array.from(copy.map((el,index)=>({...el, id: index})));
        console.log(res)
        // dispatch(changeList(res));
        return res;
    };


    const onDragUpdate = update => {

        if(!update.destination){
            return;
        }
        const draggableId = update.draggableId;
        const destinationIndex = update.destination.index;

        const domQuery = `[${queryAttr}='${draggableId}']`;
        const draggedDOM = document.querySelector(domQuery);

        if (!draggedDOM) {
            return;
        }
        const { clientHeight, clientWidth } = draggedDOM;

        const clientY = parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) + [...draggedDOM.parentNode.children]
            .slice(0, destinationIndex)
            .reduce((total, curr) => {
                const style = curr.currentStyle || window.getComputedStyle(curr);
                const marginBottom = parseFloat(style.marginBottom);
                return total + curr.clientHeight + marginBottom;
            }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY,
            clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {
                            copyObjectList.length >0 ? copyObjectList.map((item,index) => (
                            <Draggable key={Number(item.id)} draggableId={String(item.id)} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            currentObjectId===item.id,
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                        onClick={() => Click(item.id)}
                                    >

                                        <LayerObject key={item.id} name={item.name}/>
                                        {/*{item.id}*/}
                                        {/*{index}*/}
                                    </div>
                                )}
                            </Draggable>
                        )):null}

                        {provided.placeholder}
                        <div style={{
                            position: "absolute",
                            top: placeholderProps.clientY,
                            left: placeholderProps.clientX,
                            height: placeholderProps.clientHeight,
                            background: "#B0DCDC",
                            width: placeholderProps.clientWidth
                        }}/>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default Layers;