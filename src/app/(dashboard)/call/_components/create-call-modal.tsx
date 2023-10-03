import ModalContainer from "@components/common/modal";
import SearchInput from "@components/common/search-input";
import { CallList } from "@data/data";
import { Avatar, Button, cn } from "@nextui-org/react";
import { Phone, VideoCamera } from "phosphor-react";

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};
function CreateCallModal({ isOpen, onOpenChange }: Props) {
  return (
    <ModalContainer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={
        <div className="w-[calc(100%_-_12px)]">
          <SearchInput />
        </div>
      }
      isCancelButton={false}
    >
      <div className="space-y-5 max-h-[calc(100vh_-_243px)] overflow-y-auto scroll">
        {CallList.map((call: any, index: number) => {
          return (
            <div
              key={index}
              className={cn(
                "rounded-[15px] mr-3 p-4 flex justify-between dark:bg-theme-dark bg-theme-light"
              )}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <Avatar
                    as={"button"}
                    className="w-full h-full"
                    alt={"My Avatar " + call.id}
                    src={call.img}
                  />
                  <span
                    className={cn(
                      "z-10 border-2 border-white translate-y-1/2 absolute bottom-[4px] right-1 w-[12px] h-[12px] rounded-full  inline-block",
                      call.online ? "bg-[#76D45E]" : "bg-dark-gray"
                    )}
                  ></span>
                </div>
                <div className="space-y-1.5">
                  <p
                    className={cn(
                      "font-extrabold text-[#030303] dark:text-white"
                    )}
                  >
                    {call.name}
                  </p>
                  <p
                    className={cn(
                      "text-sm text-[#7C7C7D] font-semibold max-w-[180px] line-clamp-1"
                    )}
                  >
                    yesterday,12:40
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="light"
                  color="success"
                  className="min-w-max px-3 py-0 hover:!bg-transparent"
                  radius="sm"
                >
                  <Phone size={20} />
                </Button>
                <Button
                  variant="light"
                  color="success"
                  className="min-w-max px-3 py-0 hover:!bg-transparent"
                  radius="sm"
                >
                  <VideoCamera size={20} />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </ModalContainer>
  );
}

export default CreateCallModal;
