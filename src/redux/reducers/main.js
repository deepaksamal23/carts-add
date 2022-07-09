import { combineReducers } from "redux";
import  cartreducer  from "./reducer";


const rootred = combineReducers({
      cartreducer: cartreducer,
});


export default rootred;