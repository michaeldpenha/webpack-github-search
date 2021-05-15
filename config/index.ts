interface Config {
  readonly githubGraphQlEndPoint: string;
}

export const config: Config = {
  githubGraphQlEndPoint: 'https://api.github.com/graphql',
};
