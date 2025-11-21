import { getTranslations, getLocale } from 'next-intl/server';
import { client } from '@/sanity/lib/client'; 
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Komponenter
import EyebrowHeader from '@/components/EyeBrowHeader'; 
import TextDivider from '@/components/TextDivider';
import BloggPostCard, { PostCardProps } from '@/components/BloggPostCard';

export const revalidate = 3600;

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Henter alle blogginnlegg for det gitte språket
async function getBloggPosts(locale: string): Promise<PostCardProps[]> {
  const query = `
    *[_type == "bloggPost" && language == $locale] | order(date desc) {
      _id,
      title,
      "slug": slug.current, 
      date,
      image,
      ingress,
      language
    }
  `;
  const posts = await client.fetch(query, { locale });
  return posts;
}

export default async function BloggPage() {
  const t = await getTranslations('common');
  const locale = await getLocale(); // NB: I nyere Next-intl kan du kanskje bruke locale fra params direkte
  const posts = await getBloggPosts(locale);

  const formattedPosts = posts.map((post) => ({
    ...post,
    // Sjekker om bildet finnes før vi prøver å bygge URL
    imageUrl: post.image 
      ? urlFor(post.image).width(800).height(600).url() 
      : '/images/placeholder.jpg',
  }));

  return (
    <main className="w-full overflow-x-hidden bg-background">
      <section className="w-full relative bg-background py-24 pt-48">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          
          <div className="mb-16">
            <EyebrowHeader text={t('blogg.eyebrow')} />
            <div className="max-w-lg mx-auto">
              <TextDivider text={t('blogg.title')} size="medium" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {formattedPosts.map((post) => (
              <BloggPostCard
                key={post._id}
                post={post}
                readMoreText={t('blogg.readMore')}
                baseUrl="blogg" 
                
              />
            ))}
          </div>

          {formattedPosts.length === 0 && (
            <p className="text-center text-secondary-text col-span-full">
              {t('blogg.noPosts')}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}