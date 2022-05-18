export type ObjectInMenu = {
        url: string,
        name:string,
        width: number,
        height: number,
};

export type MenuItem ={
    id:number,
    title: string,
    content: ObjectInMenu[],
};

export type BackgroundImage = {
    id:number,
    image: string
}

export type ObjectOnScreen = {
    name: string,
    width: number,
    height: number,
    left: number,
    top: number,
    angle:number, //у новикова нет такого параметра
    visible: boolean,
    interactive: boolean,
    buttonMode:  boolean,
    fullwidth:  boolean,
    img: string,
    inBack: boolean,
    simpleInfo: boolean,
    info: {ru:string, uk:string, en: string},
}

export type ObjectsInMenu= MenuItem[];

export type BackgroundImages = BackgroundImage[];

export type ObjectsOnScreen= ObjectOnScreen[];

