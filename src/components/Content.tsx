import { PropsWithChildren } from "react";
import { CustomMDXProvider, ContentFooter } from ".";

export function Content({ children }: PropsWithChildren<{}>) {
  return (
    <div className="py-3 px-8 w-full">
      <CustomMDXProvider>{children}</CustomMDXProvider>
      <ContentFooter />
    </div>
  );
}
