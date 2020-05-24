import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import fetch from "isomorphic-unfetch";

export function createClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      fetch,
      uri:
        "https://api-eu-central-1.graphcms.com/v2/ckaecqfrf054h01z7h26b71my/master",
    }),
  });
}
