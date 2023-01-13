import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity+=action.payload.quantity;
      }
      else{
        state.products.push(action.payload);
      }
    },
    removeItem:(state,action)=>{
    const id=action.payload 
      state.products=state.products.filter(item => item.id !==id)
     
  },
  resetCart:(state)=>{
    state.products=[]
  }

  },
  
});

export const {addToCart,removeItem,resetCart}= cartSlice.actions;

export default cartSlice.reducer;