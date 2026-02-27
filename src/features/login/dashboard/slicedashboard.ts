import type { data } from "@/type/dashboard";
import { createSlice } from "@reduxjs/toolkit";

const initialState: data = {
 data:{
    balance:12000,
  info:[{
    title:'Depositos totales',
    total:23415
  },{
    title:'Retiros totales',
    total:10242
  }]
}
};

export const DashboardSlice = createSlice({
  name: "loginpage",
  initialState,
  reducers: {

  },
});
// export const { setlogin } =LoginPageSlice.actions
export default DashboardSlice.reducer;
