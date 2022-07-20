import React, { useState, useEffect } from "react";
import { Stage, Container, Sprite, useTick, Text } from "@inlet/react-pixi";
import PIXI from "pixi.js";
import store from "../store"
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import PixiObject from "./pixi-object"
import {changeX, changeY, setCurrentObjectId, addObject} from "../store/reducers";
import {ObjectInMenu} from "../types/types";
import del from "../delete.png";


interface Draggable extends PIXI.DisplayObject {
    data: PIXI.InteractionData | null;
    dragging: boolean;
}


// @ts-ignore
const PixiObjects = ({props}:ObjectInMenu) => {
    // const {objectList, backgroundImage} = useSelector((state) => state.counter);
    // console.log(objectList)
    const [position,setPosition]= useState({ x: 100, y: 100 });
    const lastPosition = { x: 0, y: 0 };
    const dispatch = useDispatch();
    const onDragStart = (event: PIXI.InteractionEvent) => {
        const sprite = event.currentTarget as Draggable;
        sprite.alpha = 0.5;
        sprite.data = event.data;
        sprite.dragging = true;

        // dispatch(setCurrentObjectId(props.id));
    };
// console.log(props)
    const onDragEnd = (event: PIXI.InteractionEvent) => {
        const sprite = event.currentTarget as Draggable;
        // const newPosition = sprite.data!.getLocalPosition(sprite.parent);
        sprite.alpha = 1;
        sprite.dragging = false;
        if(position.x>350){
            setPosition({x:100, y:100})
            dispatch(addObject(
                {
                    name: props.name,
                    width:props.width,
                    height:props.height,
                    image:props.url,
                    left:position.x,
                    top:position.y,
                }
            ));
        }
        setPosition({x:100, y:100})
        sprite.data = null;
    };

    const onDragMove = (event: PIXI.InteractionEvent) => {
        const sprite = event.currentTarget as Draggable;
        if (sprite.dragging) {
            const newPosition = sprite.data!.getLocalPosition(sprite.parent);
            setPosition({x:Number(newPosition.x), y:Number(newPosition.y)})
            // dispatch(changeX(Number(newPosition.x)));
            // dispatch(changeY(Number(newPosition.y)));

        }
    };

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Stage width={props.width} height={props.height} options={{ backgroundColor: 0xFFFFFF }}>
            <Container width={props.width} >
                <Sprite
                    width={props.width}
                    height={props.height}
                    image={props.url}
                    x={position.x}
                    y={position.y}
                    interactive
                    buttonMode
                    anchor={0.5}
                    pointerdown={onDragStart}
                    pointerup={onDragEnd}
                    pointerupoutside={onDragEnd}
                    pointermove={onDragMove}
                    visible={true}
                    zIndex={150}
                />
                <Sprite
                    width={props.width}
                    height={props.height}
                    image={props.url}
                    x={100}
                    y={100}
                    anchor={0.5}
                    interactive={false}
                    buttonMode={false}
                />
            </Container>
        </Stage> );
};

export default PixiObjects;
