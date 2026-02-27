import { configureStore } from "@reduxjs/toolkit";
import LoginPageSlice from "@/features/login/sliceLogin";
const store = configureStore({
  reducer: {
    loginSlice: LoginPageSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
