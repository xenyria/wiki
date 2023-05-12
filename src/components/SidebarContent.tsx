import data from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";

export function SidebarContent() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const currentCategory = data.find((category) =>
    currentRoute.startsWith(`/${category.slug}`)
  );

  return (
    <>
      <div className="flex flex-col space-y-2 pl-2 pr-4">
        {data.map(
          ({ title, slug, hidden, icon: Icon }) =>
            (!hidden || currentCategory?.slug === slug) && (
              <Link key={title} href={`/${slug}`}>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div
                    className={`h-7 w-7 ${
                      currentCategory?.slug === slug
                        ? "bg-green-500 bg-opacity-75 text-white group-hover:bg-green-500 group-hover:bg-opacity-100"
                        : "bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 text-black/75 dark:text-white/50 group-hover:bg-black group-hover:bg-opacity-10 dark:group-hover:bg-white dark:group-hover:bg-opacity-10"
                    } rounded-md flex items-center justify-center transition duration-200`}
                  >
                    {Icon && <Icon size={19} weight="fill" />}
                  </div>
                  <div
                    className={`${
                      currentCategory?.slug === slug
                        ? "text-black/75 dark:text-white/75 group-hover:text-black dark:group-hover:text-white font-semibold"
                        : "text-black/50 dark:text-white/50 group-hover:text-black/75 dark:group-hover:text-white/75 font-medium"
                    } font-medium transition duration-200`}
                  >
                    {title}
                  </div>
                </div>
              </Link>
            )
        )}
      </div>
      {currentCategory?.sidebar?.map(({ heading, pages }) => (
        <div key={heading} className="flex flex-col pl-2 pr-4 space-y-1">
          <div className="flex flex-col space-y-2 font-semibold px-3 py-1">
            {heading}
          </div>
          {pages.map(({ title, slug }) => (
            <Link
              key={slug}
              href={`/${currentCategory.slug}/${slug}`}
              className={`w-full px-3 py-1 rounded-md ${
                currentRoute ===
                (slug.length > 0
                  ? `/${currentCategory.slug}/${slug}`
                  : `/${currentCategory.slug}`)
                  ? "bg-green-500 bg-opacity-10 hover:bg-green-500 hover:bg-opacity-20 font-medium text-green-600 dark:bg-green-400 dark:bg-opacity-10 dark:hover:bg-green-400 dark:hover:bg-opacity-20 dark:text-green-500"
                  : "bg-black bg-opacity-0 hover:bg-black hover:bg-opacity-5 dark:bg-white dark:bg-opacity-0 dark:hover:bg-white dark:hover:bg-opacity-5 text-black/75 dark:text-white/75 hover:text-black/100 dark:hover:text-white/100"
              } transition duration-200`}
            >
              {title}
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
