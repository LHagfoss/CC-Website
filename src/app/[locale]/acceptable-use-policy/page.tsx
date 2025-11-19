import { getTranslations } from "next-intl/server";

export default async function AcceptableUsePolicy() {
    const t = await getTranslations('aup');

    return (
        <div className="flex justify-center items-center min-h-[70vh] py-20 bg-gray-50">
            <div className="max-w-xl w-full p-8 md:p-12 bg-white shadow-xl rounded-xl text-center">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
                    {t('title')}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    {t('description')}
                </p>
            </div>
        </div>
    );
}
