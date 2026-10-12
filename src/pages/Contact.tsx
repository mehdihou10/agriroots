import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe2,
  ArrowUpRight,
} from "lucide-react";
import contactImg from '../assets/contact.png';

const Contact = () => {

const contactInfo = [
  {
    icon: MapPin,
    title: "Notre adresse",
    details: [
      "55 Route de Ouled Fayet",
      "3ème étage, Chéraga",
      "Alger, Algérie",
    ],
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+213 553 144 410"],
    href: "tel:+213553144410",
  },
  {
    icon: Mail,
    title: "Adresse e-mail",
    details: ["toufik.medebbeb@agriroots-dz.com"],
    href: "mailto:toufik.medebbeb@agriroots-dz.com",
  },
];

  return (
    <main className="min-h-screen bg-white text-[#263b2b]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183d2b] px-6 py-20 text-white md:py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src={contactImg}
            alt="contact"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b777]">
            Restons en contact
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Parlons de vos projets et de nos produits
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            Vous souhaitez en savoir plus sur nos dattes algériennes et nos
            produits dérivés ? Notre équipe est à votre disposition pour
            échanger avec vous.
          </p>
        </div>
      </section>

      {/* Contact information */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a77c39]">
            Nos coordonnées
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Comment nous joindre ?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Retrouvez ci-dessous nos coordonnées pour toute demande
            d'information ou opportunité de collaboration.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8efe7] transition group-hover:bg-[#183d2b]">
                  <Icon
                    size={26}
                    className="text-[#28583b] transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-xl font-bold">{item.title}</h3>

                <div className="mt-4 space-y-2">
                  {item.details.map((detail) => (
                    <p
                      key={detail}
                      className="break-words text-sm leading-6 text-gray-600"
                    >
                      {detail}
                    </p>
                  ))}
                </div>

                {item.href && (
                  <a
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#28583b] transition hover:text-[#a77c39]"
                  >
                    {item.title === "Téléphone"
                      ? "Nous appeler"
                      : "Nous écrire"}
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Location and company details */}
      <section className="bg-[#f7f5ef] px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efe7]">
              <Globe2 size={25} className="text-[#28583b]" />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a77c39]">
              Notre implantation
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Au cœur d'Alger, tournés vers le monde
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Basée à Chéraga, Alger, AGRI ROOTS œuvre à la valorisation des
              dattes algériennes et de leurs produits dérivés, avec une
              ambition tournée vers les marchés internationaux.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=55+Route+de+Ouled+Fayet%2C+Cheraga%2C+Alger%2C+Algerie"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#183d2b] px-6 py-3.5 font-semibold text-white transition hover:bg-[#28583b]"
            >
              Voir notre adresse
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5ead5]">
                <Clock size={24} className="text-[#a77c39]" />
              </div>

              <div>
                <h3 className="text-lg font-bold">AGRI ROOTS S.A.R.L</h3>
                <p className="text-sm text-gray-500">
                  Entreprise algérienne
                </p>
              </div>
            </div>

            <div className="space-y-4 border-t border-gray-100 pt-6">
              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#a77c39]"
                />
                <p className="leading-7 text-gray-600">
                  55 Route de Ouled Fayet, 3ème étage,
                  <br />
                  Chéraga, Alger, Algérie
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={20}
                  className="mt-1 shrink-0 text-[#a77c39]"
                />
                <a
                  href="tel:+213553144410"
                  className="text-gray-600 transition hover:text-[#28583b]"
                >
                  +213 553 144 410
                </a>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={20}
                  className="mt-1 shrink-0 text-[#a77c39]"
                />
                <a
                  href="mailto:toufik.medebbeb@agriroots-dz.com"
                  className="break-all text-gray-600 transition hover:text-[#28583b]"
                >
                  toufik.medebbeb@agriroots-dz.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#183d2b] px-7 py-12 text-center text-white md:px-16 md:py-14">
          <h2 className="text-2xl font-bold md:text-3xl">
            Construisons ensemble de nouvelles opportunités
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Pour toute demande commerciale ou information sur nos produits,
            contactez-nous directement par téléphone ou par e-mail.
          </p>

          <a
            href="mailto:toufik.medebbeb@agriroots-dz.com"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#d8b777] px-7 py-3.5 font-semibold text-[#183d2b] transition hover:bg-[#e7c991]"
          >
            Envoyer un e-mail
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact
