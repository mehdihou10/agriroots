import { Leaf, ShieldCheck, Globe2, Sprout, Target, Eye } from "lucide-react";
import { Link } from 'react-router-dom';
import about from '../assets/about.png';

const About = () => {

const values = [
  {
    icon: Leaf,
    title: "Authenticité",
    description:
      "Nous valorisons la richesse du terroir algérien et le savoir-faire lié à la culture des dattes.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité & traçabilité",
    description:
      "Nous accordons une attention particulière à la qualité, à la traçabilité et à la sécurité alimentaire.",
  },
  {
    icon: Sprout,
    title: "Produits naturels",
    description:
      "Nous développons une gamme de dattes et de produits dérivés répondant aux attentes de nos clients.",
  },
  {
    icon: Globe2,
    title: "Ouverture internationale",
    description:
      "Nous souhaitons faire découvrir l'excellence des produits algériens sur les marchés internationaux.",
  },
];

  return (
     <main className="bg-white text-[#263b2b]"> 

      {/* Company introduction */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a77c39]">
            Qui sommes-nous ?
          </p>

          <h2 className="text-3xl font-bold leading-snug md:text-4xl">
            Une passion pour les dattes algériennes
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            AGRI ROOTS est une entreprise algérienne engagée dans la
            valorisation des dattes, notamment la célèbre Deglet Nour, ainsi
            que dans le développement de produits dérivés de la datte.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Notre démarche repose sur la qualité des produits, la traçabilité,
            la sécurité alimentaire et le respect des exigences de nos marchés
            cibles.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Nous ambitionnons de faire rayonner les richesses du terroir
            algérien au-delà de nos frontières, grâce à une offre adaptée aux
            besoins de nos partenaires et clients.
          </p>
        </div>

        <div className="relative">
          <img
            src={about}
            alt="Dattes algériennes et palmeraie"
            className="h-[360px] w-full rounded-2xl object-cover shadow-xl md:h-[460px]"
          />

          <div className="absolute -bottom-5 -left-3 rounded-xl bg-[#f4ead7] p-5 shadow-lg md:-left-6 md:p-7">
            <p className="text-sm text-gray-600">Notre spécialité</p>
            <p className="mt-1 text-xl font-bold text-[#183d2b]">
              La Deglet Nour
            </p>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-[#f7f5ef] px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8efe7]">
              <Target size={28} className="text-[#28583b]" />
            </div>

            <h2 className="text-2xl font-bold">Notre mission</h2>

            <p className="mt-4 leading-8 text-gray-600">
              Valoriser les dattes algériennes et leurs dérivés en proposant
              des produits de qualité, avec une attention particulière portée
              à la traçabilité, à la sécurité alimentaire et aux attentes de
              nos clients.
            </p>
          </article>

          <article className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5ead5]">
              <Eye size={28} className="text-[#a77c39]" />
            </div>

            <h2 className="text-2xl font-bold">Notre vision</h2>

            <p className="mt-4 leading-8 text-gray-600">
              Faire reconnaître la richesse du terroir algérien sur les marchés
              internationaux et développer une offre de produits à base de
              dattes qui allie authenticité, qualité et innovation.
            </p>
          </article>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a77c39]">
            Nos engagements
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Les valeurs qui nous guident
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Des principes essentiels qui orientent notre démarche et le
            développement de nos produits.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8efe7]">
                  <Icon size={24} className="text-[#28583b]" />
                </div>

                <h3 className="text-lg font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#183d2b] px-7 py-12 text-center text-white md:px-16 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b777]">
            AGRI ROOTS
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Découvrez nos dattes et nos produits dérivés
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
            Explorez notre gamme et découvrez comment nous valorisons les
            richesses du terroir algérien.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#d8b777] px-7 py-3.5 font-semibold text-[#183d2b] transition hover:bg-[#e7c991]"
          >
            Découvrir nos produits
          </Link>
        </div>
      </section>
    </main>
  )
}

export default About
