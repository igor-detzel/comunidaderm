import Image from "next/image";

const faqs = [
  {
    q: "Meu escritório já funciona. Por que mudar agora?",
    a: "Funcionar é diferente de escalar. A maioria dos escritórios que “funcionam” ainda depende do sócio para fechar, revisar, decidir e resolver. O crescimento acontece, mas não com leveza. Além de te ensinar a começar, te mostro como fazer o que já tem funcionar sem você no centro de tudo.",
  },
  {
    q: "Já tentei delegar e não funcionou.",
    a: "Delegação sem estrutura é só transferência de problema. O que a Formação de Lideranças aplica na prática é criar a camada de liderança que sustenta a delegação. Não é dar tarefa para alguém — é construir um líder que assume a responsabilidade de um setor inteiro. Os próprios líderes do meu escritório conduzem os treinamentos porque vivem isso todos os dias.",
  },
  {
    q: "Já comprei mentoria antes e não tive o resultado esperado.",
    a: "A questão não é se mentoria funciona — é se quem ensina consegue provar o método dentro da própria advocacia. Não abandonei a prática para ensinar. Comando ativamente um dos maiores escritórios trabalhistas do Brasil e apliquei o mesmo método no previdenciário, partindo do zero, chegando a 200 processos mensais em menos de dois anos. O que ensino é o que vivo.",
  },
  {
    q: "Não tenho tempo para acompanhar uma mentoria agora.",
    a: "A falta de tempo é o sintoma — não o problema. O problema é que o escritório ainda depende de você para tudo, e isso consome exatamente o tempo que seria necessário para estruturá-lo. A mentoria não é mais uma coisa para encaixar na agenda. É a ferramenta para criar a estrutura que devolve esse tempo.",
  },
  {
    q: "Como sei que o investimento vai compensar?",
    a: "Mais de 600 advogados já passaram pelas minhas mentorias. Escritório mais bem avaliado do Brasil. Prêmio nacional de melhor CEO de escritório de advocacia. Mais de R$ 20 milhões faturados no último ano em operação ativa. Esses números não vieram de marketing — vieram de um escritório que construí, estruturei e continuo operando.",
  },
];

const trustMarks = [
  {
    image: "/images/trust/award-trophy.jpg",
    imageAlt: "Rafael Mendes recebendo prêmio nacional",
    aspect: "aspect-[2/3]",
    fit: "object-cover",
    title: "Melhor CEO de Escritório de Advocacia",
    body: "Prêmio nacional — reconhecimento pela operação, não pelo discurso.",
  },
  {
    image: "/images/trust/google-reviews.png",
    imageAlt: "Avaliação 5.0 no Google com 5.095 avaliações",
    aspect: "aspect-[4/5]",
    fit: "object-cover",
    title: "Escritório mais bem avaliado do Brasil",
    body: "Avaliação de clientes reais — não de alunos de mentoria.",
  },
  {
    image: "/images/trust/growth-chart.png",
    imageAlt: "Gráfico de crescimento 2022-2026",
    aspect: "aspect-[16/9]",
    fit: "object-contain",
    title: "Um dos maiores trabalhistas do Brasil",
    body: "Construído ao longo de 17 anos de operação ininterrupta.",
  },
];

function Diamond({ className = "h-1.5 w-1.5" }: { className?: string }) {
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

export function FAQ() {
  return (
    <section id="faq" className="relative pb-4 pt-4 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-[84rem] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-12">
          <h2 className="font-display text-[36px] font-normal leading-[1.05] tracking-[-0.02em] text-bone sm:text-[52px] md:col-span-7 md:text-[64px] md:leading-[1.02] md:tracking-[-0.025em] lg:text-[76px]">
            Crescer foi a parte fácil.{" "}
            <em className="font-normal italic text-accent">
              Sustentar o crescimento é outra história.
            </em>
          </h2>

          <div className="space-y-5 text-stone md:col-span-5 md:pt-4">
            <p className="text-[16px] leading-[1.65] md:text-[17px]">
              Advogados que já chegaram longe costumam ter o mesmo problema: o
              escritório cresce, mas o dono não consegue acompanhar o
              crescimento. Mais volume, mais responsabilidade, mais
              dependência de uma única pessoa.
            </p>
            <p className="text-[16px] leading-[1.65] md:text-[17px]">
              O que ensino nas mentorias não é como começar. É como transformar
              o que você já construiu em uma operação que funciona{" "}
              <span className="text-bone">sem depender exclusivamente de você.</span>
            </p>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="mt-20 grid grid-cols-1 gap-x-16 md:grid-cols-12">
          <div className="md:col-span-12">
            <ul className="border-t border-line">
              {faqs.map((f) => (
                <li key={f.q} className="border-b border-line">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 transition-colors hover:text-bone">
                      <span className="font-display text-[22px] font-normal leading-[1.25] tracking-[-0.005em] text-bone md:text-[28px]">
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className="mt-2 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-line-strong text-stone transition-all duration-300 group-open:rotate-45 group-open:border-bone group-open:text-bone"
                      >
                        <svg
                          viewBox="0 0 14 14"
                          fill="none"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            d="M7 1.5V12.5M1.5 7H12.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="grid grid-cols-1 pb-8 md:grid-cols-12">
                      <p className="text-[16px] leading-[1.65] text-stone md:col-span-9 md:col-start-1 md:text-[17px]">
                        {f.a}
                      </p>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust marks — 3 columns side-by-side */}
        <div className="mt-6 py-4 md:mt-32 md:py-16">
          <div className="mx-auto max-w-[84rem]">
            {/* 3 trust marks side-by-side */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {trustMarks.map((m, i) => (
                <div
                  key={m.title}
                  className={`flex flex-col px-2 py-10 md:px-8 md:py-0 ${
                    i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""
                  }`}
                >
                  {/* Visual proof image */}
                  <div className={`relative mb-7 ${m.aspect} w-full overflow-hidden rounded-xl border border-line bg-base-2/40`}>
                    <Image
                      src={m.image}
                      alt={m.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={m.fit}
                    />
                  </div>

                  <h3 className="font-display text-[22px] font-normal italic leading-[1.25] tracking-[-0.005em] text-bone md:text-[26px] lg:text-[30px]">
                    {m.title}
                  </h3>
                  <p className="mt-5 text-[14.5px] leading-[1.6] text-stone md:text-[15px]">
                    {m.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
