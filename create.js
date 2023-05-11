const cats = [
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
];

const fs = require("fs");
const path = require("path");

cats.forEach((cat) => {
  cat.pages.forEach((page) => {
    const content = `# ${page.title}
    
    <Soon />
    `;
    const file = path.join(
      __dirname,
      "src",
      "pages",
      "rush",
      page.slug.length > 0 ? page.slug + ".mdx" : "index.mdx"
    );
    fs.writeFileSync(file, content);
  });
});
