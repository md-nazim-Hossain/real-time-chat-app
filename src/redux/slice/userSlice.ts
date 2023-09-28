import { IProfile, IUser } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  user: IUser | null;
  profile: IProfile | null;
}

const initialState: InitialStateProps = {
  user: null,
  profile: null,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    setUser: (state, actions: PayloadAction<IUser | null>) => {
      state.user = actions.payload;
    },
    setUserProfile: (state, actions: PayloadAction<IProfile | null>) => {
      state.profile = actions.payload;
    },
  },
});

export const { setUser, setUserProfile } = userSlice.actions;
export default userSlice.reducer;
