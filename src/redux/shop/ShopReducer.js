import SHOP_DATA from "./ShopData";

const initialState = {
  collections: SHOP_DATA,
};

const ShopReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state;
  }
};

export default ShopReducer;
