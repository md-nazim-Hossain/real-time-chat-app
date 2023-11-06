import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IChatType } from "@type/index";

type ChatSidebarType = "CONTACT" | "STARRED" | "SHARED";
interface InitialStateProps {
  chatSidebar: {
    openChatContact: boolean;
    type: ChatSidebarType;
  };

  users: any[];
  friends: any[];
  friendRequests: any[];
  chatType: IChatType;
  roomId: string | null;
}

const initialState: InitialStateProps = {
  chatSidebar: {
    openChatContact: false,
    type: "CONTACT",
  },
  friendRequests: [],
  friends: [],
  users: [],
  chatType: null,
  roomId: null,
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
    updateSidebarType: (state, action: PayloadAction<ChatSidebarType>) => {
      state.chatSidebar.type = action.payload;
    },

    updateUsers: (state, action: PayloadAction<{ users: any[] }>) => {
      state.users = action.payload.users;
    },
    updateFriends: (state, action: PayloadAction<{ friends: any[] }>) => {
      state.users = action.payload.friends;
    },
    updateFriendRequests: (
      state,
      action: PayloadAction<{ friendRequests: any[] }>
    ) => {
      state.users = action.payload.friendRequests;
    },

    selectConversation: (state, action) => {
      state.chatType = action.payload.chatType ?? "individual";
      state.roomId = action.payload.roomId;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  toggleSidebar,
  updateSidebarType,
  updateFriendRequests,
  updateFriends,
  updateUsers,
} = chatContactSlice.actions;
export default chatContactSlice.reducer;
