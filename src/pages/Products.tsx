import {
  Leaf,
  ShieldCheck,
  Package,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import hero from '../assets/products-hero.jpg';
import product1 from '../assets/pr-1.jpg';
import product2 from '../assets/pr-2.png';
import product3 from '../assets/pr-3.jpeg';
// import product4 from '../assets/product-4.png';
import product5 from '../assets/product-5.png';
import product6 from '../assets/product-6.png';
import product7 from '../assets/product-7.png';
import product8 from '../assets/product-8.png';
// import product9 from '../assets/product-9.png';
import product10 from '../assets/product-10.png';
import product11 from '../assets/product-11.png';
import product12 from '../assets/product-12.png';
import product13 from '../assets/1.jpg';
import product14 from '../assets/2.jpg';
import product15 from '../assets/3.jpg';
import { Link } from "react-router-dom";


type Product = {
  name: string;
  description: string;
  image: string;
  label?: string;
};

const dateVarieties: Product[] = [
  {
    name: "Deglet Nour Premium",
    description:
      "La reine des dattes algériennes, appréciée pour sa texture fondante et son goût naturellement sucré. Idéale pour la consommation directe et les recettes gourmandes.",
    image: product1,
    label: "Gamme premium",
  },
  {
    name: "Deglet Nour",
    description:
      "Une datte emblématique du terroir algérien, reconnue pour sa douceur et sa texture tendre, adaptée à de nombreuses préparations culinaires.",
    image: product2,
  },
  {
    name: "Dattes de saison — Mech-Degla",
    description:
      "Des dattes à la couleur foncée et au goût délicat, appréciées pour leur richesse en fibres et leur utilisation dans les desserts.",
    image: product3,
    label: "Récolte saisonnière",
  },
];

const classicProducts: Product[] = [
  {
    name: "Sirop de dattes",
    description:
      "Un sirop concentré de dattes pouvant être utilisé comme édulcorant naturel dans différentes préparations.",
    image: product5,
  },
  {
    name: "Sucre de dattes",
    description:
      "Une alternative issue de la datte pour apporter une touche sucrée aux boissons et aux recettes.",
    image: product6,
  },
  {
    name: "Vinaigre de dattes",
    description:
      "Un produit dérivé de la datte destiné à enrichir les usages culinaires.",
    image: product7,
  },
  {
    name: "Café à base de noyaux de dattes",
    description:
      "Une valorisation originale des noyaux de dattes sous forme de préparation inspirée du café.",
    image: product8,
  },
  {
    name: "Mélasse de dattes au citron et au gingembre",
    description:
      "Une préparation associant la datte, le citron et le gingembre pour des utilisations gourmandes et traditionnelles.",
    image: product10,
  },
];


const packagingOptions = [
  {
    title: "Emballages personnalisés",
    description:
      "Des emballages adaptés aux besoins et aux préférences de chaque client.",
    icon: Package,
  },
  {
    title: "Cartons écologiques",
    description:
      "Des solutions de conditionnement conçues pour assurer une protection optimale des produits.",
    icon: Leaf,
  },
  {
    title: "Boîtes cadeaux",
    description:
      "Une présentation élégante et raffinée pour les dattes et les assortiments gourmands.",
    icon: Sparkles,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#a77c39]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold leading-tight text-[#263b2b] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 leading-8 text-gray-600">{description}</p>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-60 overflow-hidden bg-[#f3f0e8]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        {product.label && (
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#28583b] shadow-sm">
            {product.label}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#263b2b]">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          {product.description}
        </p>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <main className="bg-white text-[#263b2b]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#183d2b] px-6 py-24 text-white md:py-32">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt=""
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102c1d]/95 via-[#183d2b]/75 to-[#183d2b]/30" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b777]">
            La richesse du terroir algérien
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Nos produits, l'excellence à la racine
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
            Des dattes algériennes d'exception aux produits dérivés innovants,
            AGRI ROOTS valorise les richesses de la datte avec une exigence
            de qualité, d'authenticité et de traçabilité.
          </p>

          <a
            href="#varietes"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#d8b777] px-7 py-3.5 font-semibold text-[#183d2b] transition hover:bg-[#e7c991]"
          >
            Découvrir nos produits
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Product values */}
      <section className="border-b border-gray-100 bg-[#faf9f5] px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: "Produits naturels",
              description: "Des produits issus de la richesse de la datte.",
            },
            {
              icon: ShieldCheck,
              title: "Qualité & traçabilité",
              description: "Une attention portée à la qualité et à la sécurité.",
            },
            {
              icon: Globe2,
              title: "Ambition internationale",
              description: "Une offre destinée aux marchés internationaux.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e8efe7]">
                  <Icon size={23} className="text-[#28583b]" />
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Date varieties */}
      <section
        id="varietes"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:py-24"
      >
        <SectionHeading
          eyebrow="Dattes d'Algérie"
          title="Nos variétés de dattes"
          description="Découvrez une sélection de dattes algériennes appréciées pour leur douceur, leur texture et leur authenticité."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {dateVarieties.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#f7f5ef] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <Leaf className="mt-1 shrink-0 text-[#a77c39]" size={25} />

            <div>
              <h3 className="text-lg font-bold">
                Les qualités des dattes algériennes
              </h3>

              <ul className="mt-4 grid gap-3 text-sm leading-6 text-gray-600 sm:grid-cols-2">
                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#28583b]"
                  />
                  Une douceur et une texture appréciées.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#28583b]"
                  />
                  Une source naturelle d'énergie.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#28583b]"
                  />
                  Différentes tailles selon les préférences des clients.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#28583b]"
                  />
                  Le document présente les dattes comme naturelles, sans conservateurs, colorants ni OGM.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Classic derived products */}
      <section className="bg-[#f7f5ef] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Tradition & valorisation"
            title="Nos produits dérivés"
            description="La datte offre de nombreuses possibilités de valorisation. Découvrez notre gamme de produits dérivés, entre usages culinaires et découvertes gourmandes."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {classicProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special products */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Gourmandises spéciales"
          title="Des créations autour de la datte"
          description=""
        />

        <div className="mx-auto grid max-w-4xl gap-7 md:grid-cols-3">
          <img className="h-[300px] w-full object-cover rounded-[5px]" src={product13} alt="product" />
          <img className="h-[300px] w-full object-cover rounded-[5px]" src={product14} alt="product" />
          <img className="h-[300px] w-full object-cover rounded-[5px]" src={product15} alt="product" />
        </div>

        <p className="max-w-4xl mx-auto text-gray-700 mt-[15px]">
          Notre datte se réinvente à travers des gâteaux sublimés, où tradition et créativité s’unissent pour révéler toute
          la richesse de ses saveurs. Des créations gourmandes qui célèbrent l’authenticité de ce fruit d’exception.
        </p>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="scroll-mt-24 bg-[#183d2b] px-6 py-20 text-white md:py-24"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#d8b777]">
              Nos engagements
            </p>

            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              Qualité, sécurité et conformité internationale
            </h2>

            <p className="mt-6 leading-8 text-white/75">
              AGRI ROOTS s'engage à respecter des exigences élevées en matière
              de qualité et de sécurité alimentaire. Le document de
              présentation souligne l'importance des certifications
              internationales pour répondre aux attentes des marchés mondiaux
              et de nos partenaires.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#d8b777] px-6 py-3.5 font-semibold text-[#183d2b] transition hover:bg-[#e7c991]"
            >
              Nous contacter
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheck,
                title: "Qualité",
                description:
                  "Une attention particulière portée à la qualité des produits.",
              },
              {
                icon: CheckCircle2,
                title: "Sécurité alimentaire",
                description:
                  "Un engagement en faveur de la sécurité alimentaire.",
              },
              {
                icon: Globe2,
                title: "Exigences internationales",
                description:
                  "Une démarche orientée vers les exigences des marchés mondiaux.",
              },
              {
                icon: Leaf,
                title: "Traçabilité",
                description:
                  "La traçabilité au cœur de notre philosophie de qualité.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <Icon size={28} className="text-[#d8b777]" />

                  <h3 className="mt-4 font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-7 text-white/70">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-7xl text-sm leading-6 text-white/55">
          Les noms et numéros des certifications ne sont pas précisés dans le
          document fourni. Ils pourront être ajoutés lorsque les certifications
          effectivement détenues par AGRI ROOTS auront été confirmées.
        </p>
      </section>

      {/* Packaging options */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Des solutions adaptées"
          title="Nos options de conditionnement"
          description="Des solutions de présentation et de protection adaptées aux besoins des clients."
        />

        <div className="grid gap-7 md:grid-cols-3">
          {packagingOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:shadow-lg md:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e8efe7]">
                  <Icon size={26} className="text-[#28583b]" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{option.title}</h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {option.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#f7f5ef] px-7 py-12 text-center md:px-16 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a77c39]">
            Parlons de vos besoins
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl">
            Vous souhaitez en savoir plus sur nos produits ?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Contactez AGRI ROOTS pour échanger sur notre gamme, les options de
            conditionnement et les possibilités de collaboration.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#183d2b] px-7 py-3.5 font-semibold text-white transition hover:bg-[#28583b]"
          >
            Contactez-nous
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
