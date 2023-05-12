import React, { useMemo } from "react";
import { useState, ReactNode, ReactElement } from "react";

interface TabProps {
  children: ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ children, title, isActive, onClick }: TabProps) {
  return (
    <button
      className={`${
        isActive
          ? "border-b-2 border-white text-black dark:text-white"
          : "border-b-2 border-transparent text-black/50 dark:text-white/50 hover:text-black/75 hover:dark:text-white/75 hover:border-white/25"
      } py-1 px-4 font-medium focus:outline-none transition duration-200`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

interface TabsProps {
  children: ReactNode;
}

function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabChildren = useMemo(() => {
    return React.Children.toArray(children).filter(
      (child): child is ReactElement<TabProps> => {
        return React.isValidElement<TabProps>(child) && child.type === Tab;
      }
    ) as ReactElement<TabProps>[];
  }, [children]);

  return (
    <div className="border border-black/10 dark:border-white/10 rounded-md w-full max-w-full">
      <div className="flex border-b border-black/10 dark:border-white/10">
        {tabChildren.map((child, index) => {
          return React.cloneElement(child, {
            isActive: activeTab === index,
            onClick: () => setActiveTab(index),
          });
        })}
      </div>
      <div className="px-4 py-2 whitespace-pre-wrap">
        {tabChildren[activeTab]?.props.children}
      </div>
    </div>
  );
}

export { Tabs, Tab };
