// @ts-ignore
import React, {useState} from 'react';
import styles from './object-menu.module.css'
import PixiObjects from "./pixi-objects";
import {ObjectInMenu} from "../../types/types";
// import dynamic from "next/dynamic";

// const PixiApp = dynamic(() => import("../components/PixiApp"), { ssr: false });

type CardProps = {
    title: String;
    content: ObjectInMenu[];
}

function ObjectMenu({ title, content }:CardProps) : JSX.Element {
    const [isActive, setIsActive] = useState(false);
    // console.log(content)
    return (
        isActive ?
            <div>
                <div className={ styles.active_button} onClick={() => setIsActive(!isActive)}>
                    <div >{title}</div>
                    <div>
                        <img src={'arrow_up.svg'} width={18} height={10} alt="" />
                    </div>

                </div>
                <div className={styles.answer}>
                    {
                        // console.log(content);
                        content.map((e)=>
                        <PixiObjects props={e}/>)
                    }
                </div>
                </div>
            :
            <div>
                <div className={ styles.button} onClick={() => setIsActive(!isActive)}>
                    <div >{title}</div>
                    <div>
                        <img src={'arrow_down.svg'} width={18} height={10} alt="" /></div>
                </div>
            </div>
    );
}
export default ObjectMenu;