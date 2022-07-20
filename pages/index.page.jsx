import React, {useEffect, useState} from 'react'
import { useSelector} from "react-redux";
import del from '../public/delete.png'
import Workspace from "./components/workspace";
import Header from "./components/header";
import LeftMenu from "./components/left-menu";
import RightMenu from "./components/right-menu";
import Background from "./components/background";
import Image from "next/image";
import {Sprite,Stage} from "@inlet/react-pixi";
import * as PIXI from "pixi.js"
const Home = () => {
    const {backgroundImage} = useSelector((state) =>  state.counter.present);

    function useWindowSize() {

        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            if (typeof window !== 'undefined') {
                function handleResize() {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                }
                window.addEventListener("resize", handleResize);
                handleResize();
                return () => window.removeEventListener("resize", handleResize);
            }
        }, []);
        return windowSize;
    }

    const size = useWindowSize();
    let width = size.width-400;
    let height = size.height-100;

    return (
        <div className="App">

            {/*<Image src={require('../public/delete.png')}/>*/}
            <Header/>
            <div className='box'>
                <LeftMenu width={width} height={height} />
                <div className='main-content'>
                    {
                        backgroundImage === null ? <div className='main-text'>Выберите фон, который хотите использовать</div> : <Workspace width={width}  height={height}/>
                    }
                </div>
                <RightMenu />
            </div>
        </div>
    )
}

export default Home
