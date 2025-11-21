import Image from 'next/image';
import Link from 'next/link';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { client } from '../../src/sanity/lib/client'; // Sjekk denne stien
import imageUrlBuilder from '@sanity/image-url';

// Definerer hva slags data kortet forventer
// Vi eksporterer denne for å gjenbruke den på listesidene
export interface PostCardProps {
  _id: string;
  title: string;
  slug: string; // Vi forventer nå den ekte slug-en
  image: string;
  date: string;
  ingress: string;
  language: 'no' | 'en';
}



interface BloggPostCardComponentProps {
  post: PostCardProps;
  readMoreText: string;
  baseUrl: 'blogg' | 'research'; // Endret 'blogg' til 'blog'
}

const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}


export default function BloggPostCard({ post, readMoreText, baseUrl }: BloggPostCardComponentProps) {
  // Formaterer datoen
  const formattedDate = new Date(post.date).toLocaleDateString(post.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link 
      // KORRIGERT: Bruker nå post.slug direkte
      href={`/${baseUrl}/${post.slug}`} 
      className="group bg-white rounded-[2.5rem] border-2 border-accent/50 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
    >
      {/* Bilde */}
      <div className="relative w-full h-56">
        <Image
          src={urlFor(post.image).width(1200).height(800).url()}
          alt={post.title}
          fill // Bruk 'fill' i stedet for 'layout="fill"'
          style={{ objectFit: "cover" }} // Bruk 'style' i stedet for 'objectFit'
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Innhold */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-primary-text mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-secondary-text/60 mb-4">
          {formattedDate}
        </p>
        <p className="text-secondary-text/80 leading-relaxed mb-6 flex-grow">
          {post.ingress}
        </p>
        
        {/* Les mer-knapp */}
        <div className="mt-auto">
          <span className="font-bold text-accent">
            {readMoreText} &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}