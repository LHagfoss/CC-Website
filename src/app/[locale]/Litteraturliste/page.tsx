import { getTranslations } from "next-intl/server";

export default async function LiteraturePage() {
    const t = await getTranslations('literature');

    return (
        <div className="  py-16 bg-white">
            <section className="bg-accent/5 w-full py-16 ">
                <h1 className="text-4xl font-extrabold mb-12 text-center text-accent">
                    {t('title')}
                </h1>
            </section>

            <div className="max-w-8xl w-full px-4 md:px-8">
                <div className="space-y-16 text-gray-800">

                    <section className="container mx-auto">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-900">
                            {t('ai')}
                        </h2>
                        <ul className="list-decimal list-inside space-y-3 pl-4 text-sm md:text-base">
                            <li className="text-gray-700">
                                R. Liu, R. Menhas, J. Dai, Z. A. Saqib, and X. Peng, “Fitness apps, live streaming workout classes, and virtual reality fitness for physical activity during the COVID-19 lockdown: An empirical study,” <i>Frontiers in Public Health</i>, vol. 10, Art. 852311, Jun. 2022. doi: 10.3389/fpubh.2022.852311.
                            </li>
                            <li className="text-gray-700">
                                M. Lee, H. Lee, Y. Kim, J. Kim, M. Cho, J. Jang, and H. Jang, “Mobile app-based health promotion programs: A systematic review of the literature,” <i>International Journal of Environmental Research and Public Health</i>, vol. 15, no. 12, p. 2838, Dec. 2018. doi: 10.3390/ijerph15122838.
                            </li>
                            <li className="text-gray-700">
                                European Commission, “Commission sets course for Europe’s AI leadership with an ambitious AI Continent Action Plan,” Press Release, Brussels, Apr. 9, 2025. [Online]. Available: <a href='https://ec.europa.eu/commission/presscorner/detail/en/ip_25_339' target='_blank' className='text-blue-600 hover:underline'>https://ec.europa.eu/commission/presscorner/detail/en/ip_25_339</a>.
                            </li>
                            <li className="text-gray-700">
                                Intellias, “Incorporating mHealth into preventive care,” Intellias, Jun. 18, 2020. [Online]. Available: <a href='https://www.intellias.com' target='_blank' className='text-blue-600 hover:underline'>https://www.intellias.com</a>.
                            </li>
                            <li className="text-gray-700">
                                Adesso SE, “Prevention apps and the German prevention guidelines,” <i>Adesso Whitepaper</i>, 2024. [Online]. Available on request from Adesso SE.
                            </li>
                            <li className="text-gray-700">
                                Vurderinger ift apper, “Vurderinger av apper ift funksjoner og anbefalinger,” <i>Internt notat basert på Lee et al. (2018)</i>, Okt. 2024.
                            </li>
                        </ul>
                    </section>

                    <section className="container mx-auto">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-900">
                            {t('helse')}
                        </h2>
                        <ul className="list-decimal list-inside space-y-3 pl-4 text-sm md:text-base">
                            <li className="text-gray-700">
                                E. Husabo, K. Ø. Støme, H. S. Riseang, R. S. Haugli, H. L. Holte, og K. I. Børve, “Protocol for the effect evaluation of independent medical evaluation after six months sick leave: a randomized controlled trial of independent medical evaluation versus treatment as usual in Norway,” <i>BMC Public Health</i>, vol. 17, Art. 573, Jul. 2017. doi: 10.1186/s12889-017-4486-1.
                            </li>
                            <li className="text-gray-700">
                                N. Hutting, J. B. Staal, J. A. Engels, Y. F. Heerkens, S. I. Detaille, og M. W. G. Nijhuis-van der Sanden, “Effect evaluation of a self-management programme for employees with complaints of the arm, neck or shoulder: a randomised controlled trial,” <i>Occupational and Environmental Medicine</i>, vol. 72, pp. 852–861, Sep. 2015. doi: 10.1136/oemed-2015-103089.
                            </li>
                            <li className="text-gray-700">
                                European Agency for Safety and Health at Work, “Germany: A systematic approach to preventing MSDs,” <i>Policy Case Study</i>, EU-OSHA, 2020. [Online]. Available: <a href='https://osha.europa.eu' target='_blank' className='text-blue-600 hover:underline'>https://osha.europa.eu</a>.
                            </li>
                            <li className="text-gray-700">
                                European Agency for Safety and Health at Work, “Germany: The preventive health care act and national prevention strategy,” <i>Case Study</i>, EU-OSHA, 2019. [Online]. Available: <a href='https://osha.europa.eu' target='_blank' className='text-blue-600 hover:underline'>https://osha.europa.eu</a>.
                            </li>
                            <li className="text-gray-700">
                                Health and Safety Executive, “Helping Great Britain Work Well: Strategy and tackling MSDs,” <i>Policy Case Study</i>, UK, 2020. [Online]. Available: <a href='https://www.hse.gov.uk' target='_blank' className='text-blue-600 hover:underline'>https://www.hse.gov.uk</a>.
                            </li>
                            <li className="text-gray-700">
                                Folkehelseinstituttet, <i>Folkehelserapporten 2022 – Helsetilstanden i Norge</i>, Oslo: FHI, 2022. [Online]. Tilgjengelig: <a href='https://www.fhi.no' target='_blank' className='text-blue-600 hover:underline'>https://www.fhi.no</a>.
                            </li>
                            <li className="text-gray-700">
                                P. S. Jacobsen Jardim, H. T. Nygård, A. E. Muller, I. Harboe, og H. H. Holte, <i>Forskning om tiltak for å redusere sykefravær i arbeidslivet: et forskningskart (oppdatering)</i>, Oslo: Folkehelseinstituttet, 2022. [Online]. Tilgjengelig: <a href='https://www.fhi.no' target='_blank' className='text-blue-600 hover:underline'>https://www.fhi.no</a>.
                            </li>
                            <li className="text-gray-700">
                                Nasjonalt kunnskapssenter for helsetjenesten, <i>Arbeidsrelatert sykefravær: tiltak og effekter</i>, Oslo: Nasjonalt kunnskapssenter for helsetjenesten, 2011.
                            </li>
                            <li className="text-gray-700">
                                NTB, “Sykelønna under press – i dag starter IA-forhandlingene,” <i>ABC Nyheter</i>, 9. sep. 2024. [Online]. Tilgjengelig: <a href='https://www.abcnyheter.no' target='_blank' className='text-blue-600 hover:underline'>https://www.abcnyheter.no</a>.
                            </li>
                            <li className="text-gray-700">
                                E. Maeland, H. B. Lillefjell, M. Haugli, H. Holte, og I. Harboe, “Evaluation of a guidelines implementation intervention to reduce work disability and sick leave: A cluster randomized trial,” <i>Scandinavian Journal of Work, Environment & Health</i>, 2022. doi: 10.5271/sjweh.4040.
                            </li>
                            <li className="text-gray-700">
                                Bundesministerium für Gesundheit, “Germany’s Preventive Health Care Act and National Prevention Strategy,” Publikasjon, Berlin, 2019. [Online]. Available: <a href='https://www.bundesgesundheitsministerium.de' target='_blank' className='text-blue-600 hover:underline'>https://www.bundesgesundheitsministerium.de</a>.
                            </li>
                            <li className="text-gray-700">
                                DGUV, “The prevention campaign of German Social Accident Insurance (DGUV) — ‘Think of me – your back’,” Germany, 2019. [Online]. Available: <a href='https://www.deinruecken.de' target='_blank' className='text-blue-600 hover:underline'>https://www.deinruecken.de</a>.
                            </li>
                            <li className="text-gray-700">
                                International Labour Organization, “The global economic burden of musculoskeletal disorders,” Geneva: ILO, 2019. [Online]. Available: <a href='https://www.ilo.org' target='_blank' className='text-blue-600 hover:underline'>https://www.ilo.org</a>.
                            </li>
                            <li className="text-gray-700">
                                World Health Organization, <i>Protecting Workers’ Health</i>, Geneva: WHO, 30 Nov. 2017. [Online]. Available: <a href='https://www.who.int' target='_blank' className='text-blue-600 hover:underline'>https://www.who.int</a>.
                            </li>
                            <li className="text-gray-700">
                                World Health Organization, <i>Rehabilitation 2030: A Call for Action</i>, Geneva: WHO, 2022. [Online]. Available: <a href='https://www.who.int' target='_blank' className='text-blue-600 hover:underline'>https://www.who.int</a>.
                            </li>
                        </ul>
                    </section>

                    <section className="container mx-auto">
                        <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-900">
                            {t('kjerne')}
                        </h2>
                        <ul className="list-decimal list-inside space-y-3 pl-4 text-sm md:text-base">
                            <li className="text-gray-700">
                                V. Akuthota and S. F. Nadler, “Core strengthening,” <i>Archives of Physical Medicine and Rehabilitation</i>, vol. 85, no. 3 Suppl 1, pp. S86–S92, Mar. 2004. doi: 10.1053/j.apmr.2003.12.005.
                            </li>
                            <li className="text-gray-700">
                                J. P. A. Arokoski, P. Arokoski, H. Valta, O. Leinonen, and M. Airaksinen, “Postural control in male patients with hip osteoarthritis,” <i>Gait & Posture</i>, vol. 23, no. 1, pp. 45–50, Jan. 2006. doi: 10.1016/j.gaitpost.2004.11.017.
                            </li>
                            <li className="text-gray-700">
                                J. A. Ashton-Miller, E. M. Wojtys, L. J. Huston, and D. Fry-Welch, “Can proprioception really be improved by exercises?,” <i>Knee Surgery, Sports Traumatology, Arthroscopy</i>, vol. 9, pp. 128–136, Mar. 2001. doi: 10.1007/s001670100208.
                            </li>
                            <li className="text-gray-700">
                                N. P. Assefi, K. J. Sherman, C. Jacobsen, J. Goldberg, and D. Buchwald, “A randomized clinical trial of acupuncture compared with sham acupuncture in fibromyalgia,” <i>Annals of Internal Medicine</i>, vol. 143, no. 1, pp. 10–19, Jul. 2005.
                            </li>
                            <li className="text-gray-700">
                                V. Baker, K. Bennell, B. Stillman, S. Cowan, and K. Crossley, “Abnormal knee joint position sense in individuals with patellofemoral pain syndrome,” <i>Journal of Orthopaedic Research</i>, vol. 20, no. 2, pp. 208–214, Mar. 2002.
                            </li>
                            <li className="text-gray-700">
                                P. J. Barker, K. T. Guggenheimer, I. Grkovic, C. A. Briggs, D. C. Jones, C. D. L. Thomas, and P. W. Hodges, “Effects of tensioning the lumbar fasciae on segmental stiffness during flexion and extension,” <i>Spine</i>, vol. 31, no. 4, pp. 397–405, Feb. 2006.
                            </li>
                            <li className="text-gray-700">
                                K. P. Barr, M. Griggs, and T. Cadby, “Lumbar stabilization: Core concepts and current literature, part 1,” <i>American Journal of Physical Medicine & Rehabilitation</i>, vol. 84, no. 6, pp. 473–480, Jun. 2005. doi: 10.1097/01.phm.0000163709.70471.42.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}