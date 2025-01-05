import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: "Hamza's Astro Blog",
		description: 'A blog about learning Astro',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>en-us</language>`,
	});
}
