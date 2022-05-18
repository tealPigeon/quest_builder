import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "reducer",
  initialState: {
    currentObjectId: null,
    objectList: [
    ],
    backgroundImage: null,
  },
  reducers: {
    setCurrentObjectId: (state, action) => {
      if(state.objectList.length>action.payload)
        state.currentObjectId = action.payload;
    },
    addObject: (state, action) => {
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
        fullwidth:false,
        inBack:false,
        simpleInfo: false,
      });
    },
    deleteObject: (state, action) => {
      if(state.objectList.length>state.currentObjectId)
        state.objectList.splice(state.currentObjectId, 1);

      for (let i = 0; i < state.objectList.length; i += 1) {
        state.objectList[i].id = i;
      }
      state.currentObjectId=null;
    },
    changeWidth: (state, action) => {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].width = action.payload;
    },
    changeHeight: (state, action) => {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].height = action.payload;
    },
    changeAngle: (state, action) => {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].angle = action.payload;
    },
    changeX: (state, action) => {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].left = action.payload;
    },
    changeY: (state, action) => {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].top = action.payload;
    },
    changeBackgroundImage:(state, action)=>
    {
      state.backgroundImage=action.payload;
    },
    horizontalMirroring:(state)=>
    {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].width = -state.objectList[state.currentObjectId].width;
    },
    verticalMirroring:(state)=>
    {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].height *= -1;
    },
    changeVisibility:(state)=>
    {
      if(state.objectList.length>state.currentObjectId)
        state.objectList[state.currentObjectId].visible = !state.objectList[state.currentObjectId].visible;
    },
    upObject:(state)=>
    {
      if(state.objectList.length>state.currentObjectId+1) {
        [state.objectList[state.currentObjectId], state.objectList[state.currentObjectId + 1]] = [state.objectList[state.currentObjectId + 1], state.objectList[state.currentObjectId]];
        state.currentObjectId = state.currentObjectId +1;
        for (let i = 0; i < state.objectList.length; i += 1)
          state.objectList[i].id = i;
      }
      },
    downObject:(state)=>
    {
      if(0<state.currentObjectId)
      {
        [state.objectList[state.currentObjectId], state.objectList[state.currentObjectId - 1]] = [state.objectList[state.currentObjectId - 1], state.objectList[state.currentObjectId]];
        state.currentObjectId = state.currentObjectId - 1;
        for (let i = 0; i < state.objectList.length; i += 1)
          state.objectList[i].id = i;
      }
      },
  }
});

// Action creators are generated for each case reducer function
export const {
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
downObject} = counterSlice.actions;

export default counterSlice.reducer;
