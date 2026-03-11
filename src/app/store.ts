import { configureStore } from "@reduxjs/toolkit";
import LoginPageSlice from "@/features/login/sliceLogin";
import DashboardSlice from "@/features/dashboard/slicedashboard";
import HistoriSliceRetire from "@/features/RetireHistori/SliceHistori";
import SliceHistoryDeposite from "@/features/DepositeHistory/SliceHistoryDeposite";
const store = configureStore({
  reducer: {
    loginSlice: LoginPageSlice,
    dashboardSlice: DashboardSlice,
    historiretireSlice: HistoriSliceRetire,
    historiDepositeSlice: SliceHistoryDeposite,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
