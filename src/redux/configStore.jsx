import { configureStore } from "@reduxjs/toolkit";
import { userRegisterReducer } from "./reducers/userRegisterReducer";
import  listUserReducer  from "./reducers/listUserReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    likeReducer: (state = 10, action) => {
      if (action.type === "increaseLike") {
        state += action.payload;
      }
      return state;
    },
    imgReducer: (state = "./img/black-car.jpg", action) => {
      switch (action.type) {
        case "changeIMG":
          {
            state = action.payload;
          }
          break;
      }
      return state;
    },
    fontSizeReducer: (state = 9,action) => {
        if(action.type === 'CHANGE_FONTSIZE'){
            state += action.payload
        }
        return state;
    },
    userRegisterReducer: userRegisterReducer,
    listUserReducer:listUserReducer,
    cartReducer: cartReducer,
    




  },
});
