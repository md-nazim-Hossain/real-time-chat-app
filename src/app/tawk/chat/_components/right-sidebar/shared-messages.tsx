import { Shared_docs, Shared_links } from "@data/data";
import { faker } from "@faker-js/faker";
import { Button, Image, Tab, Tabs } from "@nextui-org/react";
import { updateSidebarType } from "@redux/slice/chatContactSlice";
import { useAppDispatch } from "@redux/store";
import { IChatHistory } from "@type/index";
import NextImage from "next/image";
import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { DocumentMessage, LinkMessage } from "../message-type";
import TopBar from "./top-bar";

function SharedMessages() {
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState<React.Key>("media");
  return (
    <div>
      <TopBar>
        <Button
          onClick={() => dispatch(updateSidebarType("CONTACT"))}
          variant={"light"}
          isIconOnly
          color={"default"}
        >
          <ArrowLeft size={20} />
        </Button>
        <p className="font-semibold">Media link and docs</p>
      </TopBar>
      <div className="p-5">
        <Tabs
          onSelectionChange={setSelectedTab}
          key={"underlined"}
          variant={"underlined"}
          aria-label="Tabs variants"
          fullWidth
          classNames={{
            base: "font-manrope font-medium text-base",
            tabList: "gap-6 w-full relative rounded-none p-0",
            cursor: "w-full bg-primary",

            tabContent:
              "dark:text-white text-black group-data-[selected=true]:text-primary",
          }}
        >
          <Tab key="media" title="Media" />
          <Tab key="links" title="Links" />
          <Tab key="docs" title="Docs" />
        </Tabs>
      </div>
      <div className="h-[calc(100vh_-_140px)] overflow-y-scroll scroll overflow-x-hidden">
        <div className="p-5">
          {(() => {
            switch (selectedTab) {
              case "media":
                return <Media />;
              case "links":
                return <Links />;
              case "docs":
                return <Docs />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default SharedMessages;

const Media = () => {
  return (
    <div className="space-y-5">
      <h6 className="font-semibold">27th Oct 23</h6>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <Image
            width={80}
            height={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            as={NextImage}
            key={index}
            className="rounded "
            src={faker.image.avatar()}
            alt={faker.person.fullName()}
          />
        ))}
      </div>
    </div>
  );
};

const Docs = () => {
  return (
    <div className="space-y-5">
      <h6 className="font-semibold">27th Oct 23</h6>
      <div className="space-y-3 overflow-hidden">
        {Shared_docs.map((item: IChatHistory, index: number) => (
          <DocumentMessage
            key={index}
            item={item}
            showMessage={false}
            className="min-w-[270px]"
            layoutClassName="border dark:border-none"
            showMenu={false}
          />
        ))}
      </div>
    </div>
  );
};
const Links = () => {
  return (
    <div className="space-y-5">
      <h6 className="font-semibold">27th Oct 23</h6>
      <div className="space-y-3 w-full">
        {Shared_links.map((item: IChatHistory, index: number) => (
          <LinkMessage
            showMenu={false}
            className="border dark:border-none min-w-[100%]"
            item={item}
            key={index}
            avatarProps={[270]}
          />
        ))}
      </div>
    </div>
  );
};
