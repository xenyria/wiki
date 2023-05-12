import { SidebarContent } from ".";

export function Sidebar({
  mobileSidebarOpen,
  setMobileSidebarOpen,
}: {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: (open: boolean) => void;
}) {
  return (
    <>
      <div className="hidden md:flex flex-col space-y-6 pr-4 pt-4 border-r border-black/10 dark:border-r dark:border-r-white/10 w-[18rem] pb-4 shrink-0">
        <SidebarContent />
      </div>
      <div
        className={`md:hidden h-[calc(100vh-67px)] fixed w-full bg-gray-400 dark:bg-black ${
          mobileSidebarOpen
            ? "bg-opacity-75 dark:bg-opacity-75 backdrop-filter backdrop-blur-sm"
            : "bg-opacity-0 dark:bg-opacity-0 pointer-events-none"
        } z-[999] transition-all duration-300 transition-ease-out`}
        onClick={() => {
          setMobileSidebarOpen(false);
        }}
      >
        <div
          id="mobileSidebar"
          className={`bg-white h-full dark:bg-dark-900 h-full w-[80%] p-4 shadow-lg flex flex-col space-y-6 overflow-y-scroll transform ${
            mobileSidebarOpen
              ? "translate-x-[0]"
              : "-translate-x-full pointer-events-none"
          } transition-all duration-300 transition-ease-out`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
