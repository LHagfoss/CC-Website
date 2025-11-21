import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

export const revalidate = 3600; 

// --- 1. Generer Statiske Stier (SSG) ---
export async function generateStaticParams() {
  // Henter kun sluggen for å bygge stier
  const posts = await client.fetch<Array<{ slug: string }>>(
    `*[_type == "bloggPost" && defined(slug.current)][].slug.current`
  );

  // Hvis posts returnerer en array av strenger (pga projeksjonen over)
  // eller en array av objekter, må vi håndtere det riktig. 
  // Groq-spørringen over returnerer direkte en array av strenger ["slug1", "slug2"] hvis vi bruker [].slug.current
  
  // For sikkerhets skyld, la oss bruke den trygge varianten som matcher din originale struktur litt mer:
  const slugs = await client.fetch(
    `*[_type == "bloggPost" && defined(slug.current)]{ "slug": slug.current }`
  );

  if (!slugs) return [];

  return slugs.map((post: { slug: string }) => ({
    slug: post.slug, 
  }));
}

// --- Hjelpefunksjon for Sanity-bilder ---
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// --- Hent data for én enkelt side ---
async function getPost(slug: string) {
  // VIKTIG RETTELSE: Endret fra "blogPost" til "bloggPost" for å matche skjemaet ditt
  const query = `*[_type == "bloggPost" && slug.current == $slug][0] {
    title,
    date,
    image,
    ingress,
    content
  }`;

  const post = await client.fetch(query, { slug });
  return post;
}

// --- 2. Sidekomponenten (Page) ---
export default async function BloggPostPage({ params }: { params: { slug: string } }) { 
  const { slug } = params; // Pakk ut slug
  const post = await getPost(slug);

  if (!post) {
    return (
        <main className="w-full min-h-screen flex items-center justify-center bg-white pt-48">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-primary-text">Innlegg ikke funnet</h1>
                <p className="text-secondary-text">Vi fant dessverre ikke blogginnlegget du lette etter.</p>
            </div>
        </main>
    );
  }

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <article className="max-w-3xl mx-auto py-16 px-4 pt-48">
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
          {post.title}
        </h1>

        <p className="text-lg text-secondary-text/70 mb-4">
          {new Date(post.date).toLocaleDateString('nb-NO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        
        {post.ingress && (
          <p className="text-xl text-secondary-text mb-8 leading-relaxed">
            {post.ingress}
          </p>
        )}

        {post.image && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={urlFor(post.image).width(1200).height(800).url()}
              alt={post.title || 'Blogginnlegg bilde'}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-secondary-text prose-headings:text-primary-text prose-a:text-accent">
          <PortableText value={post.content} />
        </div>

      </article>
    </main>
  );
}