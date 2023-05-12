import { BookOpen, Car, Gavel, PaintRoller, Plug } from "@phosphor-icons/react";
import { SidebarCategory } from "./types/sidebar";

const data: SidebarCategory[] = [
  {
    title: "General",
    default: true,
    slug: "general",
    icon: BookOpen,
    sidebar: [
      {
        heading: "Getting Started",
        pages: [
          {
            title: "Introduction",
            slug: "",
          },
          {
            title: "How to join",
            slug: "how-to-join",
          },
        ],
      },
      {
        heading: "Resources",
        pages: [
          {
            title: "Rules",
            slug: "rules",
          },
          {
            title: "Acknowledgements",
            slug: "acknowledgements",
          },
        ],
      },
      {
        heading: "Miscellaneous",
        pages: [
          {
            title: "Troubleshooting",
            slug: "troubleshooting",
          },
          {
            title: "Frequently Asked Questions",
            slug: "faq",
          },
          {
            title: "Applications",
            slug: "applications",
          },
          {
            title: "Modifications",
            slug: "modifications",
          },
        ],
      },
    ],
  },
  {
    title: "PaintSquad",
    slug: "paintsquad",
    icon: PaintRoller,
    sidebar: [
      {
        heading: "General",
        pages: [
          {
            title: "Introduction",
            slug: "",
          },
          {
            title: "The Lobby",
            slug: "lobby",
          },
          {
            title: "Controls",
            slug: "controls",
          },
        ],
      },
      {
        heading: "Game Modes",
        pages: [
          {
            title: "Turf War",
            slug: "turf-war",
          },
          {
            title: "Deathmatch",
            slug: "deathmatch",
          },
          {
            title: "Paintzones",
            slug: "paintzones",
          },
          {
            title: "Eightball",
            slug: "eightball",
          },
          {
            title: "Rainmaker",
            slug: "rainmaker",
          },
          {
            title: "Conquest",
            slug: "conquest",
          },
          {
            title: "Tower Control",
            slug: "tower-control",
          },
          {
            title: "Clam Attack",
            slug: "clam-attack",
          },
          {
            title: "Invasion",
            slug: "invasion",
          },
        ],
      },
      {
        heading: "Gameplay",
        pages: [
          {
            title: "Weapons",
            slug: "weapons",
          },
          {
            title: "Maps",
            slug: "maps",
          },
          {
            title: "PaintFests",
            slug: "paintfests",
          },
          {
            title: "Perks",
            slug: "perks",
          },
        ],
      },
      {
        heading: "Progression",
        pages: [
          {
            title: "Leveling",
            slug: "leveling",
          },
          {
            title: "Leaderboard",
            slug: "leaderboard",
          },
          {
            title: "Daily Missions",
            slug: "daily-missions",
          },
          {
            title: "Achievements",
            slug: "achievements",
          },
          {
            title: "Ink Tanks",
            slug: "ink-tanks",
          },
        ],
      },
    ],
  },
  {
    title: "Rush",
    slug: "rush",
    icon: Car,
    sidebar: [
      {
        heading: "General",
        pages: [
          {
            title: "Introduction",
            slug: "",
          },
          {
            title: "The Lobby",
            slug: "lobby",
          },
          {
            title: "Controls",
            slug: "controls",
          },
        ],
      },
      {
        heading: "Gameplay",
        pages: [
          {
            title: "Items",
            slug: "items",
          },
          {
            title: "Kart Customization",
            slug: "kart-customization",
          },
          {
            title: "Time Trials",
            slug: "time-trials",
          },
        ],
      },
      {
        heading: "Tracks",
        pages: [
          {
            title: "Mountainside Raceway",
            slug: "mountainside-raceway",
          },
          {
            title: "Drip-Deep Mineshaft",
            slug: "drip-deep-mineshaft",
          },
          {
            title: "Dry Dry Canyon",
            slug: "dry-dry-canyon",
          },
          {
            title: "Nitro Amusement Park",
            slug: "nitro-amusement-park",
          },
        ],
      },
    ],
  },
  {
    title: "API",
    slug: "dev",
    icon: Plug,
    sidebar: [
      {
        heading: "General",
        pages: [
          {
            title: "Introduction",
            slug: "",
          },
        ],
      },
    ],
  },
  {
    title: "Legal",
    slug: "legal",
    icon: Gavel,
    hidden: true,
    sidebar: [
      {
        heading: "Legal Documents",
        pages: [
          {
            title: "Legal Notice",
            slug: "",
          },
          {
            title: "Privacy Policy",
            slug: "privacy-policy",
          },
        ],
      },
    ],
  },
];

export default data;
