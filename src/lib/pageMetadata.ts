const repo = {
  owner: "OfficialCRUGG",
  name: "xenyria-wiki",
};

export async function getPageMetadata(path: string) {
  const graphqlQuery = `{
  repository(owner: "${repo.owner}", name: "${repo.name}") {
    object(expression: "main") {
      ... on Commit {
        history(path: "${path}") {
          nodes {
            authoredDate
            author {
              email
              name
              user {
                name
                avatarUrl
                login
                url
              }
            }
          }
        }
      }
    }
  }
}`;

  return await (
    await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: graphqlQuery,
      }),
    })
  ).json();
}
