"use client";

import { MutableRefObject, useEffect, useRef } from "react";
import Conversations from "../_components/conversations";
import { useAppSelector } from "@redux/store";

function ConversationsPAge() {
  const messageListRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const { currentMessages } = useAppSelector(
    (state) => state.conversation.directChat
  );

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [currentMessages]);
  return <Conversations ref={messageListRef} />;
}

export default ConversationsPAge;
