import { combineReducers } from "redux";
import cartReducer from "./cart/CartReducer";
import userReducer from "./user/UserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import DirectoryReducer from "./directory/DirectoryReducer";
import ShopReducer from "./shop/ShopReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: DirectoryReducer,
  shop: ShopReducer,
});

export default persistReducer(persistConfig, rootReducer);
