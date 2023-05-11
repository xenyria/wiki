import { Sparkle } from "@phosphor-icons/react";
import { Config } from "./types/config";
import Link from "next/link";

const config: Config = {
  message: {
    icon: Sparkle,
    text: (
      <span>
        Welcome to the Xenyria Wiki! This is a work in progress, so please be
        patient as we work on it. Read more{" "}
        <Link href="/general/about-this-wiki">here</Link>.
      </span>
    ),
    key: "welcome_to_wiki",
  },
};

export default config;
