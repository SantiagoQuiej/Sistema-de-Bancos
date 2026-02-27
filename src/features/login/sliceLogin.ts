import { createSlice } from "@reduxjs/toolkit";

interface State {
  email: string;
  password: string;
}
const initialState: State = {
  email: "",
  password: "",
};

export const LoginPageSlice = createSlice({
  name: "loginpage",
  initialState,
  reducers: {},
});
export default LoginPageSlice.reducer;
