import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "17", label: "ANOS DE ADVOCACIA REAL E ATIVA" },
  { value: "80+", label: "COLABORADORES NO ESCRITÓRIO" },
  { value: "R$ 20M", label: "FATURADOS NO ÚLTIMO ANO" },
  { value: "600+", label: "ADVOGADOS QUE JÁ PASSARAM PELA MENTORIA" },
];

const navLinks = [
  { label: "Diferenciais", href: "#diferenca" },
  { label: "Trilhas", href: "#trilhas" },
  { label: "Perguntas", href: "#faq" },
];

function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-base">
      {/* Background photo as atmospheric layer */}
      <Image
        src="/images/rafael/hero-dark.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full scale-110 object-cover object-[80%_center] md:object-[75%_center] lg:object-[70%_center]"
      />

      {/* Layered overlays — deeper than v5c but still keeps texture visible */}
      <div aria-hidden className="absolute inset-0 bg-base/74" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(10,10,10,0.3)_0%,rgba(10,10,10,0.5)_50%,rgba(10,10,10,0.85)_90%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-base via-base/55 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-base via-base/50 to-transparent"
      />

      {/* Top NAV — glass pill style */}
      <header className="relative z-10">
        <div className="mx-auto max-w-[84rem] px-6 pt-5 md:px-10 md:pt-6">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="flex items-baseline gap-2 text-bone transition-opacity hover:opacity-80"
            >
              <span className="font-display text-[18px] font-normal leading-none tracking-tight text-bone md:text-[28px]">
                Comunidade
              </span>
              <span className="font-display text-[22px] italic font-medium leading-none text-bone md:text-[32px]">
                RM
              </span>
            </Link>

            {/* Glass pill nav with CTA inside */}
            <nav className="hidden md:flex">
              <div className="flex items-center gap-1 rounded-full border border-bone/10 bg-base/40 px-1 py-1 backdrop-blur-md">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3.5 py-2 text-[13px] font-medium text-bone-2 transition-colors hover:bg-bone/5 hover:text-bone"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#trilhas"
                  className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-bone px-4 py-2 text-[13px] font-medium text-base transition-all hover:bg-bone-2"
                >
                  Quero fazer parte
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </nav>

            {/* Mobile CTA */}
            <Link
              href="#trilhas"
              className="inline-flex items-center gap-1.5 rounded-full bg-bone px-4 py-2 text-[12px] font-medium text-base md:hidden"
            >
              Inscrever
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* CENTERED HERO CONTENT */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:pt-28 md:px-10 md:pt-32 lg:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            {/* Big serif title */}
            <h1
              className="fade-up font-display text-[44px] font-normal leading-[1.02] tracking-[-0.025em] text-bone text-balance sm:text-[64px] md:text-[80px] md:leading-[0.98] md:tracking-[-0.03em] lg:text-[100px] xl:text-[112px]"
              style={{ animationDelay: "0.2s" }}
            >
              A advocacia que você{" "}
              <em className="gold-shine font-normal italic">construiu</em>
              <br className="hidden sm:block" />{" "}
              merece estrutura{" "}
              <span className="gold-shine italic">à altura.</span>
            </h1>

            {/* Description */}
            <p
              className="fade-up mx-auto mt-7 max-w-2xl text-[16px] leading-[1.6] text-bone-2/85 md:mt-8 md:text-[18px] md:leading-[1.55]"
              style={{ animationDelay: "0.35s" }}
            >
              Depois de 17 anos, mais de 10 mil audiências e um escritório com
              mais de 80 colaboradores, organizei em um único lugar tudo que
              transformou minha própria operação — para que outros advogados
              não precisem descobrir sozinhos.
            </p>

            {/* CTAs */}
            <div
              className="fade-up mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                href="#trilhas"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-bone px-6 py-3.5 text-[14px] font-medium text-base transition-all hover:bg-bone-2 hover:shadow-[0_20px_60px_-15px_rgba(250,250,249,0.3)]"
              >
                Quero fazer parte
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Trust block — brass-plaque inscription under spotlight */}
          <div
            className="fade-up group relative mx-auto mt-16 flex max-w-3xl flex-col items-center gap-9 md:mt-20 md:gap-11"
            style={{ animationDelay: "0.65s" }}
          >
            {/* Spotlight glow backdrop */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -m-16 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(212,175,106,0.12),transparent_70%)] opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
            />

            {/* Eyebrow — hairlines ending in gold dots */}
            <div className="relative flex w-full items-center gap-5">
              <span className="relative h-px flex-1 bg-gradient-to-r from-transparent via-bone/15 to-bone/25">
                <span className="absolute -right-px top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent" />
              </span>
              <span className="text-[12px] font-[540] uppercase tracking-[0.34em] text-bone-2/85 md:text-[14px]">
                Reconhecimento
              </span>
              <span className="relative h-px flex-1 bg-gradient-to-l from-transparent via-bone/15 to-bone/25">
                <span className="absolute -left-px top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent" />
              </span>
            </div>

            {/* Quote — lateral pull-quote with bold oversized gold mark */}
            <blockquote className="mx-auto flex max-w-2xl items-start gap-4 px-4 text-left md:gap-7">
              <svg
                viewBox="0 0 48 40"
                aria-hidden
                className="mt-1 h-6 w-7 flex-shrink-0 md:h-8 md:w-10 lg:h-9 lg:w-11"
              >
                <defs>
                  <linearGradient
                    id="gold-quote"
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
                  fill="url(#gold-quote)"
                />
              </svg>
              <span className="pt-1 text-[20px] italic leading-[1.4] text-bone md:pt-2 md:text-[26px] lg:text-[30px]">
                Um dos maiores escritórios trabalhistas do Brasil. O mais bem
                avaliado do Brasil.
              </span>
            </blockquote>

          </div>

          {/* Stats — partners-style trust grid */}
          <div
            className="fade-up mx-auto mt-20 max-w-6xl md:mt-24"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="grid grid-cols-2 gap-y-10 items-baseline sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-3 px-4 text-center"
                >
                  <span
                    className="font-display text-[38px] font-normal leading-none tracking-tight text-bone md:text-[48px] lg:text-[56px]"
                    style={{
                      fontVariantNumeric: "tabular-nums lining-nums",
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] uppercase leading-[1.5] tracking-[0.18em] text-bone-2/60">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
