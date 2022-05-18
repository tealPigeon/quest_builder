import React, { useState, useEffect } from "react";
import { Stage, Container, Sprite, useTick, Text } from "@inlet/react-pixi";
import PIXI from "pixi.js";
import store from "../../store"
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import RotatingBunny from "../RotatingBunny"
import {incrementByAmountX, incrementByAmountY, setCurrentObjectId, addObject} from "../../store/reducers";


interface Draggable extends PIXI.DisplayObject {
    data: PIXI.InteractionData | null;
    dragging: boolean;
}


const PixiObjects = () => {
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

    const onDragEnd = (event: PIXI.InteractionEvent) => {
        const sprite = event.currentTarget as Draggable;
        // const newPosition = sprite.data!.getLocalPosition(sprite.parent);
        sprite.alpha = 1;
        sprite.dragging = false;
        if(position.x>350){
            setPosition({x:100, y:100})
            dispatch(addObject(
                {
                    image:"https://media.foma.ru/2008/01/khristos_v_pustyne-e1488799006930.jpg",
                    name: "первый",
                    // width: 200,
                    // height:200,
                    left:position.x-350,
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
            // dispatch(incrementByAmountX(Number(newPosition.x)));
            // dispatch(incrementByAmountY(Number(newPosition.y)));

        }
    };

    return (
        <Stage width={350} options={{ backgroundColor: 0xFFFFFF }}>
            <Container width={350}  >
                <Sprite
                    width={200}
                    height={200}
                    image="https://media.foma.ru/2008/01/khristos_v_pustyne-e1488799006930.jpg"
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
                    width={200}
                    height={200}
                    image="https://media.foma.ru/2008/01/khristos_v_pustyne-e1488799006930.jpg"
                    x={100}
                    y={100}
                    anchor={0.5}
                    interactive={false}
                    buttonMode={false}
                    // pointerdown={onDragStart}
                    // pointerup={onDragEnd}
                    // pointerupoutside={onDragEnd}
                    // pointermove={onDragMove}
                    // visible={true}
                    // zIndex={150}
                />
                {/*<Sprite*/}
                {/*    image={backgroundImage}*/}
                {/*    width={1500} height={870}*/}
                {/*    x={0}*/}
                {/*    y={0}*/}
                {/*/>*/}
                {/*<Provider store={store}>*/}
                {/*    {objectList.map((element)=><RotatingBunny props={element}/>) }*/}
                {/*</Provider>*/}
            </Container>
        </Stage> );
};

export default PixiObjects;
