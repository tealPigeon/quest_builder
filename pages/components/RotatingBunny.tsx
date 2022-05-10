import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Stage, Container, Sprite, useTick } from "@inlet/react-pixi";
import { settings, SCALE_MODES } from "pixi.js";
import PIXI from "pixi.js";
import {incrementByAmount, incrementByAmountHeight, incrementByAmountAngle, incrementByAmountX, incrementByAmountY} from "../store/reducers";
import {useDispatch, useSelector} from "react-redux";


interface Draggable extends PIXI.DisplayObject {
  data: PIXI.InteractionData | null;
  dragging: boolean;
}

// settings.SCALE_MODE = SCALE_MODES.NEAREST;

function RotatingBunny({state}:Number)
 {
const {x,y}= useSelector((state) => state.counter);
const { width } = useSelector((state) => state.counter);
const { height } = useSelector((state) => state.counter);
const { angle } = useSelector((state) => state.counter);
   const dispatch = useDispatch();
  // const [rotation, setRotation] = useState(0);
  const scale = { x: Number(width), y: Number(height)};
  // const [scale, setScale]= useState({ x: Number(state), y: Number(state)});
  // const [position,setPosition]= useState({ x: x, y: y });
   const position= { x: x, y: y };
//   console.log(count);
//   useTick((delta) => delta && setRotation(rotation + 0.1 * delta));
  // let scale = { x: 1, y: 1 };

  // setScale({ x: Number(count), y: Number(count)});
  const onDragStart = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    sprite.alpha = 0.5;
    sprite.data = event.data;
    sprite.dragging = true;
  };

  const onDragEnd = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    sprite.alpha = 1;
    sprite.dragging = false;
    sprite.data = null;
  };

  const onDragMove = (event: PIXI.InteractionEvent) => {
    const sprite = event.currentTarget as Draggable;
    if (sprite.dragging) {
      const newPosition = sprite.data!.getLocalPosition(sprite.parent);
      dispatch(incrementByAmountX(Number(newPosition.x)));
      dispatch(incrementByAmountY(Number(newPosition.y)));


      // setPosition({x:newPosition.x, y:newPosition.y});
      // sprite.x = newPosition.x;
      // sprite.y = newPosition.y;
      console.log("move");
    }
  };
// console.log(state);
  return (
    <Sprite
      image="https://images.gameinfo.io/pokemon/256/p15f306.png"
      x={position.x}
      y={position.y}
      anchor={0.5}
      angle={angle}
      height={scale.y}
      width={scale.x}
      // scale={scale}
      interactive
      buttonMode
      pointerdown={onDragStart}
      pointerup={onDragEnd}
      pointerupoutside={onDragEnd}
      pointermove={onDragMove}
      visible={true}
    />
  );
};

export default RotatingBunny;