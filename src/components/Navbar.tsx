/* eslint-disable @next/next/no-img-element */
import { useLocalStorage } from "@/hooks/localStorage";
import { Theme } from "@/types/theme";
import { List, MagnifyingGlass, Moon, Sun } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";

export function Navbar({
  theme,
  setTheme,
  mobileSidebarOpen,
  setMobileSidebarOpen,
}: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (value: boolean) => void;
}) {
  const ThemeIcon = theme === "dark" ? Sun : Moon;

  return (
    <div
      className={`py-4 md:py-2.5 border-b border-b-black/10 dark:border-b dark:border-b-white/10 w-full sticky top-0 ${
        mobileSidebarOpen
          ? "bg-white dark:bg-dark-900"
          : "bg-white bg-opacity-75 dark:bg-dark-900 dark:bg-opacity-75"
      } backdrop-filter backdrop-blur-md z-[999] transition duration-200`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-2 relative flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div
            className={`block md:hidden p-2 cursor-pointer ${
              mobileSidebarOpen
                ? "bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10"
                : "bg-black bg-opacity-0 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-0 dark:hover:bg-opacity-10"
            } rounded-md transition duration-200`}
            onClick={() => {
              setMobileSidebarOpen(!mobileSidebarOpen);
            }}
          >
            <List weight="regular" size={18} />
          </div>
          <img className="h-6" src="/assets/xenyria_logo.webp" alt="Xenyria" />
        </div>
        <div>
          <div className="hidden md:block p-2 cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-0 dark:hover:bg-opacity-10 rounded-md transition duration-200">
            <ThemeIcon
              weight="regular"
              size={18}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </div>
          <div className="block md:hidden p-2 cursor-pointer bg-black bg-opacity-0 hover:bg-opacity-10 dark:bg-white dark:bg-opacity-0 dark:hover:bg-opacity-10 rounded-md transition duration-200">
            <MagnifyingGlass weight="regular" size={18} />
          </div>
        </div>
        <div className="hidden md:flex absolute w-full justify-center items-center pointer-events-none">
          <div className="cursor-pointer bg-black bg-opacity-[4%] dark:bg-white dark:bg-opacity-5 hover:bg-opacity-[7%] dark:hover:bg-opacity-10 py-2 px-4 rounded-md w-full max-w-sm text-sm text-black/50 dark:text-white/50 pointer-events-auto flex justify-between items-center border border-black/0 hover:border-black/10 dark:border-white/0 dark:hover:border-white/25 transition duration-200">
            <span>Search...</span>
            <span className="text-xs text-black/25 dark:text-white/25">⌘K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
