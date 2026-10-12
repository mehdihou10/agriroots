import { ArrowRight, Award, Leaf, ShieldCheck, Globe2 } from "lucide-react";
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';

const Home = () => {

const values = [
  {
    icon: Award,
    title: "Qualité supérieure",
    description: "Sélection rigoureuse",
  },
  {
    icon: Leaf,
    title: "100 % naturel",
    description: "Sans conservateurs",
  },
  {
    icon: ShieldCheck,
    title: "Certifications internationales",
    description: "Pour un marché mondial",
  },
  {
    icon: Globe2,
    title: "Exportation mondiale",
    description: "L'Algérie au-delà des frontières",
  },
];

  return (
     <main id="accueil" className="min-h-screen bg-[#faf9f5]">
      {/* Hero */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden sm:min-h-[600px] lg:min-h-[650px]">
        {/* Background image */}
        <img
          src={hero}
          alt="Dattes algériennes dans une oasis de palmiers"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101b11]/90 via-[#101b11]/60 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e7c979] sm:text-sm">
              Dattes d'Algérie & produits dérivés
            </p>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Un terroir d'exception,
              <br />
              des produits d'excellence
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/85 sm:text-base">
              AGRI ROOTS valorise la richesse de l'Algérie à travers
              des dattes de qualité supérieure et des produits dérivés
              authentiques, alliant tradition et innovation.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#08735a] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b5c47]"
            >
              Découvrir nos produits
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Decorative accent */}
        <div className="absolute bottom-0 left-0 h-1 w-40 bg-[#d8b65f]" />
      </section>

      {/* Key selling points */}
      <section className="border-b border-[#e7e5dc] bg-white px-6 py-7 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-4 lg:justify-center lg:border-r lg:border-[#e7e5dc] lg:last:border-r-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#326c4c] text-[#174b35]">
                <Icon size={23} strokeWidth={1.5} />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-[#173b2b]">
                  {title}
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  
  )
}

export default Home
