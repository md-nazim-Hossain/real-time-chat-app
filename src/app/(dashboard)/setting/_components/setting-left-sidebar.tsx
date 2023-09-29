"use client";

import UserInfoAvatar from "@components/common/user-info-avatar";
import { ChatList, settingList } from "@data/data";
import { Button, Divider } from "@nextui-org/react";
import { ISettings } from "@type/index";
import { CaretLeft } from "phosphor-react";

function SettingLeftSidebar() {
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
          <UserInfoAvatar user={ChatList[0]} />
        </div>
      </div>

      <div className="w-full max-h-[calc(100vh_-_192px)] overflow-y-auto scroll pb-5">
        <div className="p-5 pt-0">
          {settingList.map((item: ISettings, index: number) => (
            <div onClick={item.onclick} key={index} className="cursor-pointer">
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
    </div>
  );
}

export default SettingLeftSidebar;
