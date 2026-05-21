import Image from "next/image";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative pt-0 md:pt-16">
      {/* Photo + text — full bleed, edge to edge */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">
        {/* Left — full bleed portrait */}
        <div className="relative aspect-[4/5] w-full bg-base-2 md:aspect-auto md:min-h-[820px]">
          <Image
            src="/images/rafael/authority-dark.jpg"
            alt="Rafael Mendes"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-[center_30%]"
          />
          {/* Subtle bottom gradient for caption legibility */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base/70 to-transparent"
          />
          {/* Name caption */}
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10">
            <p className="font-display text-[20px] italic leading-tight text-bone md:text-[22px]">
              Rafael Mendes
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-bone-2/70">
              Fundador · CEO
            </p>
          </div>
        </div>

        {/* Right — editorial copy */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 12 12"
              aria-hidden
              className="h-1.5 w-1.5 rotate-45 flex-shrink-0 text-accent"
            >
              <rect x="1" y="1" width="10" height="10" fill="currentColor" />
            </svg>
            <span className="text-[11.5px] font-medium uppercase tracking-[0.32em] text-accent">
              Última chamada · RM Summit 2026
            </span>
          </div>

          {/* Intro paragraph */}
          <p className="mt-10 text-[19px] leading-[1.55] text-stone md:text-[22px]">
            As condições apresentadas aqui são exclusivas para quem decide
            durante o evento.
          </p>

          {/* Bold pull statement */}
          <h2 className="mt-9 font-display text-[42px] font-normal italic leading-[1.1] tracking-[-0.015em] text-bone md:text-[64px] lg:text-[76px]">
            Escritórios grandes não foram construídos por acidente.
          </h2>

          {/* Closing paragraph */}
          <p className="mt-9 text-[19px] leading-[1.55] text-stone md:text-[22px]">
            Depois do RM Summit, os bônus encerram e os valores mudam.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center">
            <Link
              href="#trilhas"
              className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-bone px-7 text-[15px] font-medium text-base transition-all hover:bg-bone-2 hover:shadow-[0_24px_70px_-15px_rgba(250,250,249,0.3)] sm:w-auto sm:justify-start"
            >
              Quero fazer parte
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <p className="text-sm text-stone-2">
              Bônus encerram ao fim do evento · Vagas limitadas por trilha
            </p>
          </div>
        </div>
      </div>

      {/* Closing quote — engraved institutional moment */}
      <div className="relative overflow-hidden pb-24 pt-24 md:pb-32 md:pt-32">
        {/* Atmospheric gold spotlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,106,0.08),transparent_65%)] blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Oversized gold quote mark */}
          <svg
            viewBox="0 0 48 40"
            aria-hidden
            className="mx-auto mb-8 h-10 w-12 md:mb-10 md:h-14 md:w-16"
          >
            <defs>
              <linearGradient
                id="closing-gold-quote"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a87f3b" />
                <stop offset="45%" stopColor="#f6e2a8" />
                <stop offset="55%" stopColor="#fff4cf" />
                <stop offset="100%" stopColor="#c9a35a" />
              </linearGradient>
            </defs>
            <path
              d="M2 38 C2 22 6 10 18 2 L20 6 C12 11 9 17 9 22 L18 22 L18 38 L2 38 Z M26 38 C26 22 30 10 42 2 L44 6 C36 11 33 17 33 22 L42 22 L42 38 L26 38 Z"
              fill="url(#closing-gold-quote)"
            />
          </svg>

          <figure>
            <blockquote className="font-display text-[36px] font-normal italic leading-[1.15] tracking-[-0.01em] text-bone md:text-[60px] lg:text-[76px]">
              Quantas pessoas vencem
              <br />
              quando <span className="gold-shine">você</span>{" "}
              <em className="italic">vence</em>?
            </blockquote>

            <figcaption className="mt-10 flex items-center justify-center gap-4 md:mt-14">
              <span className="h-px w-12 bg-line-strong" />
              <svg
                viewBox="0 0 12 12"
                aria-hidden
                className="h-1.5 w-1.5 rotate-45 flex-shrink-0 text-accent"
              >
                <rect x="1" y="1" width="10" height="10" fill="currentColor" />
              </svg>
              <span className="font-display text-[15px] italic leading-none text-bone-2 md:text-[17px]">
                Rafael Mendes
              </span>
              <svg
                viewBox="0 0 12 12"
                aria-hidden
                className="h-1.5 w-1.5 rotate-45 flex-shrink-0 text-accent"
              >
                <rect x="1" y="1" width="10" height="10" fill="currentColor" />
              </svg>
              <span className="h-px w-12 bg-line-strong" />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
