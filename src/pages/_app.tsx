import { DocsLayout } from "@/components";
import data from "@/data";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let pathname = router.pathname;
  if (pathname.startsWith("/")) pathname = pathname.slice(1);
  if (pathname.endsWith("/")) pathname = pathname.slice(0, -1);
  let pathnameParts = pathname.split("/");
  if (pathnameParts.length < 2) pathnameParts.push("");

  const category = data.find((category) => category.slug === pathnameParts[0]);

  const page = category?.sidebar
    .find((section) =>
      section.pages.some((page) => page.slug === pathnameParts[1])
    )
    ?.pages.find((page) => page.slug === pathnameParts[1]);

  return (
    <>
      <NextSeo
        title={
          page?.title
            ? category?.title !== "General"
              ? `${page?.title} (${category?.title}) - Xenyria`
              : `${page?.title} - Xenyria`
            : "Wiki - Xenyria"
        }
      />
      <DocsLayout>
        <Component {...pageProps} />
      </DocsLayout>
    </>
  );
}
