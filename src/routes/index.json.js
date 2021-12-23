import { graphcms } from '$lib/graphcms.js';

export async function get() {
	const body = await graphcms
		.request(
			`
      query ArticlesHome {
        articles(orderBy: publishedAt_DESC, stage: PUBLISHED) {
          id
          title
          slug
          summary
          publishedAt
          updatedAt
          author {
            name
            avatar {
              url(transformation: {image: {resize: {height: 42, width: 42}}})
            }
          }
        }
      }
      
      `
		)
		.then((data) => {
			return data;
		});

	return {
		body
	};
}
