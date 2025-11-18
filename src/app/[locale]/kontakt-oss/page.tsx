import Image from 'next/image';
import { BsTelephone, BsEnvelope, BsGeoAlt } from 'react-icons/bs';
import { getTranslations } from 'next-intl/server';
// Filnavnet bør være 'page.tsx' hvis den ligger i 'om-oss'-mappen
export default async function Page() {
  // Vi henter oversettelser fra "common"-nøkkelen, som avtalt
  const t = await getTranslations('common');


    return (
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="w-full relative">
          <div className="relative w-full py-40 flex items-center justify-center">
            <div className="absolute inset-0">
              <Image
                // Path from the HTML's inline style
                src="/images/gutter-klar-for-kayaking.png"
                alt="Kajakk-padler på vannet"
                className="w-full h-full object-cover fixed"
                width={1920}
                height={1080}
                priority
              />
              {/* Overlay to match the inspiration file's style and HTML's contrast filter */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 w-full flex flex-col justify-center px-8 md:px-16 lg:px-32 max-w-[1400px]">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8">
                {t('kontakt.hero.heading')}
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mb-6 leading-relaxed">
                {t("kontakt.hero.subheading")}{' '}
                <a
                  href="mailto:support@corecapacity.com" // Corrected .con to .com
                  className="underline hover:text-gray-200 transition-colors"
                >
                  {t("kontakt.hero.subheading1")}
                </a>{' '}
                {t("kontakt.hero.subheading2")}
              </p>
            </div>
          </div>
        </section>

        {/* Form & Info Section */}
        <section className="w-full relative bg-background py-24">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-text mb-12">
              {t("kontakt.form.heading")}
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              {/* Column 1: Form */}
              <div className="w-full">
                <form
                  className="space-y-6"
                  method="post"
                  action="https://corecapacity.com/stg_8a8b7/?page_id=106"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="et_pb_contact_name_0" className="sr-only">
                        {t("kontakt.form.name")}
                      </label>
                      <input
                        type="text"
                        id="et_pb_contact_name_0"
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
                        name="et_pb_contact_name_0"
                        placeholder={t("kontakt.form.name")}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="et_pb_contact_email_0" className="sr-only">
                        {t("kontakt.form.email")}
                      </label>
                      <input
                        type="email"
                        id="et_pb_contact_email_0"
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
                        name="et_pb_contact_email_0"
                        placeholder={t("kontakt.form.email")}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="et_pb_contact_message_0"
                      className="sr-only"
                    >
                      {t("kontakt.form.message")}
                    </label>
                    <textarea
                      name="et_pb_contact_message_0"
                      id="et_pb_contact_message_0"
                      className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent"
                      placeholder={t("kontakt.form.message")}
                      rows={6}
                      required
                    ></textarea>
                  </div>

                  {/* Hidden fields from HTML */}
                  <input
                    type="hidden"
                    value="et_contact_proccess"
                    name="et_pb_contactform_submit_0"
                  />
                  <input
                    type="hidden"
                    id="_wpnonce-et-pb-contact-form-submitted-0"
                    name="_wpnonce-et-pb-contact-form-submitted-0"
                    value="8861a5e6a8"
                  />
                  <input
                    type="hidden"
                    name="_wp_http_referer"
                    value="/stg_8a8b7/?page_id=106"
                  />

                  <div>
                    {/* Styled button like the inspiration file */}
                    <button
                      type="submit"
                      className="bg-accent text-white px-6 py-3 rounded-full font-semibold transition-all duration-700 hover:bg-accent/10"
                    >
                      {t("kontakt.form.submit")}
                    </button>
                  </div>
                </form>
              </div>

              {/* Column 2: Info Blocks */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                  <BsTelephone className="text-3xl text-accent flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg text-primary-text">
                      {t("kontakt.info.phone")}
                    </h5>
                    {/* Phone number was missing in the HTML */}
                    <p className="text-secondary-text/70">&nbsp;</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                  <BsEnvelope className="text-3xl text-accent flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg text-primary-text">
                      {t("kontakt.info.email")}
                    </h5>
                    <a
                      href="mailto:support@corecapacity.com" // Corrected .con to .com
                      className="text-secondary-text/70 hover:text-accent transition-colors break-all"
                    >
                      {t("kontakt.info.emailValue")}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                  <BsGeoAlt className="text-3xl text-accent flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-lg text-primary-text">
                      {t("kontakt.info.location")}
                    </h5>
                    <p className="text-secondary-text/70">
                      {t("kontakt.info.locationValue1")}
                      <br />
                      {t("kontakt.info.locationValue2")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
