import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateProps {
  chatSidebar: {
    openChatContact: boolean;
    type: string;
  };
}

const initialState: InitialStateProps = {
  chatSidebar: {
    openChatContact: false,
    type: "CONTACT",
  },
};

const chatContactSlice = createSlice({
  initialState,
  name: "chatSidebarContact",
  reducers: {
    openSidebar: (state) => {
      state.chatSidebar.openChatContact = true;
    },
    closeSidebar: (state) => {
      state.chatSidebar.openChatContact = false;
    },
    toggleSidebar: (state) => {
      state.chatSidebar.openChatContact = !state.chatSidebar.openChatContact;
    },
    updateSidebarType: (state, action: PayloadAction<string>) => {
      state.chatSidebar.type = action.payload;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar, updateSidebarType } =
  chatContactSlice.actions;
export default chatContactSlice.reducer;
