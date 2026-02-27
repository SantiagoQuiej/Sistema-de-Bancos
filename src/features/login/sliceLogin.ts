import { createSlice } from "@reduxjs/toolkit";
import type { State } from "@/type/login";
const initialState: State = {
  data: { email: "lucasquiej@gmail.com", password: "Realiximch123" },
  loginstate: false,
};

export const LoginPageSlice = createSlice({
  name: "loginpage",
  initialState,
  reducers: {
    setlogin: (state) => {
      state.loginstate = !state.loginstate;
    },
  },
});
export const { setlogin } =LoginPageSlice.actions
export default LoginPageSlice.reducer;
