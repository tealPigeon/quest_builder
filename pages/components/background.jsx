import React, { useState, useEffect } from "react";
import { Stage, Container, Sprite, useTick, Text } from "@inlet/react-pixi";
import PIXI from "pixi.js";
import { useDispatch, useSelector } from "react-redux";
// import PixiObject from "../PixiObject"
import {changeBackgroundX, changeBackgroundY} from "../store/reducers"

// interface Draggable extends PIXI.DisplayObject {
//     data: PIXI.InteractionData | null;
//     dragging: boolean;
// }

function Background ()
{
    const {background, mode}= useSelector((state) => state.counter.present);
    const [move, setMove] = useState([background.left, background.top]);
    const dispatch = useDispatch();
    const [isMoving, setIsMoving] = useState(false);
    const onDragStart = (event) => {
        const sprite = event.currentTarget;
        sprite.alpha = 0.5;
        sprite.data = event.data;
        sprite.dragging = true;
        setIsMoving(true);
    };

    const onDragEnd = (event) => {
        const sprite = event.currentTarget;
        sprite.alpha = 1;
        sprite.dragging = false;
        sprite.data = null;
        setIsMoving(false);

        dispatch(changeBackgroundX(move[0]));
        dispatch(changeBackgroundY(move[1]));
    };

    const onDragMove = (event) => {
        const sprite = event.currentTarget;
        if (sprite.dragging) {
            const newPosition = sprite.data.getLocalPosition(sprite.parent);
            // dispatch(changeBackgroundX(Number(newPosition.x)));
            // dispatch(changeBackgroundX(Number(newPosition.y)));
            setMove([Number(newPosition.x), Number(newPosition.y)])
        }
    };

    // @ts-ignore
    return (<>
            {
                mode === 'hand'?
                    isMoving ?

                        <Sprite
                            cursor={'grab'}

                            width={2000}
                            height={background.height}
                            image={background.image}
                            x={move[0]}
                            y={move[1]}
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
                        :
                        <Sprite
                            cursor={'grab'}

                            width={2000}
                            height={background.height}
                            image={background.image}
                            x={background.left}
                            y={background.top}
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

                    :
                    <Sprite
                        cursor={'grab'}

                        width={2000}
                        height={background.height}
                        image={background.image}
                        x={move[0]}
                        y={move[1]}
                        interactive
                        buttonMode
                        anchor={0.5}
                        visible={true}
                        zIndex={150}
                    />
            }
        </>


    );
};

export default Background;
