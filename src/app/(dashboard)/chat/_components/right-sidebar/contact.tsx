"use client";

import ModalContainer from "@components/common/modal";
import UserInfoAvatar from "@components/common/user-info-avatar";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Button,
  Divider,
  Image,
  Switch,
  useDisclosure,
} from "@nextui-org/react";
import {
  toggleSidebar,
  updateSidebarType,
} from "@redux/slice/chatContactSlice";
import { useAppDispatch } from "@redux/store";
import { IChatList } from "@type/index";
import NextImage from "next/image";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import TopBar from "./top-bar";

type Props = {
  chat: IChatList;
};
function Contact({ chat }: Props) {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: block,
    onOpen: onBlock,
    onOpenChange: onBlockChange,
  } = useDisclosure();
  return (
    <div>
      <TopBar>
        <p className="font-semibold dark:text-white">Contact Info</p>
        <Button
          onClick={() => dispatch(toggleSidebar())}
          variant={"light"}
          isIconOnly
          color={"default"}
        >
          <X size={20} />
        </Button>
      </TopBar>

      <div className="p-5 h-[calc(100vh_-_70px)] overflow-y-scroll scroll">
        <UserInfoAvatar user={chat} />
        <div className="flex justify-center items-center gap-16 py-9">
          <div>
            <Button variant={"light"} isIconOnly color={"default"}>
              <VideoCamera size="24px" />
            </Button>
            <h5>Video</h5>
          </div>
          <div>
            <Button variant={"light"} isIconOnly color={"default"}>
              <Phone size="24px" />
            </Button>
            <h5>Voice</h5>
          </div>
        </div>
        <Divider />
        <div className="py-7 space-y-3">
          <h5 className="font-medium">About</h5>
          <h5 className="font-bold">{faker.person.bio()}</h5>
        </div>
        <Divider />

        {/* media link docs */}
        <div className="py-7 space-y-7">
          <div className="flex justify-between items-center ">
            <h5 className="font-medium">Media link and docs</h5>
            <Button
              onClick={() => {
                dispatch(updateSidebarType("SHARED"));
              }}
              className="bg-transparent min-w-max p-0 !hover:bg-transparent text-primary h-26 rounded"
              endContent={<CaretRight size={18} />}
            >
              <h5 className="dark:text-primary text-primary">201</h5>
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[1, 2, 3].map((item) => (
              <Image
                width={80}
                height={80}
                as={NextImage}
                className="rounded"
                src={faker.image.avatar()}
                alt={faker.person.fullName()}
                key={item}
              />
            ))}
          </div>
        </div>
        <Divider />

        <div className="py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Star size={20} />
            <h5 className="font-medium">Starred Messages</h5>
          </div>
          <Button
            onClick={() => dispatch(updateSidebarType("STARRED"))}
            className="bg-transparent min-w-[18px] px-0 !hover:bg-transparent text-primary h-26 rounded"
          >
            <CaretRight size={18} />
          </Button>
        </div>

        <Divider />
        <div className="py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bell size={20} />
            <h5 className="font-medium">Mute Notifications</h5>
          </div>
          <Switch
            defaultSelected
            aria-label="Automatic updates"
            size="sm"
            classNames={{
              wrapper: "mr-0",
            }}
          />
        </div>
        <Divider />
        <div className="pt-4 space-y-6">
          <h6>1 group in common</h6>
          <div className="flex items-center gap-4">
            <Avatar
              src={faker.image.avatar()}
              alt={faker.person.fullName()}
              className="w-12 h-12"
            />
            <div>
              <p className="dark:text-white text-black font-semibold">
                Camels Gang
              </p>
              <h6 className="font-semibold">Owl, Parrot, Rabbit , You</h6>
            </div>
          </div>
        </div>

        <div className="pt-10 flex justify-between items-center">
          <ModalContainer
            trigger={
              <Button
                onPress={onBlock}
                color="primary"
                variant="bordered"
                radius="sm"
                className="border-1"
                startContent={<Prohibit size={18} />}
              >
                Block
              </Button>
            }
            title="Are you sure you want to block user"
            isOpen={block}
            onOpenChange={onBlockChange}
            button={
              <Button radius="sm" color="primary" onPress={() => {}}>
                Block
              </Button>
            }
          >
            <div></div>
          </ModalContainer>

          <ModalContainer
            trigger={
              <Button
                color="danger"
                variant="bordered"
                radius="sm"
                className="border-1"
                startContent={<Trash size={18} />}
                onPress={onOpen}
              >
                Delete
              </Button>
            }
            title="Are you sure you want to delete user"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            button={
              <Button radius="sm" color="danger" onPress={() => {}}>
                Delete
              </Button>
            }
          >
            <div></div>
          </ModalContainer>
        </div>
      </div>
    </div>
  );
}

export default Contact;
