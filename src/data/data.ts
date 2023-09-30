import { faker } from "@faker-js/faker";
import {
  IActions,
  IChatHistory,
  IChatList,
  ISettings,
  ISidebar,
} from "@type/index";
import {
  Bell,
  Camera,
  ChatCircleDots,
  File,
  Gear,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
  Phone,
  SignOut,
  Sticker,
  User,
  Users,
} from "phosphor-react";

const dashboardSidebarData: ISidebar[] = [
  {
    href: "/chat",
    Icon: ChatCircleDots,
    ariaLabel: "Chat",
  },
  {
    href: "/groups",
    Icon: Users,
    ariaLabel: "Groups",
  },
  {
    href: "/phone",
    Icon: Phone,
    ariaLabel: "Phone",
  },
];

const CallList = [
  {
    id: 0,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 1,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: true,
    incoming: false,
    missed: true,
  },
  {
    id: 2,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: false,
    incoming: true,
    missed: true,
  },
  {
    id: 3,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 4,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 5,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 6,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 7,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 8,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 9,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 10,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 11,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 12,
    img: faker.image.url(),
    name: faker.person.firstName(),
    online: true,
    incoming: true,
    missed: false,
  },
];

const ChatList: IChatList[] = [
  {
    id: 0,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.url(),
    name: faker.person.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History: IChatHistory[] = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
    incoming: false,
    outgoing: false,
    message: "",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.url(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.url(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

const Shared_docs = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
];

const Shared_links = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.url(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.url(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.url(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.url(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.url(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.url(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
];

const Actions: IActions[] = [
  {
    color: "#4da5fe",
    icon: Image,
    y: 55,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: Sticker,
    y: 110,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: Camera,
    y: 165,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: File,
    y: 220,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: User,
    y: 275,
    title: "Contact",
  },
];

const Profile_Menu = [
  {
    title: "Profile",
    icon: User,
    onclick: (props?: any) => {},
  },
  {
    title: "Settings",
    icon: Gear,
    onclick: (props?: any) => {
      if (props) {
        return props.push("/settings");
      }
    },
  },
  {
    title: "Sign Out",
    icon: SignOut,
    onclick: (props?: any) => {},
  },
];
const settingList: ISettings[] = [
  {
    key: 0,
    icon: Bell,
    title: "Notifications",
    onclick: (props: any) => {},
  },
  {
    key: 1,
    icon: Lock,
    title: "Privacy",
    onclick: () => {},
  },
  {
    key: 2,
    icon: Key,
    title: "Security",
    onclick: () => {},
  },
  {
    key: 3,
    icon: PencilCircle,
    title: "Theme",
    onclick: (onOpen: () => void) => {
      onOpen && onOpen();
    },
  },
  {
    key: 4,
    icon: Image,
    title: "Chat Wallpaper",
    onclick: () => {},
  },
  {
    key: 5,
    icon: Note,
    title: "Request Account Info",
    onclick: () => {},
  },
  {
    key: 6,
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    onclick: (onOpen: () => void) => {
      onOpen && onOpen();
    },
  },
  {
    key: 7,
    icon: Info,
    title: "Help",
    onclick: () => {},
  },
];

const Keyboard_shortcuts = [
  {
    key: 0,
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 7,
    title: "Next Chat",
    combination: ["Cmd", "N"],
  },
  {
    key: 8,
    title: "Next Step",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 9,
    title: "Previous Step",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile & About",
    combination: ["Cmd", "P"],
  },
  {
    key: 12,
    title: "Increase speed of voice message",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Decrease speed of voice message",
    combination: ["Shift", ","],
  },
  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
  {
    key: 16,
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
];

export {
  Actions,
  CallList,
  ChatList,
  Chat_History,
  Keyboard_shortcuts,
  Message_options,
  Profile_Menu,
  Shared_docs,
  Shared_links,
  dashboardSidebarData,
  settingList,
};
