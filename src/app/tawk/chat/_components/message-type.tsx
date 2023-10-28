"use client";

import MessageTypeLayout from "@components/common/message-type-layout";
import { Message_options } from "@data/data";
import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
  cn,
} from "@nextui-org/react";
import { IChatHistory } from "@type/index";
import NextImage from "next/image";
import { DotsThreeVertical, DownloadSimple } from "phosphor-react";

type TimeLineProps = {
  text: string;
};
function MessageTimeline({ text }: TimeLineProps) {
  return (
    <div className="flex justify-between items-center pb-4">
      <Divider className="w-[40%]" />
      <p className="text-deep-gray font-semibold text-sm">{text}</p>
      <Divider className="w-[40%]" />
    </div>
  );
}

const MediaMessage = ({
  item,
  showMenu,
}: {
  item: IChatHistory;
  showMenu?: boolean;
}) => {
  return (
    <MessageTypeLayout
      showMenu={showMenu}
      incoming={item?.incoming}
      className="space-y-2"
    >
      <Image
        as={NextImage}
        width={250}
        height={180}
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

function ReplyMessage({
  item,
  showMenu,
}: {
  item: IChatHistory;
  showMenu?: boolean;
}) {
  return (
    <MessageTypeLayout
      showMenu={showMenu}
      incoming={item?.incoming}
      className="space-y-2"
    >
      <p className="bg-white p-3 rounded-xl">{item?.message}</p>
      <p className="text-white">{item?.reply}</p>
    </MessageTypeLayout>
  );
}

function LinkMessage({
  item,
  className,
  avatarProps,
  showMenu,
}: {
  item: IChatHistory;
  className?: string;
  avatarProps?: [number, number?];
  showMenu?: boolean;
}) {
  const width = avatarProps && avatarProps?.length > 0 ? avatarProps[0] : 250;
  const height = avatarProps && avatarProps?.length > 1 ? avatarProps[1] : 180;

  return (
    <MessageTypeLayout
      incoming={item?.incoming}
      className={cn("space-y-1 p-0", className)}
      showMenu={showMenu}
    >
      <Image
        as={NextImage}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

function DocumentMessage({
  item,
  className,
  showMessage = true,
  layoutClassName,
  showMenu,
}: {
  item: IChatHistory;
  className?: string;
  showMessage?: boolean;
  layoutClassName?: string;
  showMenu?: boolean;
}) {
  return (
    <MessageTypeLayout
      incoming={item?.incoming}
      className={cn("space-y-2 p-3", layoutClassName)}
      showMenu={showMenu}
    >
      <div
        className={cn(
          "flex justify-between items-center bg-theme-light dark:bg-theme-dark p-3 rounded-xl gap-5 min-w-[265px]",
          className
        )}
      >
        <div className="flex items-center gap-5 flex-1">
          <Image
            as={NextImage}
            width={48}
            height={48}
            className="bg-transparent"
            src={"/assets/images/download.svg"}
            alt={"download icon"}
            radius="md"
          />
          <p className="text-black dark:text-white font-semibold line-clamp-1">
            Abstract.png
          </p>
        </div>
        <div className="w-10 h-10 rounded-md overflow-hidden flex items-center justify-center">
          <Button variant="light" color="primary" radius="md" fullWidth>
            <DownloadSimple size={24} />
          </Button>
        </div>
      </div>
      {showMessage && (
        <p className="text-black dark:text-white">{item?.message}</p>
      )}
    </MessageTypeLayout>
  );
}

function TextMessage({
  item,
  showMenu,
}: {
  item: IChatHistory;
  showMenu?: boolean;
}) {
  return (
    <MessageTypeLayout incoming={item?.incoming} showMenu={showMenu}>
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

const MessageOptions = () => {
  return (
    <Dropdown placement="right-start">
      <DropdownTrigger className="cursor-pointer">
        <DotsThreeVertical size={20} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" variant="flat">
        {Message_options.map((item, index: number) => {
          const isDelete = Message_options.length - 1 === index;
          return (
            <DropdownItem
              key={index}
              className={isDelete ? "text-danger" : ""}
              color={isDelete ? "danger" : "primary"}
            >
              {item.title}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export {
  DocumentMessage,
  LinkMessage,
  MediaMessage,
  MessageOptions,
  MessageTimeline,
  ReplyMessage,
  TextMessage,
};
