"use client";

import UserInfoAvatar from "@components/common/user-info-avatar";
import { ChatList, settingList } from "@data/data";
import { Button, Divider, useDisclosure } from "@nextui-org/react";
import { IProfile, ISettings } from "@type/index";
import { CaretLeft } from "phosphor-react";
import KeyboardShortcutsModal from "./keyboard-shortcuts-modal";
import ThemeModal from "./theme-modal";
import { useQueryClient } from "@tanstack/react-query";

function SettingLeftSidebar() {
  const {
    isOpen: openTheme,
    onOpen: onOpenTheme,
    onOpenChange: onOpenChangeTheme,
  } = useDisclosure();
  const {
    isOpen: openShortcuts,
    onOpen: onOpenShortcuts,
    onOpenChange: onOpenChangeShortcuts,
  } = useDisclosure();
  const userId = localStorage.getItem("userId");
  const queryClient = useQueryClient();
  const profileData = queryClient.getQueryData([
    "getProfile",
    userId,
  ]) as IProfile;

  return (
    <div className="relative w-[340px] h-full dark:bg-dark-light bg-light  shadow-sidebar">
      <div className="p-5">
        <div className="flex items-center gap-5 ">
          <Button
            size="lg"
            variant="light"
            isIconOnly
            aria-label={"Caret left"}
          >
            <CaretLeft size={32} />
          </Button>
          <h1>Settings</h1>
        </div>
        <div className="py-7">
          <UserInfoAvatar user={profileData ?? {}} />
        </div>
      </div>

      <div className="w-full max-h-[calc(100vh_-_192px)] overflow-y-auto scroll pb-5">
        <div className="p-5 pt-0">
          {settingList.map((item: ISettings, index: number) => (
            <div
              onClick={() => {
                switch (item.key) {
                  case 1:
                    return item.onclick();
                  case 2:
                    return;
                  case 3:
                    return item.onclick(onOpenTheme);
                  case 4:
                    return;
                  case 5:
                    return;
                  case 6:
                    return item.onclick(onOpenShortcuts);
                  case 7:
                    return;
                }
              }}
              key={index}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-5 py-4">
                <item.icon className="text-muted dark:text-white" size={20} />
                <p className="text-muted font-bold dark:text-white ">
                  {item.title}
                </p>
              </div>
              {settingList.length !== index - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
      <ThemeModal isOpen={openTheme} onOpenChange={onOpenChangeTheme} />
      <KeyboardShortcutsModal
        isOpen={openShortcuts}
        onOpenChange={onOpenChangeShortcuts}
      />
    </div>
  );
}

export default SettingLeftSidebar;
