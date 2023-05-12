import fs from "fs";
import { config } from "dotenv";
config();

function getAllFilesSync(dirPath: string): string[] {
  let files: string[] = [];

  // Get all files in the current directory
  const currentFiles = fs.readdirSync(dirPath);

  // Iterate over each file/directory in the current directory
  for (const file of currentFiles) {
    const filePath = `${dirPath}/${file}`;

    // If the file is a directory, recursively search for files within it
    if (fs.statSync(filePath).isDirectory()) {
      files = files.concat(getAllFilesSync(filePath));
    } else {
      // Check if the file ending is .mdx
      if (!filePath.endsWith(".mdx")) continue;
      // If the file is a regular file, add it to the list of files
      files.push(filePath);
    }
  }

  return files;
}

// Get all files
const files = getAllFilesSync("src/pages");

// Object
const dataObject: any = {};

// Setup Octokit
import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const promises = files.map(async (file) => {
  await addData(file);
});

Promise.all(promises).then(() => {
  fs.writeFileSync("public/data/pages.json", JSON.stringify(dataObject));
});

async function addData(file: string) {
  dataObject[file] = {
    lastModified: null,
    contributors: [],
  };
  const data = await (
    await fetch(
      `https://api.github.com/repos/XenyriaNET/wiki/commits?path=${file}`,
      {
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    )
  ).json();
  const contributors: any[] = [];
  data.forEach((commit: any) => {
    if (contributors.find((c) => c.username === commit.author.login)) return;
    contributors.push({
      username: commit.author.login,
      avatar: commit.author.avatar_url,
      url: commit.author.html_url,
    });
  });
  const lastModified = new Date(
    data.reduce((a: any, b: any) =>
      new Date(a.commit.author.date) > new Date(b.commit.author.date) ? a : b
    ).commit.author.date
  );
  dataObject[file] = {
    lastModified,
    contributors,
  };
  return;
}
