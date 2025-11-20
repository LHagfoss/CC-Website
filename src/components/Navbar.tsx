import { getTranslations } from "next-intl/server";
import NavbarClient from "./NavbarClient";
import LanguageSwitcher from "./LanguageSwitcher"; // We import it here

export default async function Navbar() {
    const t = await getTranslations('navbar');

    const text = {
        home: t("home"),
        about_us: t("about_us"),
        contact: t("contact"),
        download: t("download"),
    };

    return (
        <NavbarClient text={text}>
            <LanguageSwitcher />
        </NavbarClient>
    );
}