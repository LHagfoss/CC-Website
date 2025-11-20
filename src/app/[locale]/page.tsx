import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import SupporterLogo from '@/components/SupportLogo';
import FeatureCard from '@/components/featurecard';
import BackgroundImage from '../../../public/images/Jente-trener-Roing-gym.png';
import cultivaimage from '../../../public/images/cultiva.jpg';
import uiaimage from '../../../public/images/motion-lab.png';
import olympiatoppenimage from '../../../public/images/olympiatoppen.jpg';
import fylkeskomuneimage from '../../../public/images/agder.jpg';
import yogaball from '../../../public/images/tor-einhar-holder-yogaball-cropped.png';
import kayaking from '../../../public/images/gutter-klar-for-kayaking.png';
import forklarer from '../../../public/images/tor-einar-forklarer-ovelse.png';
import mage from '../../../public/images/Tor-Einar-PT-Mage.png';
import mobil from '../../../public/images/mobil.png';

export default async function Page() {
  const t = await getTranslations('home');

  const features = [
    { id: 'card1', img: yogaball },
    { id: 'card2', img: kayaking },
    { id: 'card3', img: mage },
  ];

  const supporters = [
    { img: cultivaimage, key: 'cultiva' },
    { img: uiaimage, key: 'uia' },
    { img: olympiatoppenimage, key: 'olympia' },
    { img: fylkeskomuneimage, key: 'agder_kommune' },
  ];

  return (
    <main className="relative h-full w-full">
      {/* Fixed Background */}
      <Image
        className="fixed h-screen w-screen object-cover"
        src={BackgroundImage}
        alt="bakgrundbilde til les mer om vår metode"
        placeholder="blur"
        priority
      />

      {/* Hero Section */}
      <section className="relative z-10 h-120 w-full overflow-hidden">
        <video
          className="absolute left-1/2 top-1/2 z-0 h-auto min-h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src="/videos/sequence-01.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 z-20 bg-white opacity-40" />

        <div className="absolute left-[10%] top-1/2 z-30 max-w-xl -translate-y-1/2 text-left text-white">
          <h1 className="text-shadow-lg mb-4 text-4xl font-bold">
            {t('hero.title')}
          </h1>
          <p className="mb-8 text-lg">{t('hero.description')}</p>
          <Link
            href="/download-app"
            className="inline-block rounded bg-accent px-6 py-3 font-bold text-white shadow transition duration-200 hover:bg-accent/50"
          >
            {t('hero.download_app')}
          </Link>
        </div>
      </section>

      {/* Features / Cards Section */}
      <section className="relative z-10">
        <div className="w-full bg-gray-100 px-4 py-16 md:px-20">
          <h2 className="mb-12 text-center text-2xl font-medium tracking-widest text-gray-800">
            {t('cards.title')}
          </h2>

          <div className="flex flex-col justify-between gap-16 text-center md:flex-row">
            {features.map((feature) => (
              <Link
                key={feature.id}
                href="dynamsike-ovelser"
                className="block w-full cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <FeatureCard
                  titleKey={`cards.${feature.id}.title`}
                  descriptionKey={`cards.${feature.id}.description`}
                  imagePath={feature.img}
                  t={t}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white px-4 py-20 md:px-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 md:flex-row">
            <div className="w-full md:w-1/2">
              <Image
                src={forklarer}
                alt={t('about.image_alt')}
                className="h-auto w-full rounded-xl object-cover shadow-xl"
              />
            </div>

            <div className="w-full text-gray-700 md:w-1/2">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {t('about.title')}
              </h3>
              <p className="mb-4 text-sm">{t('about.p1')}</p>
              <p className="mb-4 text-sm">{t('about.p2')}</p>
              <p className="text-sm">{t('about.p3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full bg-white/25 px-4 py-8">
        <div className="container relative z-10 mx-auto">
          <h2 className="mb-12 text-2xl font-bold tracking-normal text-white">
            {t('cta.title')}
          </h2>
          <p className="mb-6 text-xl font-medium tracking-normal text-white">
            {t('cta.p1')}
          </p>
          <p className="mb-6 text-xl font-medium tracking-normal text-white">
            {t('cta.p2')}
          </p>
          <Link
            href="/read-more"
            className="inline-block rounded-2xl bg-accent px-6 py-3 font-bold text-white transition duration-200 hover:bg-accent/50"
          >
            {t('cta.read_more')}
          </Link>
        </div>
      </section>

      {/* App Mockup Section */}
      <section className="relative z-10 w-full bg-white px-4 py-8 md:px-0">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 md:flex-row">
          <div className="w-full text-center text-gray-700 md:w-7/12 md:text-left">
            <h2 className="mb-3 text-base font-bold text-black">
              {t('app_mockup.title')}
            </h2>
            <p className="text-md mb-2 font-bold">{t('app_mockup.p1')}</p>
            <p className="text-md mb-2">{t('app_mockup.p2')}</p>
            <p className="text-md mb-4">{t('app_mockup.p3')}</p>

            <Link
              href="/download-app"
              className="inline-block rounded-2xl bg-accent px-4 py-2 font-bold text-white shadow transition duration-200 hover:bg-accent/70"
            >
              {t('app_mockup.download')}
            </Link>
          </div>
          <div className="flex w-full justify-center md:w-5/12 md:justify-start">
            <Image
              src={mobil}
              alt={t('app_mockup.title')}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="relative z-10 w-full bg-gray-200 px-4 py-8 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 items-start justify-around gap-8 xl:flex">
          {supporters.map((supporter) => (
            <SupporterLogo
              key={supporter.key}
              src={supporter.img}
              alt={`home.supporters.${supporter.key}`}
              labelKey={`home.supporters.${supporter.key}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}