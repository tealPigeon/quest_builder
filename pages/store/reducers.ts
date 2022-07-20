import { createAction, createSlice } from "@reduxjs/toolkit";
import actions from "../components/actions";
import del from "../../public/delete.svg"

const setHandMode = createAction('setHandMode')

const setCursorMode = createAction('setCursorMode')


export const counterSlice = createSlice({
  name: "reducer",
  initialState: {
    mode:'cursor',
    currentObjectId: null,
    objectList: [
    ],
    background: {
      image: null,
      width:0,
      height:0,
      left:null,
      top:null,
      fullwidth:true,
    },
    backgroundImage: null,
  },
  reducers: {
    // setCursorMode: (state) =>{
    //   state.mode = 'cursor'
    // },
    // setHandMode: (state) =>{
    //   state.mode = 'hand';
    //   state.currentObjectId=null;
    // },

    setCurrentObjectId: (state, action) => {
      if(state.objectList.length>action.payload)
        state.currentObjectId = action.payload;
    },
    changeName:(state, action) => {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].name = action.payload;
    },
    makeCopy: (state) => {
      if(state.objectList.length>0)
        state.objectList.push(
            {
              id:state.objectList.length,
              image: state.objectList[state.currentObjectId].image,
              name: state.objectList[state.currentObjectId].name,
              width: state.objectList[state.currentObjectId].width,
              height:state.objectList[state.currentObjectId].height,
              angle:state.objectList[state.currentObjectId].angle,
              left:state.objectList[state.currentObjectId].left,
              top:state.objectList[state.currentObjectId].left,
              visible:state.objectList[state.currentObjectId].visible,
              interactive:state.objectList[state.currentObjectId].interactive,
              buttonMode:state.objectList[state.currentObjectId].buttonMode,
              actionClick:state.objectList[state.currentObjectId].actionClick,
              fullwidth:state.objectList[state.currentObjectId].fullwidth,
              inBack:state.objectList[state.currentObjectId].inBack, // объект улетает в рюкзак
              simpleInfo: state.objectList[state.currentObjectId].simpleInfo, //появляется подсказка
              task:state.objectList[state.currentObjectId].task, //появляется задание
              becomeVisible:state.objectList[state.currentObjectId].becomeVisible, //становится видимым
              becomeUnvisible:state.objectList[state.currentObjectId].becomeUnvisible, //становится невидимым
            });
    },
    addObject: (state, action) => {
      if(action.payload.image !=undefined)
        state.objectList.push(
            {
              id:state.objectList.length,
              image: action.payload.image,
              name: action.payload.name,
              width: action.payload.width,
              height:action.payload.height,
              angle:0,
              left:500,
              top:500,
              visible:true,
              interactive:true,
              buttonMode:true,
              actionClick:false,
              fullwidth:false,
              inBack:false, // объект улетает в рюкзак
              simpleInfo: false, //появляется подсказка
              task:null, //появляется задание
              becomeVisible:false, //становится видимым
              becomeUnvisible:false, //становится невидимым
              info: null,
            });
    },
addText:(state, action) =>{
  if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
    state.objectList[state.currentObjectId].info=action.payload;
},
    changeList:(state, action)=>{
      state.objectList=action.payload;
      // if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        // = copy.map((el,index)=>({...el, id: index}));
        // for (let i = 0; i < state.objectList.length; i += 1)
        // state.objectList[i] ={...state.objectList[i], id: i};
    },
    changeTask:(state, action) => { ///появляется задание
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].task = action.payload;
    },
    changeActionClick: (state, action) => { //действия по клику
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
      {state.objectList[state.currentObjectId].actionClick = action.payload;
      if(action.payload===false)
      {
        state.objectList[state.currentObjectId].inBack = action.payload;
        state.objectList[state.currentObjectId].simpleInfo = action.payload;
          state.objectList[state.currentObjectId].info= null;
          state.objectList[state.currentObjectId].becomeVisible = action.payload;
        state.objectList[state.currentObjectId].becomeUnvisible = action.payload;
        state.objectList[state.currentObjectId].task = action.payload;
      }
      }
    },
    changeObjectFliesInBackpack: (state, action) => {   // объект улетает в рюкзак
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].inBack = action.payload;
    },
    changeAddAHint: (state, action) => { //появляется подсказка
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].simpleInfo = action.payload;
    },
    changeBecomeVisible: (state, action) => { //становится видимым
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].becomeVisible = action.payload;
    },
    changeBecomeUnvisible: (state, action) => { //становится невидимым
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].becomeUnvisible = action.payload;
    },
    deleteObject: (state) => {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList.splice(state.currentObjectId, 1);

      for (let i = 0; i < state.objectList.length; i += 1) {
        state.objectList[i].id = i;
      }
      state.currentObjectId=null;
    },
    changeWidth: (state, action) => {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].width = action.payload;
    },
    changeHeight: (state, action) => {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].height = action.payload;
    },
    changeAngle: (state, action) => {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].angle = action.payload;
    },
    changeX: (state, action) => {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].left = action.payload;
    },
    changeY: (state, action) => {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].top = action.payload;
    },
    changeBackgroundImage:(state, action)=>
    {
      // state.objectList.push(
      //     {
      //       id:0,
      //       image: action.payload,
      //       name:"",
      //       width: 1400,
      //       height:800,
      //       angle:0,
      //       left:0,
      //       top:0,
      //       visible:true,
      //       interactive:true,
      //       buttonMode:true,
      //       fullwidth:false,
      //       inBack:false,
      //       simpleInfo: false,
      //     });
      state.backgroundImage=action.payload.src;
      state.background.image=action.payload.src;
      state.background.width=action.payload.width;
      state.background.left=action.payload.width/2;
      state.background.height=action.payload.height;
      state.background.top=action.payload.height/2;
    },
    changeBackgroundX: (state, action) =>{
      state.background.left=action.payload;
    },

    changeBackgroundY: (state,action) =>{
      state.background.top=action.payload;
    },
    horizontalMirroring:(state)=>
    {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
      {
        let w= -state.objectList[state.currentObjectId].width;
        state.objectList[state.currentObjectId].width = w;
        // let c = state.currentObjectId
        // state.currentObjectId = null
        // state.currentObjectId = c

      }
    },
    verticalMirroring:(state)=>
    {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
      {
        let h = -state.objectList[state.currentObjectId].height
        state.objectList[state.currentObjectId].height = h;
        // let c = state.currentObjectId
        // state.currentObjectId = null
        // state.currentObjectId = c
      }

    },
    changeVisibility:(state)=>
    {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].visible = !state.objectList[state.currentObjectId].visible;
    },
    upObject:(state)=>
    {
      if(state.currentObjectId!=null && state.objectList.length>state.currentObjectId+1) {
        [state.objectList[state.currentObjectId], state.objectList[state.currentObjectId + 1]] = [state.objectList[state.currentObjectId + 1], state.objectList[state.currentObjectId]];
        state.currentObjectId = state.currentObjectId +1;
        for (let i = 0; i < state.objectList.length; i += 1)
          state.objectList[i].id = i;
      }
    },
    downObject:(state)=>
    {
      if(state.currentObjectId!=null && 0<state.currentObjectId)
      {
        [state.objectList[state.currentObjectId], state.objectList[state.currentObjectId - 1]] = [state.objectList[state.currentObjectId - 1], state.objectList[state.currentObjectId]];
        state.currentObjectId = state.currentObjectId - 1;
        for (let i = 0; i < state.objectList.length; i += 1)
          state.objectList[i].id = i;
      }
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(setHandMode, (state) => {
            state.mode = 'hand';
            state.currentObjectId=null;
        })
        .addCase(setCursorMode, (state) => {
          state.mode = 'cursor'
        })
  },
})

export const {
  // setCursorMode,
  // setHandMode,
  changeWidth,
  changeHeight,
  changeAngle,
  changeX,
  changeY,
  changeBackgroundImage,
  setCurrentObjectId,
  addObject,
  horizontalMirroring,
  verticalMirroring,
  changeVisibility,
  deleteObject,
  upObject,
  downObject,
  changeBackgroundX,
  changeBackgroundY,
  changeObjectFliesInBackpack,
  changeAddAHint,
  changeBecomeVisible,
  changeBecomeUnvisible,
  changeActionClick,
  changeTask,
  changeList,
  makeCopy,
  changeName,
  addText
} = counterSlice.actions;

export default counterSlice.reducer;