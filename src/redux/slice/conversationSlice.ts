import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IChatType } from "@type/index";

interface InitialStateProps {
  directChat: any;
  groupChat: any;
}

const initialState: InitialStateProps = {
  directChat: {
    conversation: [],
  },
  groupChat: {},
};

const conversationSlice = createSlice({
  initialState,
  name: "conversation",
  reducers: {
    set: (state, action: PayloadAction<any>) => {
      state.directChat = action.payload;
    },
  },
});

export const {} = conversationSlice.actions;
export default conversationSlice.reducer;
