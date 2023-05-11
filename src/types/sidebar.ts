import { Icon } from "@phosphor-icons/react";

export interface Page {
  title: string;
  slug: string;
}

export interface SidebarSection {
  heading: string;
  pages: Page[];
}

export interface SidebarCategory {
  title: string;
  default?: boolean;
  slug: string;
  icon?: Icon;
  sidebar: SidebarSection[];
}
