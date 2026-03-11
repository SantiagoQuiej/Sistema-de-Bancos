import { createSlice } from "@reduxjs/toolkit";
import type { HistorialSalidaState } from "@/type/historiTypeRetire";
const initialState: HistorialSalidaState = {
  data: [],
};

export const HistoriSliceRetire = createSlice({
  name: "loginpage",
  initialState,
  reducers: {
    addRetire: (state, actions) => {
      state.data.push(actions.payload);
    },
  },
});
export const { addRetire } = HistoriSliceRetire.actions;
export default HistoriSliceRetire.reducer;
