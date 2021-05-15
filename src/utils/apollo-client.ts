import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

import { config } from '../../config';
import { mergeData } from './pagination';

const { githubGraphQlEndPoint: uri } = config;

const authMiddleware = (): ApolloLink =>
  new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    return forward(operation);
  });

const cache: InMemoryCache = new InMemoryCache({
  possibleTypes: {
    SearchResultItem: ['Issue', 'Repository'],
  },
  typePolicies: {
    Query: {
      fields: {
        search: {
          keyArgs: ['query'],
          merge(existing, incoming) {
            return mergeData(existing, incoming);
          },
          read(existing) {
            return existing;
          },
        },
      },
    },
    Issue: {
      keyFields: ['id', 'number'],
      fields: {
        comments: {
          keyArgs: [],
          merge(existing, incoming) {
            return mergeData(existing, incoming);
          },
          read(existing) {
            return existing;
          },
        },
      },
    },
    Repository: {
      keyFields: ['name', 'id'],
    },
    IssueComment: {
      keyFields: ['id'],
    },
    User: {
      keyFields: ['login'],
    },
  },
});

const httpLink: HttpLink = new HttpLink({
  uri,
});

// const persistedHttpLink: ApolloLink = createPersistedQueryLink({
//   useGETForHashedQueries: true,
//   sha256,
// }).concat(httpLink);

export const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: authMiddleware().concat(httpLink),
});
