import { graphcms } from '$lib/graphcms.js';

export async function get() {
	const body = await graphcms
		.request(
			`
            query ArticlesHome {
                articles(orderBy: publishedAt_DESC) {
                  id
                  title
                  slug
                  summary
                  author {
                    name
                  }
                }
              }`
		)
		.then((data) => {
			return data;
		});

	return {
		body
	};
}
