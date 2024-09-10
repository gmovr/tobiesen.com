import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const blogCollection = await getCollection("blog");
  return rss({
    title: "Tobiesen.com",
    description: "Personal website of Even Tobiesen",
    site: context.site ?? "",
    items: blogCollection.map((item) => ({
      title: item.data.title,
      pubDate: item.data.publishedDate,
      link: `${item.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
