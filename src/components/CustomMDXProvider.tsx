import { MDXProvider } from "@mdx-js/react";
import { PropsWithChildren } from "react";
import {
  Contributors,
  Info,
  PaintSquadModeGrid,
  Soon,
  Stub,
  Tabs,
  Tab,
} from "./mdx";

const components = {
  Contributors,
  Info,
  Stub,
  Soon,
  PaintSquadModeGrid,
  Tabs,
  Tab,
};

export function CustomMDXProvider({ children }: PropsWithChildren<{}>) {
  return (
    <MDXProvider components={components}>
      <div className="markdown">{children}</div>
    </MDXProvider>
  );
}
