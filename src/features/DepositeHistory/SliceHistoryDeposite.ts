import { createSlice } from "@reduxjs/toolkit";
import type { HistorialDepositeState } from "@/type/historyTypeDeposite";
const initialState: HistorialDepositeState = {
  data: [],
};

export const SliceHistoryDeposite = createSlice({
  name: "loginpage",
  initialState,
  reducers: {
    addDeposite: (state, actions) => {
      state.data.push(actions.payload);
    },
  },
});
export const { addDeposite } = SliceHistoryDeposite.actions;
export default SliceHistoryDeposite.reducer;
