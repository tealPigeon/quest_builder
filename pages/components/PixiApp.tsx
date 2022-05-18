import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Stage, Container, Sprite, useTick, Text } from "@inlet/react-pixi";
import { settings, SCALE_MODES, Texture} from "pixi.js";
import PIXI from "pixi.js";
import store from "../store"
import { Provider } from 'react-redux';

import { useDispatch, useSelector } from "react-redux";
import PixiObject from "./PixiObject"
import {listOfObject} from "../mocks/list-of-objects-in-menu";
import ObjectMenu from "./object-menu/object-menu";

const PixiApp = () => {
    const {objectList, backgroundImage} = useSelector((state) => state.counter);
    // console.log(objectList)
    // const src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";
    return (
        // <Stage width={500} height={500}>
        <Stage width={1500} height={870} options={{ backgroundColor: 0xFFFFFF }}>
            <Container width={1500} height={870} >
                <Sprite
                    image={backgroundImage}
                    width={1500} height={870}
                    x={0}
                    y={0}
                />
                <Provider store={store}>
                    {objectList.map((element)=><PixiObject props={element}/>) }
                    {/*<PixiObject state={10}/>*/}
                    {/*<PixiObject state={10}/>*/}
                    {/*<PixiObject state={width}/>*/}
                    {/*<PixiObject state={10}/>*/}
                    {/*<PixiObject state={10}/>*/}
                    {/*<PixiObject state={width}/>*/}
                    {/*<PixiObject state={10}/>*/}
                    {/*<PixiObject state={10}/>*/}
                </Provider>
            </Container>
        </Stage> );
};

export default PixiApp;
