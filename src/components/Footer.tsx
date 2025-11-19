import Link from "next/link"
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import logo from "../../public/images/CoreCapacity_logo-24.febr-2025-1-1.png"
import appstore from "../../public/images/app-store.png"
import googleplay from "../../public/images/google-play.png"
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';


const IconPlaceholder = () => <div className="h-6 w-6 bg-gray-600 rounded-sm"></div>;

export default async function Footer() {
    const t = await getTranslations('footer');

    return (
        <footer className="bg-green-950 text-white w-full py-2.5 scale-z-10 flex-8 bottom-0 justify-center items-center ">
            <div className="max-w-7xl mx-auto px-4 py-26 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <div className="">
                            <Image className=" rounded-2xl h-33 w-auto  flex items-center justify-center text-sm font-bold" src={logo} alt="logo" />
                        </div>
                    </div>

                    <div className="space-y-4 ">
                        <Link href="/support" className=" block text-lg text-gray-300 hover:text-accent transition">{t('support')}</Link>
                        <Link href="/terms" className="block text-lg text-gray-300 hover:text-accent transition">{t('terms')}</Link>
                        <Link href="/privacy" className="block text-lg text-gray-300 hover:text-accent transition">{t('privacy')}</Link>
                        <Link href="/aup" className="block text-lg text-gray-300 hover:text-accent transition">{t('use_policy')}</Link>
                        <Link href="/contact" className="block text-lg text-gray-300 hover:text-accent transition">{t('contact')}</Link>
                    </div>

                    <div className="flex flex-col items-start md:items-end space-y-6">
                        <div className="flex flex-col space-y-3">
                            <Link href="#" rel="noopener noreferrer">
                                <div className="">
                                    <Image className=" rounded-2xl h-17 w-auto  flex items-center justify-center text-sm font-bold" src={appstore} alt="logo" />
                                </div>
                            </Link>
                            <Link href="#"  rel="noopener noreferrer">
                                <div className="">
                                    <Image className=" rounded-2xl h-17 w-auto  flex items-center justify-center text-sm font-bold" src={googleplay} alt="logo" />
                                </div>
                            </Link>
                        </div>

                        <div className="flex space-x-4">
                            <FaYoutube className="text-white h-6 w-6" aria-label="YouTube" />
                            <FaInstagram className="text-white  h-6 w-6" aria-label="Instagram" />
                            <FaLinkedin className="text-white  h-6 w-6" aria-label="LinkedIn" />
                            <FaFacebook className="text-white  h-6 w-6" aria-label="Facebook" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}