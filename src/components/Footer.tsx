import Link from "next/link";

export function Footer() {
  const footerLinks = [
    {
      text: "Legal Notice",
      href: "/legal",
    },
    {
      text: "Privacy Policy",
      href: "/legal/privacy-policy",
    },
    {
      text: "Discord",
      href: "https://discord.gg/xenyria",
    },
  ];

  return (
    <div className="py-6 border-t border-t-black/10 dark:border-t-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-2 space-y-2 md:space-y-0">
        <span className="text-sm text-black/50 dark:text-white/50 text-center md:text-left">
          © 2023 Xenyria.net. Available on{" "}
          <a
            className="underline"
            href="https://github.com/XenyriaNET/wiki"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          under the{" "}
          <Link className="underline" href="/meta/license">
            MIT License
          </Link>
          .
        </span>
        <div className="flex space-x-2">
          {footerLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.href}
                href={link.href}
                className="text-black dark:text-white border-b-2 border-b-green-500/50 dark:border-b-green-400/50 hover:border-b-2 dark:hover:border-b-green-400/75 hover:border-b-green-500 transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-black dark:text-white border-b-2 border-b-green-500/50 dark:border-b-green-400/50 hover:border-b-2 dark:hover:border-b-green-400/75 hover:border-b-green-500 transition-all duration-200"
              >
                {link.text}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
