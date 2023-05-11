import { Icon } from "@phosphor-icons/react";

export interface Message {
  icon?: Icon;
  text: string | JSX.Element;
  key: string;
}

export interface Config {
  message?: Message;
}
