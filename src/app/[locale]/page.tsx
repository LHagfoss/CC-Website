import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import BackgroundImage from "../../../public/images/Jente-trener-Roing-gym.png"
import cultivaimage from "../../../public/images/cultiva.jpg"
import uiaimage from "../../../public/images/motion-lab.png"
import olympiatoppenimage from "../../../public/images/olympiatoppen.jpg"
import fylkeskomuneimage from "../../../public/images/agder.jpg"
import SupporterLogo from '@/components/SupportLogo';
import FeatureCard from '@/components/featurecard';
import yogaball from "../../../public/images/tor-einhar-holder-yogaball-cropped.png"
import kayaking from "../../../public/images/gutter-klar-for-kayaking.png"
import forklarer from "../../../public/images/tor-einar-forklarer-ovelse.png"
import mage from "../../../public/images/Tor-Einar-PT-Mage.png"
import mobil from "../../../public/images/mobil.png"


export default async function Page() {
  const t = await getTranslations('home');

  return (
    
    <main className='w-full h-full relative'>
      <Image
        className='fixed h-screen w-screen object-cover'
        src={BackgroundImage}
        alt='bakgrundbilde til les mer om vår metode '
        width={1920}
        height={1080}
      />

      <section className="relative z-10 w-full h-120 overflow-hidden">

        <video
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-1"
          src="/videos/sequence-01.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-white opacity-40 z-20"></div>

        <div className="absolute top-1/2 left-[10%] -translate-y-1/2 z-30 max-w-xl text-white text-left">

          <h1 className="text-4xl font-bold mb-4 text-shadow-lg">
            {t('hero.title')}
          </h1>

          <p className="text-lg mb-8">
            {t('hero.description')}
          </p>

          <Link
            href="/download-app"
            className="inline-block px-6 py-3 bg-accent hover:bg-accent/50 text-white font-bold rounded shadow transition duration-200">
            {t('hero.download_app')}
          </Link>
        </div>
      </section>

      <section className='relative z-10'>
        <div className="bg-gray-100 w-full py-16 px-4 md:px-20">
          <h2 className="text-center text-2xl font-medium text-black-600 mb-12 tracking-widest">
            {t('cards.title')}
          </h2>

          <div className="text-center flex flex-col md:flex-row justify-between gap-16 ">
            <FeatureCard
              titleKey="cards.card1.title"
              descriptionKey="cards.card1.description"
              imagePath={yogaball}
              t={t}
            />
            <FeatureCard
              titleKey="cards.card2.title"
              descriptionKey="cards.card2.description"
              imagePath={kayaking}
              t={t}
            />
            <FeatureCard
              titleKey="cards.card3.title"
              descriptionKey="cards.card3.description"
              imagePath={mage}
              t={t}           />
          </div>
        </div>

        <div className="bg-white py-20 px-4 md:px-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src={forklarer}
                alt={t('about.image_alt')}
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 text-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{t('about.title')}</h3>
              <p className="mb-4 text-sm">
                {t("about.p1")}
              </p>
              <p className="mb-4 text-sm">
                {t('about.p2')}
              </p>
              <p className="text-sm">
                {t('about.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='relative'>

        <div className=' bg-white/24 w-full py-8 px-4 relative z-10'>

          <div className="  container mx-auto  relative z-10">

            <h2 className=" text-2xl  text-white mb-12 tracking-normal font-bold">
              {t('cta.title')}
            </h2>

            <p className='text-xl font-medium text-white mb-6 tracking-normal'>
              {t('cta.p1')}
            </p>

            <p className='text-xl font-medium text-white mb-6 tracking-normal'>
              {t('cta.p2')}
            </p>

            <Link
              href="/read-more"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent/50 text-white font-bold  transition duration-200 rounded-2xl">
              {t('cta.read_more')}
            </Link>
          </div>

        </div>
      </section>


      <section className='relative'>
        <div className="bg-white w-full py-8 px-4 md:px-0 relative z-10">
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-2">

            <div className="w-full md:w-7/13 text-gray-700 md:text-left text-center">

              <h2 className="text-base font-bold mb-3 text-black">
                {t('app_mockup.title')}
              </h2>

              <p className="mb-2 text-md font-bold">
                {t('app_mockup.p1')}
              </p>
              <p className="mb-2 text-md">
                {t('app_mockup.p2')}
              </p>
              <p className="mb-4 text-md">
                {t('app_mockup.p3')}
              </p>

              <Link
                href="/download-app"
                className="inline-block px-4 py-2 bg-accent hover:bg-accent/70 text-white font-bold rounded-2xl shadow transition duration-200">
                {t('app_mockup.download')}
              </Link>
            </div>
            <div className="w-full md:w-5/12 flex justify-center md:justify-start">
              <Image
                src={mobil}
                alt={t('app_mockup.title')}
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className='bg-gray-200 w-full py-4 px-10 relative z-10'>
          <section className="bg-gray-200 py-4 px-4 md:px-20">
            <div className="max-w-6xl mx-auto xl:flex  grid grid-cols-2 justify-around items-start gap-8">
              <SupporterLogo
                t={t}
                src={cultivaimage}
                alt={t('supporters.cultiva_alt')}
                labelKey={'home.supporters.cultiva'}
                
              />
              <SupporterLogo
                t={t}
                src={uiaimage}
                alt={t('supporters.uia_alt')}
                labelKey={'home.supporters.uia'}
                
              />
              <SupporterLogo
                t={t}
                src={olympiatoppenimage}
                alt={t('supporters.olympia_alt')}
                labelKey={'home.supporters.olympia'}
                
              />
              <SupporterLogo
                t={t}
                src={fylkeskomuneimage}
                alt={t('supporters.agder_kommune_alt')}
                labelKey={'home.supporters.agder_kommune'}
                
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
