import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export function Contributors() {
  const [fetched, setFetched] = useState<boolean>(false);
  const [contributors, setContributors] = useState<
    | {
        username: string;
        avatar: string;
        url: string;
        pagesContributed: number;
      }[]
    | null
  >(null);

  useEffect(() => {
    async function fetchContributors() {
      if (fetched) return;
      setFetched(true);
      const pages = await fetch("/data/pages.json").then((res) => res.json());
      const contributors = Object.values(pages).flatMap(
        (page: any) => page.contributors
      );
      const result = contributors.reduce((acc, contributor) => {
        const existingContributor = acc.find(
          (c: any) => c.username === contributor.username
        );
        if (existingContributor) {
          existingContributor.pagesContributed++;
        } else {
          acc.push({
            username: contributor.username,
            avatar: contributor.avatar,
            url: contributor.url,
            pagesContributed: 1,
          });
        }
        return acc;
      }, []);
      setContributors(
        result.sort((a: any, b: any) => b.pagesContributed - a.pagesContributed)
      );
    }
    fetchContributors();
  });

  return (
    <div className="flex flex-col space-y-2">
      {contributors
        ? contributors.map((contributor, i) => (
            <a
              key={i}
              href={contributor.url}
              className="!border-none"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="flex items-center space-x-2">
                <img
                  className="h-16 w-16 rounded-full"
                  src={contributor.avatar}
                  alt=""
                />
                <div className="flex flex-col">
                  <h2 className="!m-0">{contributor.username}</h2>
                  <p className="!mb-0 -mt-1">
                    Contributed to{" "}
                    <span className="text-white font-semibold">
                      {contributor.pagesContributed}
                    </span>{" "}
                    pages
                  </p>
                </div>
              </div>
            </a>
          ))
        : Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="h-16 w-16 rounded-full bg-[#444] animate-pulse" />
              <div className="flex flex-col">
                <div className="h-6 w-48 rounded-md bg-[#444] animate-pulse" />
                <div className="h-4 w-32 rounded-md bg-[#444] animate-pulse mt-2" />
              </div>
            </div>
          ))}
    </div>
  );
}
