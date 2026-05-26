const cards = [
  {
    n: "01",
    kicker: "Prática",
    title: (
      <>
        Mais de <em className="italic">10 mil audiências</em> ao longo da minha
        carreira.
      </>
    ),
    body: "O que transmito nas mentorias foi destilado da prática intensa — não do ambiente acadêmico.",
  },
  {
    n: "02",
    kicker: "Estrutura",
    title: (
      <>
        Três escritórios setorizados, líderes formados,{" "}
        <em className="italic">processos padronizados</em>.
      </>
    ),
    body: "Construí previsibilidade operacional na prática — não no papel. Uma estrutura que realmente funciona.",
  },
  {
    n: "03",
    kicker: "Validação",
    title: (
      <>
        Validei o método em um <em className="italic">nicho diferente</em>, do
        zero.
      </>
    ),
    body: "Para provar que não era sorte, repliquei o mesmo modelo no previdenciário — área nova, equipe nova. Em menos de dois anos, 200 processos mensais. A estrutura funciona independente do nicho.",
  },
  {
    n: "04",
    kicker: "Presença",
    title: (
      <>
        Continuo <em className="italic">advogando</em> todos os dias.
      </>
    ),
    body: "Não sou o mentor que abandonou a prática para viver de curso. Comando ativamente um dos maiores escritórios do Brasil, com processos rodando, equipe operando e clientes sendo atendidos. O que ensino é o que vivo.",
  },
];

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

export function WhyDifferent() {
  return (
    <section
      id="diferenca"
      className="relative overflow-hidden pb-0 pt-4 md:pt-20"
    >
      {/* Atmospheric glow — positioned mid-section, not at edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,106,0.035),transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto max-w-[84rem] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-12">
          <h2 className="font-display text-[36px] font-normal leading-[1.05] tracking-[-0.02em] text-bone sm:text-[52px] md:col-span-7 md:text-[64px] md:leading-[1.02] md:tracking-[-0.025em] lg:text-[76px]">
            Existe uma diferença muito grande entre ensinar advocacia
            <span className="text-stone-2">…</span>{" "}
            <em className="font-normal italic text-accent">
              e viver a advocacia todos os dias.
            </em>
          </h2>

          <div className="space-y-5 text-stone md:col-span-5 md:pt-4">
            <p className="text-[16px] leading-[1.65] md:text-[17px]">
              Talvez o problema não tenha sido você. Talvez tenha sido aprender
              com quem sabia vender um método, mas nunca precisou{" "}
              <span className="text-bone-2">
                provar esse método dentro de uma operação real.
              </span>
            </p>
            <p className="text-[16px] leading-[1.65] md:text-[17px]">
              Eu não precisei abandonar a prática para ensinar. Primeiro
              construí — depois compartilhei o que aprendi. O que está
              disponível aqui veio de um escritório com mais de 80
              colaboradores, rodando ativamente, com processos acontecendo
              hoje.
            </p>
          </div>
        </div>

        {/* 4 authority entries — zigzag editorial, no card boxes */}
        <div className="mt-20 md:mt-24">
          {cards.map((c, i) => {
            const numeralRight = i % 2 === 1;
            return (
              <article
                key={c.n}
                className="group relative border-t border-line py-14 md:py-20"
              >
                {/* Subtle hover background tint */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-bone/[0.015] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div
                  className={`relative grid grid-cols-1 items-center gap-x-10 gap-y-8 md:grid-cols-12 md:gap-x-14 ${
                    numeralRight ? "" : ""
                  }`}
                >
                  {/* Numeral block */}
                  <div
                    className={`flex items-center gap-5 md:col-span-4 ${
                      numeralRight ? "md:order-2 md:justify-end" : "md:order-1"
                    }`}
                  >
                    <span
                      className="font-display text-[120px] font-normal italic leading-[0.82] text-bone/15 transition-all duration-700 group-hover:text-accent/85 md:text-[180px] lg:text-[220px]"
                      style={{
                        fontVariantNumeric: "tabular-nums lining-nums",
                      }}
                    >
                      {c.n}
                    </span>
                    <div
                      className={`flex flex-col gap-2 ${
                        numeralRight ? "md:order-first md:items-end" : ""
                      }`}
                    >
                      <Diamond className="h-2 w-2 opacity-60 transition-all duration-700 group-hover:opacity-100" />
                      <span className="text-[12px] font-medium uppercase tracking-[0.34em] text-accent/90 md:text-[14px]">
                        {c.kicker}
                      </span>
                    </div>
                  </div>

                  {/* Content block */}
                  <div
                    className={`flex flex-col gap-5 md:col-span-8 ${
                      numeralRight ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <h3
                      className={`font-display text-[26px] font-normal leading-[1.18] tracking-[-0.01em] text-bone transition-transform duration-700 md:text-[36px] lg:text-[42px] ${
                        numeralRight
                          ? "group-hover:-translate-x-1 md:text-right"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      {c.title}
                    </h3>
                    <p
                      className={`max-w-[58ch] text-[15.5px] leading-[1.7] text-stone md:text-[17px] ${
                        numeralRight ? "md:ml-auto md:text-right" : ""
                      }`}
                    >
                      {c.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* "A prova mais recente" — borderless proof callout */}
        <div className="relative border-t border-line py-20 md:py-24">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:items-center md:gap-x-14">
            <div className="md:col-span-5">
              {/* Eyebrow with hairline + gold dot */}
              <div className="flex items-center gap-3">
                <span className="relative h-px w-10 bg-gradient-to-r from-transparent to-accent/60">
                  <span className="absolute -right-px top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent" />
                </span>
                <span className="text-[12px] font-medium uppercase tracking-[0.34em] text-bone-2/80 md:text-[14px]">
                  A prova mais recente
                </span>
              </div>

              {/* Big stat with gold-shine */}
              <p className="mt-7 font-display font-normal leading-none tracking-tight">
                <span
                  className="gold-shine text-[76px] md:text-[104px]"
                  style={{
                    fontVariantNumeric: "tabular-nums lining-nums",
                  }}
                >
                  200
                </span>
                <span className="font-display text-[40px] italic text-stone-2 md:text-[52px]">
                  /mês
                </span>
              </p>

              <p className="mt-4 text-[11.5px] font-medium uppercase leading-[1.6] tracking-[0.22em] text-bone-2/70">
                Processos previdenciários · em menos de 2 anos · partindo do
                zero
              </p>
            </div>

            <div className="relative md:col-span-7 md:border-l md:border-line-strong md:pl-10">
              <blockquote className="font-display text-[20px] italic font-normal leading-[1.4] text-bone md:text-[26px] lg:text-[28px]">
                Não foi sorte. Não foi discurso. Foi o mesmo método aplicado a
                um nicho que eu não dominava, com uma equipe que precisei
                formar do zero.
              </blockquote>

              <div className="mt-8 flex items-center gap-3">
                <Diamond className="h-1.5 w-1.5" />
                <p className="text-[14px] leading-[1.6] text-stone">
                  O resultado chegou a{" "}
                  <span className="text-bone">
                    50% do volume que levei anos para construir no trabalhista.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
