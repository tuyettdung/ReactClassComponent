//rxreducer
// const initialState = {
//   gioHang: [
//     {
//       id: "1",
//       name: "nike",
//       price: 1000,
//       quantity: 1,
//       image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
//     },
//   ],
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":{
//         let newState = {...state};

//         const item = {...action.payload, quantity:1};
//         let gioHangState = [...newState.gioHang];

//         let index = gioHangState.findIndex(sp => sp.id === item.id);
//         if(index !== -1){
//             let spGioHang = {...gioHangState[index]};
//             spGioHang.quantity += 1;
//             gioHangState[index] = spGioHang;
//         } else {
//             gioHangState.push(item);
//         }
       
//         newState.gioHang = gioHangState;
//         return newState;
//       };

//     default:
//       return state;
//   }
// };


//rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gioHang: [
            {
              id: "1",
              name: "nike",
              price: 1000,
              quantity: 1,
              image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
            },
          ]
}

const cartReducer = createSlice({
  name: 'cartReducer', //name của slice dùng để tạo ra action.type
  initialState,
  reducers: {
    addItemAction: (state,action) => {
        //dispatch đúng tên đúng type sẽ nhảy vào hàm này
        let item = {...action.payload,quantity:1};
        let index = state.gioHang.findIndex(sp => sp.id === item.id);
        if(index !== -1){
            let newItem = {...state.gioHang[index]};
            newItem.quantity += 1;
            state.gioHang[index] = newItem;
        } else {
            state.gioHang.push(item);
        }

    },
    delItemAction: (state,action) => {
        // console.log(action)
        let indexDel = state.gioHang.findIndex(sp => sp.id == action.payload);

        if (indexDel !== -1){
            state.gioHang.splice(indexDel,1);
        }
    },
    changeQuantity: (state,action) => {
        //lấy ra payload
        const itemQuantity = action.payload;
        //tìm obj cần tăng giảm số lượng trong trong giỏ
        let item = state.gioHang.find(sp => sp.id == itemQuantity.id);
        if(item){
            item.quantity += itemQuantity.quantity;
            if(item.quantity < 1 ){
                if(window.confirm('bạn có muốn xóa không?')){
                    state.gioHang = state.gioHang.filter(sp => sp.id !== itemQuantity.id)
                } else{
                    item.quantity -= itemQuantity.quantity
                };

            }
        }




    }
  }
});

export const {addItemAction,delItemAction,changeQuantity} = cartReducer.actions

export default cartReducer.reducer

/**
   addItemAction(payload);

 
 */