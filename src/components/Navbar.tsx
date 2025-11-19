import Image from "next/image"
import logo from "../../public/images/CoreCapacity_logo_uten_motto-24.febr-2025-1-1.png"
import Link from "next/link"
import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "./LanguageSwitcher";
export default async function Navbar() {

    const t = await getTranslations('navbar');

    return (
        <nav className="fixed top-0 right-0 left-0 bg-white w-full z-50 flex justify-center items-center">
            <div className=" flex justify-between items-center w-full ">
                <Link href={"/"}><Image className="h-21 w-21" src={logo} alt="logo" /></Link>

                <div className="pr-6 flex gap-4 font-bold items-center ">
                    <LanguageSwitcher />
                    <Link href={"/"}>{t("home")} </Link>
                    <Link href={"/"}>{t("about_us")} </Link>
                    <Link href={"/"}>{t("contact")} </Link>

                    <Link className="bg-accent hover:bg-accent/65 transition shadow-2xl rounded-lg text-white py-2 px-4" href={"/"}>{t("download")} </Link>


                </div>
            </div>


        </nav>
    )
}