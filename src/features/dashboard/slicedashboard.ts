import type { data } from "@/type/dashboard";
import { createSlice } from "@reduxjs/toolkit";

const initialState: data = {
  data: {
    balance: 2000,
    info: [
      {
        title: "Depositos totales",
        total: 23415,
      },
      {
        title: "Retiros totales",
        total: 10242,
      },
    ],
  },
};

export const DashboardSlice = createSlice({
  name: "loginpage",
  initialState,
  reducers: {
    setRetire: (state, action) => {
      state.data.balance = state.data.balance - action.payload;
    },
  },
});
export const { setRetire } = DashboardSlice.actions;
export default DashboardSlice.reducer;
