import { Stage, Container, Sprite, useTick } from "@inlet/react-pixi";
import { settings, SCALE_MODES } from "pixi.js";
import PIXI from "pixi.js";
import {changeX, changeY,setCurrentObjectId} from "../store/reducers";
import {useDispatch, useSelector} from "react-redux";


interface Draggable extends PIXI.DisplayObject {
    data: PIXI.InteractionData | null;
    dragging: boolean;
}


function PixiObject({props})
{
    const {objectList}= useSelector((state) => state.counter);
    // console.log({props})
    const dispatch = useDispatch();
    const scale = { x: props.width, y: props.height};

    const position= { x: Number(props.left), y: Number(props.top) };

    const onDragStart = (event: PIXI.InteractionEvent) => {
        const sprite = event.currentTarget as Draggable;
        sprite.alpha = 0.5;
        sprite.data = event.data;
        sprite.dragging = true;
        dispatch(setCurrentObjectId(props.id));
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
            // console.log(sprite.data!.global);
            const newPosition = sprite.data!.getLocalPosition(sprite.parent);
            dispatch(changeX(Number(newPosition.x)));
            dispatch(changeY(Number(newPosition.y)));
        }
    };

    return (
            <Sprite
                image={props.image}
                x={position.x}
                y={position.y}
                anchor={0.5}
                angle={props.angle}
                height={scale.y}
                width={scale.x}
                interactive
                buttonMode
                pointerdown={onDragStart}
                pointerup={onDragEnd}
                pointerupoutside={onDragEnd}
                pointermove={onDragMove}
                visible={props.visible}
            />

    );
};

export default PixiObject;