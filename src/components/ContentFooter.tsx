/* eslint-disable @next/next/no-img-element */
import { PencilSimple } from "@phosphor-icons/react";
import { DateTime } from "luxon";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function ContentFooter() {
  const router = useRouter();
  let pathname = router.pathname;
  if (pathname.startsWith("/")) pathname = pathname.slice(1);
  if (pathname.endsWith("/")) pathname = pathname.slice(0, -1);
  let pathnameParts = pathname.split("/");
  if (pathnameParts.length < 2) pathnameParts.push("index");

  const [lastModified, setLastModified] = useState<string | null>(null);
  const [contributors, setContributors] = useState<
    { username: string; avatar: string; url: string }[] | null
  >(null);
  const [previouslyFetched, setPreviouslyFetched] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function fetchLastModified() {
      if (previouslyFetched === pathname) return;
      setPreviouslyFetched(pathname);
      const pages = await fetch("/data/pages.json").then((res) => res.json());
      const page = pages[`src/pages/${pathnameParts.join("/")}.mdx`];
      if (page) {
        const date = DateTime.fromISO(page.lastModified);
        const now = DateTime.now();
        const diff = now.diff(date, ["days"]).toObject().days;
        if (diff && diff > 28) {
          setLastModified(date.toLocaleString(DateTime.DATETIME_FULL));
        } else {
          setLastModified(
            date
              .toRelative()
              ?.replace("1 hour", "an hour")
              .replace("1 day", "a day") || "Unknown"
          );
        }
        setContributors(page.contributors);
      } else {
        setLastModified("Unknown");
        setContributors([]);
      }
    }
    fetchLastModified();
  }, [pathnameParts, previouslyFetched, pathname]);

  return (
    <div className="flex justify-between items-start py-4 mt-4 border-t border-black/10 dark:border-white/10">
      <div className="flex flex-col text-sm space-y-1">
        <a
          href={`https://github.com/OfficialCRUGG/xenyria-wiki/commits/main/src/pages/${pathnameParts.join(
            "/"
          )}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/50 dark:text-white/50 hover:text-black/75 dark:hover:text-white/75 transition duration-200"
        >
          <div
            className={
              lastModified == null ? "flex items-center space-x-1.5" : ""
            }
          >
            <span>Last modified </span>
            {lastModified !== null ? (
              <span>{lastModified}</span>
            ) : (
              <div className="h-4 w-20 inline-block rounded-md bg-[#444] animate-pulse"></div>
            )}
          </div>
        </a>
        <a
          href={`https://github.com/OfficialCRUGG/xenyria-wiki/edit/main/src/pages/${pathnameParts.join(
            "/"
          )}.mdx`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/50 dark:text-white/50 hover:text-black/75 dark:hover:text-white/75 transition duration-200 flex items-center space-x-1"
        >
          <PencilSimple weight="fill" size={16} />
          <span>Edit this page</span>
        </a>
      </div>
      <div className="flex flex-col items-end space-y-1">
        <span className="text-sm text-black/50 dark:text-white/50">
          Contributors
        </span>
        <div className="flex space-x-1.5">
          {contributors !== null
            ? contributors.map((contributor) => (
                <a
                  key={contributor.username}
                  href={contributor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={contributor.avatar}
                    alt={contributor.username}
                    className="h-8 w-8 rounded-full"
                  />
                </a>
              ))
            : Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-[#444] animate-pulse"
                />
              ))}
        </div>
      </div>
    </div>
  );
}
