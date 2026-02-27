import { configureStore } from "@reduxjs/toolkit";
import LoginPageSlice from "@/features/login/sliceLogin";
import DashboardSlice from "@/features/login/dashboard/slicedashboard";
const store = configureStore({
  reducer: {
    loginSlice: LoginPageSlice,
    dashboardSlice: DashboardSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
