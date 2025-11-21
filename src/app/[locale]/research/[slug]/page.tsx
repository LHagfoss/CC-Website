import { client } from '../../../../../src/sanity/lib/client'; // Sjekk denne stien
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

export const revalidate = 3600;

// --- 1. Generer Statiske Stier (SSG) ---
export async function generateStaticParams() {
  // KORRIGERT: Henter "researchEntry"
  const entries = await client.fetch<Array<{ slug: string }>>(
    `*[_type == "researchEntry" && defined(slug.current)][] { "slug": slug.current }`
  );

  if (!entries) {
    return [];
  }

  return entries.map((entry) => ({
    slug: entry.slug, // Returnerer { slug: "min-research" }
  }));
}

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// --- Hent data for én enkelt side ---
async function getResearchEntry(slug: string) {
  // KORRIGERT: Spørring for "researchEntry" med slug
  const query = `*[_type == "researchEntry" && slug.current == $slug][0] {
    title,
    date,
    image,
    ingress,
    content
  }`;

  const entry = await client.fetch(query, { slug });
  return entry;
}

// --- 2. Sidekomponenten (Page) ---
// KORRIGERT: params.title -> params.slug
export default async function ResearchPage({ params }: { params: { slug: string } }) {
  const entry = await getResearchEntry(params.slug); // Bruker params.slug

  if (!entry) {
    return <div>Innlegg ikke funnet.</div>;
  }

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* pt-48 for å gi plass til den faste navbar-en */}
      <article className="max-w-3xl mx-auto py-16 px-4 pt-48">
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
          {entry.title}
        </h1>

        <p className="text-lg text-secondary-text/70 mb-4">
          {new Date(entry.date).toLocaleDateString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        {entry.ingress && (
          <p className="text-xl text-secondary-text mb-8 leading-relaxed">
            {entry.ingress}
          </p>
        )}

        {entry.image && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlFor(entry.image).width(1200).height(800).url()}
              alt={entry.title || 'Research-bilde'}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-secondary-text">
          <PortableText value={entry.content} />
        </div>

      </article>
    </main>
  );
}