import Link from "next/link";
import { trails, type Trail } from "@/lib/trails";

function Diamond({ className = "h-2 w-2" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden
      className={`${className} rotate-45 flex-shrink-0 text-accent`}
    >
      <rect x="1" y="1" width="10" height="10" fill="currentColor" />
    </svg>
  );
}

function CompactTrailCard({ trail }: { trail: Trail }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-base-2/30 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-bone/20 hover:bg-base-2/50 md:p-10">
      {/* Name */}
      <h3 className="font-montserrat text-[44px] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-bone md:text-[56px]">
        {trail.name}
      </h3>

      {/* Subtitle */}
      {trail.subtitle && (
        <p className="mt-4 font-montserrat text-[14px] font-semibold uppercase leading-[1.4] tracking-[0.04em] text-bone-2/85 md:text-[16px]">
          {trail.subtitle}
        </p>
      )}

      {/* Price */}
      {trail.price && (
        <div className="mt-6 flex flex-col gap-1">
          <span className="font-montserrat text-[32px] font-bold leading-none tracking-tight text-bone md:text-[38px]">
            {trail.price.amount}
          </span>
          {trail.price.installments && (
            <span className="text-[13px] leading-tight text-stone md:text-[14px]">
              {trail.price.installments}
            </span>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="mt-8 flex items-center gap-3">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-bone-2/75">
          O que está incluso
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>

      {/* Deliverables */}
      <ul className="mt-6 flex-1 space-y-3">
        {trail.groups[0].items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[16px] leading-[1.55] text-bone-2 md:text-[17px]"
          >
            <span
              aria-hidden
              className="mt-[9px] inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent/75"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Bonus */}
      <div className="mt-7 border-t border-line pt-6">
        <div className="mb-3 flex items-center gap-3">
          <Diamond className="h-1.5 w-1.5" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
            {trail.bonusLabel ?? "Bônus do evento"}
          </span>
        </div>
        <p className="text-[14.5px] leading-[1.55] text-bone md:text-[15px]">
          {trail.bonus as string}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={trail.href}
        className="group/cta mt-7 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#15935f] px-6 text-[14px] font-semibold text-bone transition-colors duration-300 hover:bg-[#18a86d]"
      >
        Quero fazer parte
        <span className="transition-transform duration-300 group-hover/cta:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}

function TrailCard({ trail }: { trail: Trail }) {
  const isFeatured = !!trail.featured;
  const multiGroup = trail.groups.length > 1;

  return (
    <article
      className={`group relative rounded-2xl border transition-all duration-500 ${
        isFeatured
          ? "gold-rotating-border border-transparent bg-accent shadow-[0_24px_80px_-24px_rgba(212,175,106,0.4)]"
          : "border-line bg-base-2/30 backdrop-blur-sm hover:border-bone/20 hover:bg-base-2/50"
      }`}
    >
      {/* Featured: polished metal top highlight + continuous sheen sweep */}
      {isFeatured && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-bone/40 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
          >
            <div className="gold-sheen absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-bone/[0.09] to-transparent" />
          </div>
        </>
      )}
      <div className="p-8 md:p-12">
        <div className="grid grid-cols-1 gap-x-14 gap-y-12 md:grid-cols-12 md:gap-y-0">
          {/* LEFT — Identity + CTA */}
          <div className="md:col-span-5">
            {/* Name */}
            <h3
              className={`font-montserrat font-bold uppercase leading-[0.95] ${
                isFeatured
                  ? "text-base text-[40px] tracking-[-0.05em] md:text-[58px] lg:text-[68px]"
                  : "text-bone text-[36px] tracking-[-0.02em] md:text-[48px] lg:text-[56px]"
              }`}
            >
              {trail.name}
            </h3>

            {/* Subtitle */}
            {trail.subtitle && (
              <p
                className={`mt-4 font-montserrat text-[16px] font-medium leading-[1.4] md:mt-5 md:text-[18px] ${
                  isFeatured ? "text-base/85" : "text-bone-2"
                }`}
              >
                {trail.subtitle}
              </p>
            )}

            {/* Intro (Lideranças only) */}
            {trail.intro && (
              <p className="mt-5 text-[15px] leading-[1.65] text-stone md:text-[16px]">
                {trail.intro}
              </p>
            )}

            {/* Price */}
            {trail.price && (
              <div className="mt-7 flex flex-col gap-1 md:mt-8">
                <span
                  className={`font-montserrat text-[36px] font-bold leading-none tracking-tight md:text-[44px] ${
                    isFeatured ? "text-base" : "text-bone"
                  }`}
                >
                  {trail.price.amount}
                </span>
                {trail.price.installments && (
                  <span
                    className={`text-[13px] leading-tight md:text-[15px] ${
                      isFeatured ? "text-base/75" : "text-stone"
                    }`}
                  >
                    {trail.price.installments}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* RIGHT — Value */}
          <div
            className={`md:col-span-7 md:border-l md:pl-12 ${
              isFeatured ? "md:border-base/15" : "md:border-line"
            }`}
          >
            {/* Eyebrow */}
            {isFeatured ? (
              <div className="border-b border-base/20 pb-3">
                <span className="text-[13px] font-black uppercase tracking-[0.28em] text-base md:font-bold">
                  O que está incluso
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-bone-2/75">
                  O que está incluso
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
            )}

            {/* Deliverables */}
            <div
              className={`mt-6 grid gap-x-10 gap-y-7 ${
                multiGroup ? "md:grid-cols-2" : ""
              }`}
            >
              {trail.groups.map((g, gi) => (
                <div key={g.title ?? `g-${gi}`}>
                  {g.title && (
                    <p
                      className={`mb-3 uppercase tracking-[0.26em] ${
                        isFeatured
                          ? "text-[13px] font-black text-base md:font-bold"
                          : "text-[10px] font-medium text-accent"
                      }`}
                    >
                      {g.title}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className={`flex gap-3 text-[16px] leading-[1.55] md:text-[17px] ${
                          isFeatured ? "text-base/90" : "text-bone-2"
                        }`}
                      >
                        <span
                          aria-hidden
                          className={`mt-[9px] inline-block h-1 w-1 flex-shrink-0 rounded-full ${
                            isFeatured ? "bg-base/70" : "bg-accent/75"
                          }`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bonus — inline at bottom */}
            <div
              className={`mt-8 border-t pt-6 ${
                isFeatured ? "border-base/15" : "border-line"
              }`}
            >
              <div className="mb-3 flex items-center gap-3">
                <svg
                  viewBox="0 0 12 12"
                  aria-hidden
                  className={`h-1.5 w-1.5 rotate-45 flex-shrink-0 ${
                    isFeatured ? "text-base" : "text-accent"
                  }`}
                >
                  <rect x="1" y="1" width="10" height="10" fill="currentColor" />
                </svg>
                <span
                  className={`uppercase tracking-[0.28em] ${
                    isFeatured
                      ? "text-[13px] font-bold text-base"
                      : "text-[10px] font-medium text-accent"
                  }`}
                >
                  {trail.bonusLabel ?? "Bônus do evento"}
                </span>
              </div>
              {Array.isArray(trail.bonus) ? (
                <ul className="space-y-1.5">
                  {trail.bonus.map((b) => (
                    <li
                      key={b}
                      className={`flex gap-3 text-[14.5px] leading-[1.55] md:text-[15px] ${
                        isFeatured ? "text-base" : "text-bone"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`mt-[9px] inline-block h-1 w-1 flex-shrink-0 rounded-full ${
                          isFeatured ? "bg-base" : "bg-accent"
                        }`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className={`text-[14.5px] leading-[1.55] md:text-[15px] ${
                    isFeatured ? "text-base" : "text-bone"
                  }`}
                >
                  {trail.bonus}
                </p>
              )}
            </div>

            {/* CTA — after bonus, full width */}
            <Link
              href={trail.href}
              className={`group/cta mt-8 flex w-full items-center justify-center gap-3 rounded-full px-6 font-semibold transition-colors duration-300 ${
                isFeatured
                  ? "h-14 bg-[#15935f] text-[15px] tracking-[0.01em] text-bone hover:bg-[#18a86d]"
                  : "h-12 bg-[#15935f] text-[14.5px] text-bone hover:bg-[#18a86d]"
              }`}
            >
              Quero fazer parte
              <span className="transition-transform duration-300 group-hover/cta:translate-x-0.5">
                →
              </span>
            </Link>

            {/* Secondary action — optional partner/sócio link */}
            {trail.secondaryAction && (
              <Link
                href={trail.secondaryAction.href}
                className={`group/cta2 mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-full px-6 text-[14.5px] font-semibold transition-colors duration-300 ${
                  isFeatured
                    ? "bg-bone text-base hover:bg-bone-2"
                    : "border-2 border-line-strong bg-transparent text-bone hover:border-bone-2 hover:bg-bone/5"
                }`}
              >
                {trail.secondaryAction.label}
                <span className="transition-transform duration-300 group-hover/cta2:translate-x-0.5">
                  →
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Trails() {
  return (
    <section id="trilhas" className="relative pb-24 pt-0 md:pb-32 md:pt-20">
      <div className="mx-auto max-w-[84rem] px-6 md:px-10">
        {/* Section divider with brand wordmark */}
        <div className="mb-16 flex items-center gap-5 md:mb-20">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bone/10 to-bone/20" />
          <Diamond className="h-1.5 w-1.5" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[26px] leading-none text-bone-2/85 md:text-[34px]">
              Comunidade
            </span>
            <span className="font-display text-[30px] italic font-medium leading-none text-accent md:text-[40px]">
              RM
            </span>
          </div>
          <Diamond className="h-1.5 w-1.5" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-bone/10 to-bone/20" />
        </div>

        {/* H2 + intro */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-12">
          <h2 className="font-display text-[36px] font-normal leading-[1.05] tracking-[-0.02em] text-bone sm:text-[52px] md:col-span-7 md:text-[64px] md:leading-[1.02] md:tracking-[-0.025em] lg:text-[76px]">
            Quatro caminhos.
            <br />
            <em className="font-normal italic text-accent">Qual é o seu?</em>
          </h2>
          <p className="text-[16px] leading-[1.65] text-stone md:col-span-5 md:pt-4 md:text-[17px]">
            Cada trilha foi desenhada para uma necessidade específica. Escolha
            pelo problema que precisa resolver — não pelo produto que parece
            maior.
          </p>
        </div>

        {/* MAT + MAP side-by-side vertical cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-7">
          {trails
            .filter((t) => t.slug === "mat" || t.slug === "map")
            .map((t) => (
              <CompactTrailCard key={t.slug} trail={t} />
            ))}
        </div>

        {/* Comunidade + Lideranças stacked horizontal cards */}
        <div className="mt-6 flex flex-col gap-6 md:mt-7 md:gap-7">
          {trails
            .filter((t) => t.slug === "comunidade" || t.slug === "lideranca")
            .map((t) => (
              <TrailCard key={t.slug} trail={t} />
            ))}
        </div>

        {/* Closing pull-quote bridge */}
        <figure className="relative mt-20 md:mt-24">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex w-full items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-bone/10 to-bone/20" />
              <span className="text-[12px] font-medium uppercase tracking-[0.34em] text-bone-2/80 md:text-[14px]">
                Sobre delegar de verdade
              </span>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent via-bone/10 to-bone/20" />
            </div>

            <blockquote className="mt-10 font-display text-[24px] font-normal italic leading-[1.3] text-bone md:text-[34px] lg:text-[40px]">
              Você não precisa de mais um treinamento de liderança. Você
              precisa de{" "}
              <span className="text-bone-2">
                líderes que realmente assumam a operação.
              </span>
            </blockquote>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-accent/60" />
              <Diamond className="h-1.5 w-1.5" />
              <span className="h-px w-10 bg-accent/60" />
            </div>

            <figcaption className="mt-7 max-w-2xl text-[14px] leading-[1.6] text-stone md:text-[15px]">
              Estruturação de setores, cultura, fluxos operacionais e
              processos internos — conduzidos por quem faz isso todos os dias
              dentro de um escritório real.
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
