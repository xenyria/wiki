const data = {
  owner: "OfficialCRUGG",
  name: "xenyria-wiki",
};

const graphqlQuery = `{
  repository(owner: "${data.owner}", name: "${data.name}") {
    object(expression: "main") {
      ... on Commit {
        history(path: "MAINTAINERS") {
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
