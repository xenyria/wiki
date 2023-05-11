import { Icon, IconProps } from "@phosphor-icons/react";
import { PropsWithChildren } from "react";

export function Info({
  icon,
  iconProps,
  children,
}: PropsWithChildren<{
  icon?: Icon;
  iconProps?: IconProps;
}>) {
  const Icon = icon;
  return (
    <div className="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-10 p-3 flex items-center text-black dark:text-white rounded-md my-2">
      {Icon && (
        <>
          <Icon
            className="grow mr-3 hidden md:block"
            size={20}
            {...iconProps}
          />
          <Icon
            className="grow mr-4 md:mr-2 block md:hidden"
            size={32}
            {...iconProps}
          />
        </>
      )}
      {children && (
        <div className="w-full text-base md:text-sm font-medium">
          {children}
        </div>
      )}
    </div>
  );
}
