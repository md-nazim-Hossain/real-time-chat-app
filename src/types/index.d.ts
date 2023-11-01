export interface ISidebar {
  href: string;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  ariaLabel?: string;
}

export interface IChatList {
  id: number;
  img: string;
  name: string;
  msg: string;
  time: string;
  unread: number;
  pinned: boolean;
  online: boolean;
}

export interface IChatHistory {
  type: string;
  message: string;
  incoming: boolean;
  outgoing: boolean;
  text?: string;
  subtype?: string;
  preview?: string;
  reply?: string;
  img?: string;
}

export interface IActions {
  color: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  y: number;
  title: string;
}

export interface ISettings {
  key: number;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  onclick: Function | MouseEventHandler<HTMLDivElement>;
}

export interface ICall {
  id: number;
  img: string;
  name: string;
  online: boolean;
  incoming: boolean;
  missed: boolean;
  type: "video" | "audio";
}

export type IApiResponse<T> = {
  success: boolean;
  message?: string | null;
  statusCode: number;
  data?: T | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  } | null;
};

export type IApiErrorResponse = {
  success: boolean;
  message: string;
  errorMessages: Array<{
    message: string;
    path: string;
  }>;
};

export type IUser = {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  avatar?: string;
  about?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  passwordChangeAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date | number;
  verified: boolean;
  otp: string | undefined;
  otpExpiredAt: Date | undefined;
  socketId?: string;
  friends: Array<Types.ObjectId | IFriendRequest>;
};

export type IFriendRequest = {
  sender: ObjectId | IUser;
  receipt: ObjectId | IUser;
};
