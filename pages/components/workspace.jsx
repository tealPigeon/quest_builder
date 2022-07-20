import React, { useState, useEffect } from "react";
import { Stage, Container, Sprite} from "@inlet/react-pixi";
import store from "../store"
import { Provider } from 'react-redux';
import { useSelector } from "react-redux";
import PixiObject from "./pixi-object"
import Background from "./background";

// @ts-ignore
const Workspace = ({width, height}) => {
    const {objectList, backgroundImage} = useSelector((state) => state.counter.present);

    return (
        <Stage width={width} height={868} options={{ backgroundColor: 0xFFFFFF }}>
            <Container width={width} height={868} >
                <Provider store={store}>
                {
                    backgroundImage != null ? <Background />:null
                }
                </Provider>
                <Provider store={store}>
                    {objectList.map((element)=><PixiObject props={element} key={element.id}/>) }
                </Provider>
            </Container>
        </Stage> );
};

export default Workspace;
