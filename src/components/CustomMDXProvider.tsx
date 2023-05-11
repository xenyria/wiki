import { MDXProvider } from "@mdx-js/react";
import { PropsWithChildren } from "react";
import { Info, PaintSquadModeGrid, Soon, Stub } from "./mdx";

const components = {
  Info,
  Stub,
  Soon,
  PaintSquadModeGrid,
};

export function CustomMDXProvider({ children }: PropsWithChildren<{}>) {
  return (
    <MDXProvider components={components}>
      <div className="markdown">{children}</div>
    </MDXProvider>
  );
}
