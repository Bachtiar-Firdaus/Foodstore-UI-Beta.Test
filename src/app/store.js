//import redux
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
//import redux-thunk middleware
import thunk from "redux-thunk";
//composer enhancer menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//gabung reducer
const rootReducers = combineReducers({});
//buat store, dan gunakan composerEnchancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);
export default store;
