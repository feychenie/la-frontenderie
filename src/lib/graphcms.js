import { GraphQLClient } from 'graphql-request';

export const graphcms = new GraphQLClient(import.meta.env.VITE_API_ENDPOINT, {
	headers: {
		Authorization: import.meta.env.VITE_API_TOKEN
	}
});
