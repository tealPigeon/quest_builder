// @ts-ignore
import React, {useState} from 'react';
import styles from './accordion.module.css'
// import dynamic from "next/dynamic";

// const PixiApp = dynamic(() => import("../components/PixiApp"), { ssr: false });

type CardProps = {
    title: String;
    content: String;
}

function Accordion({ title, content }:CardProps) : JSX.Element {
    const [isActive, setIsActive] = useState(false);
    return (
            isActive ?
                <div>
                <div className={ styles.active_button} onClick={() => setIsActive(!isActive)}>
                    <div >{title}</div>
                    <div>
                        <img src={'arrow_up.svg'} width={18} height={10} alt="" />
                    </div>

                </div><div className={ styles.answer}>
                    {
                        <>
                            {/*<PixiApp/>*/}
                        <img src={'book.png'} alt="" />
                        <img src={'book1.png'} alt="" />
                        <img src={'book2.png'} alt="" />
                        </>
                    }
                </div></div>:
                <div>
                    <div className={ styles.button} onClick={() => setIsActive(!isActive)}>
                        <div >{title}</div>
                        <div>
                            <img src={'arrow_down.svg'} width={18} height={10} alt="" /></div>
                    </div>
                </div>
    );
}
export default Accordion;