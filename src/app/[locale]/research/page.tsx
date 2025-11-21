import { getTranslations, getLocale } from 'next-intl/server';
import { client } from '../../../../src/sanity/lib/client'; // Sjekk denne stien
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Importer komponentene
import EyebrowHeader from '../../../../src/components/EyeBrowHeader'; // Sjekk denne stien
import TextDivider from '@/components/TextDivider';
import BloggPostCard, { PostCardProps } from '@/components/BloggPostCard';

export const revalidate = 3600;

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// KORRIGERT: Rettet funksjonsnavn og query
async function getResearchEntries(locale: string): Promise<PostCardProps[]> {
  const query = `
    *[_type == "researchEntry" && language == $locale] | order(date desc) {
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

export default async function ResearchPage() { // KORRIGERT: Endret navn
  const t = await getTranslations('common');
  const locale = await getLocale();
  const posts = await getResearchEntries(locale); // KORRIGERT: Kaller riktig funksjon

  const formattedPosts = posts.map(post => ({
    ...post,
    imageUrl: post.image ? urlFor(post.image).width(800).height(600).url() : '/images/placeholder.jpg',
  }));

  return (
    <main className="w-full overflow-x-hidden bg-background">
      <section className="w-full relative bg-background py-24 pt-48">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          
          <div className="mb-16">
            <EyebrowHeader text={t('research.eyebrow')} />
            <div className="max-w-lg mx-auto">
              <TextDivider text={t('research.title')} size="medium" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {formattedPosts.map((post) => (
              <BloggPostCard
                key={post._id}
                post={post}
                readMoreText={t('research.readMore')}
                baseUrl="research" // KORRIGERT: baseUrl
              />
            ))}
          </div>

          {formattedPosts.length === 0 && (
            <p className="text-center text-secondary-text col-span-full">
              {t('research.noPosts')} {/* Bruker oversettelse */}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}