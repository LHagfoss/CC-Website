import Attester from '@/components/Attester';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { relative } from 'path';
import { RiDoubleQuotesR } from "react-icons/ri";
import profilbilde1 from '../../../../public/images/portrettbilde1.png';
import profilbilde2 from '../../../../public/images/portrettbilde2.png';



// Filnavnet bør være 'page.tsx' hvis den ligger i 'om-oss'-mappen
export default async function Page() {
    // Vi henter oversettelser fra "common"-nøkkelen, som avtalt
    const t = await getTranslations('common');

    return (

        <main className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="w-full relative ">
                <div className="relative w-full py-40 flex items-center justify-center">
                    <div className="absolute inset-0">
                        <Image

                            src="/images/Tor-Einar-PT-Mage.png"
                            alt={t('omOss.hero.imageAlt')}
                            className="w-full h-full object-cover fixed"
                            width={1920}
                            height={1080}
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    <div className="relative z-10 w-full flex flex-col justify-center px-8 md:px-16 lg:px-32 max-w-[1400px]">
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
                            {t('omOss.hero.heading')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white max-w-4xl mb-6 leading-relaxed">
                            {t('omOss.hero.subheading1')}
                        </p>
                        <p className="text-lg md:text-xl text-white max-w-4xl leading-relaxed">
                            {t('omOss.hero.subheading2')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Om Grunnleggeren Section */}
            <section className="w-full relative bg-neutral-200 py-24">
                <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="flex justify-center md:justify-start">
                            <div className="relative w-full max-w-md drop-shadow-[0_0_5px_rgba(0,0,0,0.40)]">
                                <Image
                                    src="/images/DSC02627-scaled.jpg"
                                    alt={t('omOss.founder.imageAlt')}
                                    className="rounded-2xl w-full "
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-2xl font-extrabold text-primary-text mb-8">
                                {t('omOss.founder.heading')}
                            </h2>
                            <div className="space-y-6 text-2xl text-secondary-text/60 font-normal">
                                <p>
                                    {t('omOss.founder.bio1')}
                                </p>

                                <p>
                                    {t('omOss.founder.bio2')}
                                </p>
                            </div>

                            <button className="mt-8 bg-accent text-white px-6 py-3 rounded-full font-semibold transition-all duration-700 hover:bg-accent/10">
                                {t('omOss.founder.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vårt oppdrag Section */}
            <section className="w-full relative bg-white py-24">
                <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl md:text-2xl font-extrabold text-primary-text mb-8">
                                {t('omOss.mission.heading')}
                            </h2>
                            <div className="space-y-6 text-2xl text-secondary-text/60 font-normal ">
                                <p>
                                    {t('omOss.mission.text1')}
                                </p>

                                <p>
                                    {t('omOss.mission.text2')}
                                </p>

                                <p>
                                    {t('omOss.mission.text3')}
                                </p>

                                <p>
                                    {t('omOss.mission.text4')}
                                </p>

                                <p>
                                    {t('omOss.mission.text5')}
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-end">
                            <div className="relative w-full max-w-md drop-shadow-[0_0_5px_rgba(0,0,0,0.40)]">
                                <Image
                                    src="/images/dsc02861-scaled.jpg"
                                    alt={t('omOss.mission.imageAlt')}
                                    className="rounded-2xl w-full"
                                    width={1080}
                                    height={1920}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vitenskapen bak CoreCapacity Section */}
            <section className='relative bg-white'>
                <div className="w-full relative bg-accent/5 py-24">
                    <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="flex justify-center md:justify-start order-2 md:order-1">
                                <div className="relative w-full max-w-md">
                                    <Image
                                        src="/images/tor-einar-trener-yogaball-bein-scaled.png"
                                        alt={t('omOss.science.imageAlt')}
                                        className="rounded-2xl shadow-xl w-full"
                                        width={1920}
                                        height={1080}
                                    />
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <h2 className='text-2xl md:text-2xl font-extrabold mb-8'>
                                    <span className="text-primary-text mb-8">
                                        {t('omOss.science.heading')}
                                    </span>
                                    <span className="text-accent">{t('omOss.science.heading2')}</span>
                                </h2>

                                <div className="space-y-6 text-2xl text-secondary-text/60 font-normal">
                                    <p>
                                        {t('omOss.science.text1')}
                                    </p>

                                    <p>
                                        {t('omOss.science.text2')}
                                    </p>
                                </div>

                                <button className="mt-8 bg-accent text-white px-6 py-3 rounded-full font-semibold transition-all duration-700 hover:bg-accent/10">
                                    {t('omOss.science.button')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full relative bg-white py-24">
                <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
                    <div className="text-center mb-16">
                        <p className="text-xl tracking-wider uppercase">{t('omOss.testimonials.preHeading')}</p>

                        <h2 className="text-4xl md:text-4xl font-extrabold">
                            <span className='text-primary-text/90'>
                                {t('omOss.testimonials.heading')}
                            </span>
                            <span className="text-accent/90">
                                {t('omOss.testimonials.heading2')}
                            </span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">


                        <Attester
                            src={profilbilde1}
                            t={t}
                            name="omOss.testimonials.t1.name"
                            quote="omOss.testimonials.t1.quote"
                            title="omOss.testimonials.t1.title"
                        />

                        <Attester
                            t={t}
                            name="omOss.testimonials.t2.name"
                            quote="omOss.testimonials.t2.quote"
                            title="omOss.testimonials.t2.title"
                        />

                        <Attester
                            src={profilbilde2}
                            t={t}
                            name="omOss.testimonials.t3.name"
                            quote="omOss.testimonials.t3.quote"
                            title="omOss.testimonials.t3.title"
                        />



                    </div>
                </div>
            </section>
        </main>

    );
}