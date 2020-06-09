import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export function createClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri:
        "https://api-eu-central-1.graphcms.com/v2/ckaecqfrf054h01z7h26b71my/master",
    }),
  });
}
