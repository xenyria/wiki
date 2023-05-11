/* eslint-disable @next/next/no-img-element */
import { useLocalStorage } from "@/hooks/localStorage";
import { Theme } from "@/types/theme";
import { X } from "@phosphor-icons/react";
import config from "@/config";
import { PropsWithChildren, useEffect, useState } from "react";
import { Navbar } from "./Navbar";

import { Content, Sidebar } from ".";
import { useRouter } from "next/router";

export function DocsLayout({ children }: PropsWithChildren<{}>) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "dark");
  const [message, setMessage] = useLocalStorage<boolean>(
    `message_key:${config.message?.key}`,
    true
  );
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileSidebarOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <div className={`${theme} max-h-screen overflow-hidden`}>
      <div
        id="scroll"
        className={`max-h-screen ${
          mobileSidebarOpen ? "overflow-y-scroll fixed" : "overflow-y-scroll"
        }`}
      >
        <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900 dark:text-white transition duration-200">
          {config.message && message && (
            <div className="bg-green-500 dark:bg-black text-white flex justify-center items-center py-2 relative">
              {config.message.icon &&
                (() => {
                  const Icon = config.message.icon;
                  return <Icon size={20} weight="fill" className="mr-2" />;
                })()}
              <span className="text-md">{config.message.text}</span>
              <div className="absolute top-0 right-0 h-full aspect-square flex items-center justify-center p-1.5">
                <div
                  className="h-full w-full flex items-center justify-center rounded-md bg-white bg-opacity-0 hover:bg-opacity-10 cursor-pointer transition duration-200 text-white/75 hover:text-white"
                  onClick={() => {
                    setMessage(false);
                  }}
                >
                  <X weight="bold" size={20} />
                </div>
              </div>
            </div>
          )}

          <Navbar
            theme={theme}
            setTheme={setTheme}
            mobileSidebarOpen={mobileSidebarOpen}
            setMobileSidebarOpen={setMobileSidebarOpen}
          />

          <div className="flex justify-center grow">
            <div className="max-w-5xl w-full grow shrink-0 flex relative">
              <Sidebar mobileSidebarOpen={mobileSidebarOpen} />
              <Content>{children}</Content>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
