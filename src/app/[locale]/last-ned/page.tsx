import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import EyebrowHeader from '@/components/EyeBrowHeader';
import TextDivider from '@/components/TextDivider';
import DownloadButton from '@/components/DownloadButton';
import PlanCard from '@/components/PlanCard';
import FeatureCard1 from '@/components/FeatureCard1';

export default async function LastNedPage() {
    const t = await getTranslations('common');
    const features = t.raw('lastNed.features.items') as any[];
    const mockups = t.raw('lastNed.features.mockups') as any[];

    return (
        <main className="w-full overflow-x-hidden bg-background">
            {/* Hero Video */}
            <section className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden flex items-center justify-center">
                <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
                    <source src="/videos/Sequence-01.mp4" type="video/mp4" />
                    {t('lastNed.hero.imageAlt')}
                </video>
                <div className="absolute inset-0 bg-black/20 z-10"></div>
            </section>

            {/* SEKSJON 1: Hovedtittel (Stor), Enkel Telefon, Knapp */}
            <section className="w-full relative bg-white pt-16 pb-24">
                {/* Tittel-deler - Størrelse LARGE */}
                <div className="mb-12 px-4 md:px-8">
                    <TextDivider text={t('lastNed.divider1')} size="large" />
                </div>

                <div className="max-w-5xl mx-auto px-8 flex flex-col items-center justify-center">
                    {/* Enkel Telefon */}
                    <div className="w-full max-w-[screen] mb-12">
                        <Image
                            src="/images/iphone-mockup.png"
                            alt={t('lastNed.mockup.imageAlt')}
                            width={1200}
                            height={1200}
                            className="w-full h-auto object-contain drop-shadow-none"
                        />
                    </div>

                    {/* Egendefinert Nedlastingsknapp */}
                    <div className="-mt-8 relative z-20">
                        <DownloadButton text={t('lastNed.cta.button')} />
                    </div>
                </div>
            </section>

            {/* SEKSJON 2: Planer */}
            <section className="w-full relative bg-background py-24">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">

                    {/* Planer Header */}
                    <div className="mb-16">
                        {/* Liten tekst over */}
                        <EyebrowHeader text={t('lastNed.plans.title')} />

                        {/* Tittel-deler */}
                        <div className="mx-auto">
                            <TextDivider text={t('lastNed.plans.divider')} size="medium" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                        <PlanCard
                            level={t('lastNed.plans.plan1.level')}
                            title={t('lastNed.plans.plan1.title')}
                            description={t('lastNed.plans.plan1.description')}
                            features={t.raw('lastNed.plans.plan1.features')}
                            divider={t('lastNed.plans.divider')}
                        />
                        <PlanCard
                            level={t('lastNed.plans.plan2.level')}
                            title={t('lastNed.plans.plan2.title')}
                            description={t('lastNed.plans.plan2.description')}
                            features={t.raw('lastNed.plans.plan2.features')}
                            divider={t('lastNed.plans.divider')}
                        />
                        <PlanCard
                            level={t('lastNed.plans.plan3.level')}
                            title={t('lastNed.plans.plan3.title')}
                            description={t('lastNed.plans.plan3.description')}
                            features={t.raw('lastNed.plans.plan3.features')}
                            divider={t('lastNed.plans.divider')}
                        />
                    </div>
                </div>
            </section>

            {/* SEKSJON 3: Design / Mockups */}
            <section className="w-full relative bg-white pt-20 pb-32">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-16">

                    {/* Header */}
                    <div className="text-center mb-20">
                        {/* Eyebrow */}
                        <EyebrowHeader text={t('lastNed.features.title')} />

                        {/* Tittel-deler - Størrelse MEDIUM */}
                        <TextDivider
                            text={t('lastNed.features.title')}
                            size="medium"
                        />
                    </div>

                    {/* 3 Telefoner Grid */}
                    <div className="w-full my-16 relative">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
                            {/* Venstre Telefon */}
                            <div className="relative w-[70%] md:w-[32%] transform md:rotate-6 md:translate-y-16 z-10">
                                <Image src={mockups[0].src} alt={mockups[0].alt} width={600} height={1200} className="w-full h-auto drop-shadow-none" />
                            </div>
                            {/* Midterste Telefon */}
                            <div className="relative w-[75%] md:w-[34%] transform md:-rotate-6 z-20">
                                <Image src={mockups[1].src} alt={mockups[1].alt} width={600} height={1200} className="w-full h-auto drop-shadow-none" />
                            </div>
                            {/* Høyre Telefon */}
                            <div className="relative w-[70%] md:w-[32%] transform md:rotate-3 md:translate-y-16 z-10">
                                <Image src={mockups[2].src} alt={mockups[2].alt} width={600} height={1200} className="w-full h-auto drop-shadow-none" />
                            </div>
                        </div>
                    </div>

                    {/* SEKSJON 4: Funksjons-grid */}
                    <div className="mt-32">
                        <div className="mb-16">
                            {/* Eyebrow */}
                            <EyebrowHeader text={t('lastNed.features1.eyebrow')} />

                            {/* Tittel-deler - Størrelse MEDIUM */}
                            <TextDivider text={t('lastNed.features.divider')} size="medium" />
                        </div>

                        {/* ENDRET: Bruker <FeatureCard1 /> her */}
                        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-12">
                            {features.map((feature: any, index: number) => (
                                <FeatureCard1
                                    key={index}
                                    icon={feature.icon}
                                    iconAlt={feature.iconAlt}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}