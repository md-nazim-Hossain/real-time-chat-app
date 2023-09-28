"use client";

import MessageTypeLayout from "@components/common/message-type-layout";
import { Avatar, Button, Divider, Link, cn } from "@nextui-org/react";
import { IChatHistory } from "@type/index";
import { DownloadSimple } from "phosphor-react";

type TimeLineProps = {
  text: string;
};
function MessageTimeline({ text }: TimeLineProps) {
  return (
    <div className="flex justify-between items-center">
      <Divider className="w-[45%]" />
      <p className="text-deep-gray font-semibold text-sm">{text}</p>
      <Divider className="w-[45%]" />
    </div>
  );
}

function TextMessage({ item }: { item: IChatHistory }) {
  return (
    <MessageTypeLayout incoming={item?.incoming}>
      <p
        className={cn(
          "font-semibold text-sm",
          item?.incoming ? "text-black dark:text-white" : "text-white"
        )}
      >
        {item?.message}
      </p>
    </MessageTypeLayout>
  );
}

const MediaMessage = ({ item }: { item: IChatHistory }) => {
  return (
    <MessageTypeLayout incoming={item?.incoming} className="space-y-2">
      <Avatar
        className="h-[180px] w-[250px]"
        src={item?.img}
        alt={item.message}
        radius="md"
      />
      <p
        className={cn(
          "font-semibold text-sm",
          item?.incoming ? "text-black dark:text-white" : "text-white"
        )}
      >
        {item?.message}
      </p>
    </MessageTypeLayout>
  );
};

function ReplyMessage({ item }: { item: IChatHistory }) {
  return (
    <MessageTypeLayout incoming={item?.incoming} className="space-y-2">
      <p className="bg-white p-3 rounded-xl">{item?.message}</p>
      <p className="text-white">{item?.reply}</p>
    </MessageTypeLayout>
  );
}

function LinkMessage({ item }: { item: IChatHistory }) {
  return (
    <MessageTypeLayout
      incoming={item?.incoming}
      className="space-y-1 p-0 !bg-transparent dark:!bg-dark-light"
    >
      <Avatar
        className="h-[180px] w-[250px]"
        src={item?.preview}
        alt={item.message}
        radius="md"
      />
      <div className="space-y-1 text-center p-3">
        <p className="text-black dark:text-white font-semibold">
          Creating Chat APP
        </p>
        <Link href="https://www.github.com">www.github.com</Link>
      </div>
    </MessageTypeLayout>
  );
}

function DocumentMessage({ item }: { item: IChatHistory }) {
  return (
    <MessageTypeLayout incoming={item?.incoming} className="space-y-2 p-3 ">
      <div className="flex justify-between items-center bg-theme-light dark:bg-theme-dark p-3 rounded-xl gap-5 min-w-[265px]">
        <div className="flex items-center gap-5">
          <Avatar
            className="h-12 w-12 bg-transparent"
            src={"/assets/images/download.svg"}
            alt={"download icon"}
            radius="md"
          />
          <p className="text-black dark:text-white font-semibold">
            Abstract.png
          </p>
        </div>
        <div className="w-10 h-10 rounded-md overflow-hidden flex items-center justify-center">
          <Button variant="light" color="primary" radius="md" fullWidth>
            <DownloadSimple size={24} />
          </Button>
        </div>
      </div>
      <p className="text-black dark:text-white">{item?.message}</p>
    </MessageTypeLayout>
  );
}

export {
  DocumentMessage,
  LinkMessage,
  MediaMessage,
  MessageTimeline,
  ReplyMessage,
  TextMessage,
};
