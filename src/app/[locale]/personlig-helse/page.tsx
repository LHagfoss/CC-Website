import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import baackround from "../../../../public/images/tor-Einar-trener-seler-sideplanke-scaled.png"
import gutter from "../../../../public/images/gutter-klar-for-kayaking.png"
import yogaball from "../../../../public/images/tor-einhar-holder-yogaball.png"


export default async function PersonligHelse() {
    const t = await getTranslations('helse');

    return (
        <div className="bg-white ">
            <section className="relative w-full h-[40vh] min-h-[350px] ">
                <Image
                    src={baackround}
                    alt="header background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-white/40"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                        {t('heroTitle')} <br />
                        {t('heroDrivenBy')} <span className="text-accent">{t('science')}</span>
                    </h1>
                    <p className="text-gray-200 mt-3 text-base md:text-lg max-w-2xl">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                        {t('sectionTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 md:p-8 shadow-sm">
                            <p className="text-gray-700 leading-relaxed">{t('missionText')}</p>
                        </div>
                        <div className="bg-white p-6 md:p-8 shadow-sm">
                            <p className="text-gray-700 leading-relaxed">{t('benefitsText')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="relative w-full h-[400px] lg:h-[550px] shadow-xl rounded-lg overflow-hidden">
                            <Image src={yogaball} alt="Trening med ball" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                {t('trainingTitle')}
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>{t('trainingP1')}</p>
                                <p>{t('trainingP2')}</p>
                                <p>{t('trainingP3')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="text-gray-600 text-base md:text-lg max-w-5xl leading-relaxed">
                            {t('trainingSummary')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                {t('healthTitle')}
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>{t('healthP1')}</p>
                                <p>{t('healthP2')}</p>
                            </div>
                        </div>
                        <div className="relative w-full h-[400px] lg:h-[500px] shadow-xl rounded-lg overflow-hidden order-1 lg:order-2">
                            <Image src={gutter} alt="Helse og fellesskap" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="pt-8 border-t border-gray-200">
                        <p className="text-gray-600 text-base md:text-lg max-w-5xl leading-relaxed mb-8">
                            {t('healthSummary')}
                        </p>
                        <Link href="/Litteraturliste" className="inline-block bg-[#1e5e32] hover:bg-[#164a26] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
                            {t('literatureBtn')}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container mx-auto px-4 md:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

                        <div className="relative w-full h-[400px] lg:h-[500px] shadow-xl rounded-lg overflow-hidden">
                            <Image
                                src={baackround}
                                alt="Tor Einar instruerer i seler"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                {t('levelsTitle')}
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {t('levelsIntro')}
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm bg-white max-w-5xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-10">
                            {t('levelsBoxTitle')}
                        </h3>

                        <div className="space-y-8 text-left md:text-center text-gray-700 text-lg leading-relaxed">
                            <p>{t('level1')}</p>
                            <p>{t('level2')}</p>
                            <p>{t('level3')}</p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <p className="text-gray-600 italic text-base md:text-lg">
                                {t('levelsSummary')}
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}