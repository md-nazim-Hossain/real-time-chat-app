import { Button } from "@nextui-org/react";
import { updateSidebarType } from "@redux/slice/chatContactSlice";
import { useAppDispatch } from "@redux/store";
import { ArrowLeft } from "phosphor-react";
import Conversations from "../conversations";
import TopBar from "./top-bar";

function StarredMessages() {
  const dispatch = useAppDispatch();
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
        <p className="font-semibold">Starred Messages</p>
      </TopBar>
      <div className=" selection:w-full h-[calc(100vh_-_70px)] overflow-y-scroll scroll overflow-x-hidden">
        <Conversations
          showMenu={false}
          className="dark:!bg-dark-light !bg-light "
        />
      </div>
    </div>
  );
}

export default StarredMessages;
