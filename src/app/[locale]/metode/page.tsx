import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import baackround from "../../../../public/images/Jente-trener-Roing-gym.png";
import manWorkout from "../../../../public/images/tor-einar-mage-trening-scaled.png";
import illustration from "../../../../public/images/corecapacitysketch.png";

export default async function Metode() {
    const t = await getTranslations('metode');

    return (
        <div className="bg-[#EFF2F1] min-h-screen">
            <section className="relative w-full h-[40vh] min-h-[350px]">
                <Image
                    src={baackround}
                    alt="header background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-md">
                        {t('heroTitle')} <br />
                        {t('heroDrivenBy')} <span className="text-[#86D1B8]">{t('science')}</span>
                    </h1>
                    <p className="text-gray-100 mt-3 text-base md:text-lg max-w-2xl drop-shadow-md">
                        {t('heroSubtitle')}
                    </p>
                </div>
            </section>

            {/* --- HOVEDINNHOLD --- */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">

                    <div className="mb-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {t('researchTitle')}
                        </h2>
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>{t('researchP1')}</p>
                            <p>{t('researchP2')}</p>
                        </div>
                    </div>

                    <div className="relative bg-white rounded-[2rem] p-8 md:p-12 shadow-lg mb-20 max-w-4xl mx-auto">
                        <div className="hidden md:block absolute bottom-[-20px] left-20 w-0 h-0 border-l-[20px] border-l-transparent border-t-[25px] border-t-white border-r-[20px] border-r-transparent"></div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                            {t('benefitsTitle')}
                        </h3>
                        <ul className="space-y-6 text-lg text-gray-700">
                            <li className="flex items-start"><span className="mr-3 mt-2 h-1.5 w-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span><strong className="text-gray-900">{t('benefit1Title')}:</strong> {t('benefit1Desc')}</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-2 h-1.5 w-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span><strong className="text-gray-900">{t('benefit2Title')}:</strong> {t('benefit2Desc')}</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-2 h-1.5 w-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span><strong className="text-gray-900">{t('benefit3Title')}:</strong> {t('benefit3Desc')}</span></li>
                            <li className="flex items-start"><span className="mr-3 mt-2 h-1.5 w-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span><strong className="text-gray-900">{t('benefit4Title')}:</strong> {t('benefit4Desc')}</span></li>
                        </ul>
                    </div>

                    <div className="mb-24 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {t('salutoTitle')}
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {t('salutoP1')}
                        </p>
                    </div>

                    <div className="mb-24 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
                            {t('videoTitle')}
                        </h2>

                        <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-3xl shadow-xl overflow-hidden">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                preload="metadata"
                            >

                                <source src="/videos/2-mobil-app-corecapacity-_3.mp4" type="video/mp4" />
                                Din nettleser støtter ikke videoavspilling.
                            </video>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                {t('connectionsTitle')}
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>{t('connectionsP1')}</p>
                                <p>{t('connectionsP2')}</p>
                            </div>
                        </div>
                        <div className="relative w-full h-[300px] md:h-[400px]">
                            <Image src={illustration} alt="Illustrasjon av mann" fill className="object-contain" />
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-lg mb-24 relative">
                        <div className="hidden md:block absolute bottom-[-20px] right-20 w-0 h-0 border-r-[20px] border-r-transparent border-t-[25px] border-t-white border-l-[20px] border-l-transparent"></div>

                        <ul className="space-y-6 text-lg text-gray-700">
                            <li className="flex items-start">
                                <span className="font-bold text-gray-900 mr-2">2.</span>
                                <span>
                                    <strong className="text-gray-900">{t('strategy1Title')}:</strong> {t('strategy1Desc')}
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-gray-900 mr-2">3.</span>
                                <span>
                                    <strong className="text-gray-900">{t('strategy2Title')}:</strong> {t('strategy2Desc')}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-24 max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            {t('usabilityTitle')}
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {t('usabilityText')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div className="relative w-full h-[300px] lg:h-[400px] shadow-xl rounded-2xl overflow-hidden">
                            {/* Husk å bruke riktig bildevariabel her */}
                            <Image src={manWorkout} alt="Utendørs trening" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                {t('dataTitle')}
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                {t('dataText')}
                            </p>
                            <div>
                                <Link href="/Litteraturliste" className="inline-block bg-[#2f5e43] hover:bg-[#244a33] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md">
                                    {t('literatureBtn')}
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}