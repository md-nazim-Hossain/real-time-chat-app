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
