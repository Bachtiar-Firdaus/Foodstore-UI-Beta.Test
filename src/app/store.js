//import redux
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
//import redux-thunk middleware
import thunk from "redux-thunk";

import authReducer from "../features/Auth/reducer";

import productReducer from "../features/Products/reducer";
//composer enhancer menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//gabung reducer
const rootReducers = combineReducers({
  auth: authReducer,
  //product reducer sebagai _state_'products'
  products: productReducer,
});
//buat store, dan gunakan composerEnchancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);
export default store;
