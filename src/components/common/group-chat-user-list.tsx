"use client";

import UserChat from "@components/common/user-chat";
import { ChatList } from "@data/data";
import { Button, Divider, Input } from "@nextui-org/react";
import { IChatList } from "@type/index";
import { CircleDashed, MagnifyingGlass } from "phosphor-react";

type Props = {
  title: string;
  children: React.ReactNode;
  isGroup?: boolean;
};
function GroupChatUserList({ title, children, isGroup = false }: Props) {
  return (
    <div className="relative w-[340px] h-full dark:bg-dark-light bg-light  shadow-sidebar">
      <div className="p-5 pb-0">
        <div className="flex items-center justify-between">
          <h1>{title}</h1>
          {!isGroup && (
            <Button
              size="lg"
              variant="light"
              isIconOnly
              aria-label={"circle dashed"}
            >
              <CircleDashed color="#676667" size={"32px"} />
            </Button>
          )}
        </div>
        <div className="pt-8 pb-9">
          <Input
            isClearable
            radius="full"
            classNames={{
              input: [
                "bg-transparent",
                "text-secondary",
                "placeholder:text-secondary",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "dark:bg-theme-dark bg-theme-light h-[50px] text-secondary px-2",
                "focus-within:!bg-theme-light dark:focus-within:!bg-theme-dark",
                "hover:!bg-theme-light dark:hover:!bg-theme-dark",
                "!cursor-text",
              ],
            }}
            placeholder="Type to search..."
            startContent={
              <div className="w-12 flex justify-center items-end overflow-hidden rounded-md">
                <Button
                  size="md"
                  variant="light"
                  color="primary"
                  className="hover:!bg-transparent"
                  fullWidth
                >
                  <MagnifyingGlass className="text-secondary" size={24} />
                </Button>
              </div>
            }
          />
        </div>

        {children}
        <Divider className="mt-4" />
      </div>
      <div className="w-full max-h-[calc(100vh_-_243px)] overflow-y-auto scroll pb-5">
        <div className="p-5">
          <p className="font-bold pl-3 mb-6 pt-4">Pinned</p>
          <div className="space-y-5">
            {ChatList.filter((chat) => chat.pinned).map(
              (chat: IChatList, index: number) => {
                return <UserChat chat={chat} key={index} />;
              }
            )}
          </div>

          <p className="font-bold pt-7 pb-5">All {title}</p>
          <div className="space-y-5">
            {ChatList.filter((chat) => !chat.pinned).map(
              (chat: IChatList, index: number) => {
                return <UserChat chat={chat} key={index} />;
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupChatUserList;
