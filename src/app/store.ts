import { configureStore } from "@reduxjs/toolkit";
import LoginPageSlice from "@/features/login/sliceLogin";
import DashboardSlice from "@/features/dashboard/slicedashboard";
import HistoriSliceRetire from "@/features/RetireHistori/SliceHistori";
const store = configureStore({
  reducer: {
    loginSlice: LoginPageSlice,
    dashboardSlice: DashboardSlice,
    historiretireSlice: HistoriSliceRetire,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
