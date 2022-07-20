// @ts-ignore
import React, {useState} from 'react';
import styles from '../../styles/object-menu.module.css'
import PixiObjects from "./pixi-objects";
import {ObjectInMenu} from "../types/types";

function Objects({ title, content }) {
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
                        content.map((e)=>
                        <PixiObjects props={e} key={e.id}/>)
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
export default Objects;