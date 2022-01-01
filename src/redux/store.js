import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import RootReducer from "./RootReducer";
import { persistStore } from "redux-persist";

const middlewares = [logger];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);