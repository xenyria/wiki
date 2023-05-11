import { SidebarContent } from ".";

export function Sidebar({ mobileSidebarOpen }: { mobileSidebarOpen: boolean }) {
  return (
    <>
      <div className="hidden md:flex flex-col space-y-6 pr-4 pt-4 border-r border-black/10 dark:border-r dark:border-r-white/10 w-[24rem]">
        <SidebarContent />
      </div>
      <div
        className={`md:hidden fixed h-full w-full bg-gray-400 dark:bg-black ${
          mobileSidebarOpen
            ? "bg-opacity-75 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm"
            : "bg-opacity-0 dark:bg-opacity-0 pointer-events-none"
        } z-[999] transition-all duration-300 transition-ease-out`}
      >
        <div
          className={`bg-white dark:bg-dark-900 h-full w-[80%] p-4 shadow-lg flex flex-col space-y-6 overflow-y-auto transform ${
            mobileSidebarOpen
              ? "translate-x-[0]"
              : "-translate-x-full pointer-events-none"
          } transition-all duration-300 transition-ease-out`}
        >
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
