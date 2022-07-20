import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers"
import undoable, {excludeAction} from 'redux-undo';


export default configureStore({
  reducer: {
    counter: undoable(counterReducer, { filter: excludeAction(['setHandMode','setCursorMode']) })
  }
});
