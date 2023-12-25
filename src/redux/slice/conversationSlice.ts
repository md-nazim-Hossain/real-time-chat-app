import { faker } from "@faker-js/faker";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IChatHistory, IChatList, IUser } from "@type/index";
const userId =
  typeof window !== "undefined" && window.localStorage.getItem("userId");
interface InitialStateProps {
  directChat: {
    conversations: IChatList[];
    currentConversation: any;
    currentMessages: IChatHistory[];
  };
  groupChat: any;
}

const initialState: InitialStateProps = {
  directChat: {
    conversations: [],
    currentConversation: null,
    currentMessages: [],
  },
  groupChat: {},
};

const conversationSlice = createSlice({
  initialState,
  name: "conversation",
  reducers: {
    setConversation: (
      state,
      action: PayloadAction<{ conversations: IUser[] }>
    ) => {
      if (!action.payload?.conversations?.length) {
        state.directChat.conversations = [];
      } else {
        const list: IChatList[] = action.payload.conversations.map(
          (el: any) => {
            const user = el.participants.find(
              (elm: IUser) => elm._id.toString() !== userId
            );
            return {
              id: el._id,
              userId: user?._id,
              name: `${user?.firstName} ${user?.lastName}`,
              online: user?.status === "Online",
              img: `${user?.avatar ?? faker.image.avatar()}`,
              msg: el?.messages.length
                ? el?.messages?.slice(-1)[0]?.text
                : "Hello World",
              time: "9:36",
              unread: 0,
              pinned: false,
              about: user?.about,
            };
          }
        );
        state.directChat.conversations = list;
      }
    },
    updateDirectConversation(state, action) {
      const thisConversation = action.payload.conversation;
      state.directChat.conversations = state.directChat.conversations.map(
        (el) => {
          if (el?.id !== thisConversation._id) {
            return el;
          } else {
            const user = thisConversation.participants.find(
              (elm: IUser) => elm._id.toString() === userId
            );
            return {
              id: thisConversation._id,
              userId: user?._id,
              name: `${user?.firstName} ${user?.lastName}`,
              online: user?.status === "Online",
              img: `${faker.image.avatar()}`,
              msg: `${faker.music.songName()}`,
              time: "9:36",
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      const thisConversation = action.payload.conversation;
      const user = thisConversation.participants.find(
        (elm: any) => elm._id.toString() !== userId
      );
      state.directChat.conversations = state.directChat.conversations.filter(
        (el: IChatList) => el?.id !== thisConversation._id
      );
      state.directChat.conversations.push({
        id: thisConversation._id,
        userId: user?._id,
        name: `${user?.firstName} ${user?.lastName}`,
        online: user?.status === "Online",
        img: `${faker.image.avatar()}`,
        msg: `${faker.music.songName()}`,
        time: "9:36",
        unread: 0,
        pinned: false,
      });
    },
    setCurrentConversation(state, action) {
      state.directChat.currentConversation = action.payload;
    },
    setCurrentMessages(state, action: PayloadAction<{ messages: any[] }>) {
      const messages = action.payload.messages;
      const formattedMessages = messages.map((el: any) => ({
        id: el._id,
        type: "msg",
        subtype: el.type,
        message: el.text,
        incoming: el.to === userId,
        outgoing: el.from === userId,
      }));
      state.directChat.currentMessages = formattedMessages;
    },
    addDirectMessage(state, action: PayloadAction<{ message: any }>) {
      state.directChat.currentMessages.push(action.payload.message);
    },
  },
});

export const {
  addDirectConversation,
  setConversation,
  setCurrentConversation,
  setCurrentMessages,
  updateDirectConversation,
  addDirectMessage,
} = conversationSlice.actions;
export default conversationSlice.reducer;
