"use client";

import { ChatList } from "@data/data";
import { useAppSelector } from "@redux/store";
import { IChatList } from "@type/index";
import { useParams } from "next/navigation";
import ChatFooter from "../_components/chat-footer";
import ChatNavbar from "../_components/chat-navbar";
import ChatRightSidebar from "../_components/right-sidebar/chat-right-sidebar";
import Contact from "../_components/right-sidebar/contact";
import SharedMessages from "../_components/right-sidebar/shared-messages";
import StarredMessages from "../_components/right-sidebar/starred-messages";

function ChatLayout({ children }: { children: React.ReactNode }) {
  const {
    chatSidebar: { type },
  } = useAppSelector((state) => state.chatContactSlice);
  const { id } = useParams();
  const chat = ChatList.find((item: IChatList) => item.id === +id);
  return (
    <div className="flex relative h-screen w-full">
      <div className="flex-1">
        <ChatNavbar chat={chat!} />
        <div className="h-[calc(100vh_-_140px)]">{children}</div>
        <ChatFooter />
      </div>

      <ChatRightSidebar>
        {/* Contact components abong chatAbatar e o ata faker js er name p tag e use korar jonno hoy er p tag er jonno  hydration error khay pore slve korte hobe */}
        {type === "CONTACT" && <Contact chat={chat!} />}
        {type === "STARRED" && <StarredMessages />}
        {type === "SHARED" && <SharedMessages />}
      </ChatRightSidebar>
    </div>
  );
}

export default ChatLayout;
