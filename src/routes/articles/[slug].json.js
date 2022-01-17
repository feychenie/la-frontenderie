import { slugFromPath } from '$lib/util.js';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params }) {
	const modules = import.meta.glob(`./*.{md,svx,svelte.md}`);

	let match;

	for (const [path, resolver] of Object.entries(modules)) {
		console.log(slugFromPath(path), params.slug);
		if (slugFromPath(path) === params.slug) {
			match = [path, resolver];
			break;
		}
	}

	if (!match) {
		return {
			status: 404
		};
	}

	const post = await match[1]();

	return {
		body: post.metadata
	};
}
