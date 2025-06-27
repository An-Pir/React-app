const specialists = [
  {
    title: 'Дизайнеры интерьеров',
    color: 'indigo',
    border: 'border-indigo-200',
    text: 'text-indigo-500',
    desc: 'Креатив и знание трендов! Поможем создать уникальный и функциональный дизайн ванной, учитывая ваши пожелания и стиль жизни.',
  },
  {
    title: 'Сантехники',
    color: 'blue',
    border: 'border-blue-200',
    text: 'text-blue-500',
    desc: 'Опытные мастера по установке и обслуживанию. Гарантируем высокие стандарты безопасности и качества во всех работах.',
  },
  {
    title: 'Отделочники',
    color: 'emerald',
    border: 'border-emerald-200',
    text: 'text-emerald-500',
    desc: 'Эксперты по плитке, покраске и ремонту. Внимательны к деталям — чтобы ваша ванная смотрелась безупречно!',
  },
  {
    title: 'Проектировщики',
    color: 'pink',
    border: 'border-pink-200',
    text: 'text-pink-500',
    desc: 'Разработаем техническую документацию и планы, чтобы ремонт шёл быстро, чётко и без проблем.',
  },
  {
    title: 'Менеджеры проектов',
    color: 'yellow',
    border: 'border-yellow-200',
    text: 'text-yellow-500',
    desc: 'Координируем ваш проект от и до — следим за сроками, бюджетом и всегда на связи для решения ваших вопросов.',
  },
];

const reviews = [
  {
    name: 'Ирина П.',
    color: 'indigo',
    quote: <>Я очень довольна работой команды <span className="font-semibold">«Мастерская Ванных»</span>! Они полностью преобразили мою ванную комнату, и теперь это моё любимое место в доме. Дизайнер предложил отличные идеи, а мастера выполнили всё быстро и качественно. Особенно понравилось, что всегда были на связи и отвечали на все вопросы. <span className="text-indigo-500 font-semibold">Рекомендую всем!</span></>
  },
  {
    name: 'Сергей А.',
    color: 'blue',
    quote: <>Обратился в <span className="font-semibold">«Мастерская Ванных»</span> по рекомендации друга и не пожалел! Ремонт прошёл без задержек, а качество работы превзошло все ожидания. Сантехники сделали всё на высшем уровне — теперь нет проблем с водопроводом. Спасибо за профессионализм и внимательное отношение!</>
  },
  {
    name: 'Карина О.',
    color: 'emerald',
    quote: <>Я долго искала компанию, которая могла бы сделать ремонт в ванной, и наконец нашла <span className="font-semibold">«Ремонт Ванных»</span>. С самого начала поразило, как внимательно отнеслись к моим пожеланиям. Результат превзошёл все ожидания! Ванная стала и красивой, и удобной. <span className="text-emerald-500 font-semibold">Спасибо всей команде!</span></>
  },
];

function About() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-indigo-50 to-blue-100 px-4 py-8 flex flex-col items-center">

      <section className="max-w-3xl w-full mb-10">
        <h1 className="text-center text-4xl font-extrabold text-indigo-700 mb-3 drop-shadow">
          Наша команда
        </h1>
        <p className="text-gray-700 text-lg font-medium mb-6 text-center">
          В&nbsp;<span className="font-bold">«Мастерская Ванных»</span> мы гордимся командой профи, которые делают возможным создание <span className="underline decoration-indigo-400">идеальных ванных комнат</span>. Каждый — высококлассный специалист с большим опытом и увлечённостью своим делом. Мы работаем вместе, чтобы обеспечить клиентам лучший результат и воплотить мечты в реальность.
        </p>
      </section>

      <section className="mb-12 w-full max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-800">Наши специалисты:</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((sp, i) => (
            <div
              key={sp.title}
              className={`bg-white/70 rounded-2xl shadow hover:shadow-lg p-6 flex flex-col items-center transition border-t-4 ${sp.border}`}
            >
              <h3 className={`text-lg font-semibold mb-2 ${sp.text}`}>{sp.title}</h3>
              <p className="text-sm text-gray-600 text-center">{sp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
          Отзывы клиентов
        </h2>
        <div className="space-y-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`bg-white/80 border-l-4 rounded-2xl shadow p-6 border-${review.color}-400`}
            >
              <h3 className={`text-lg font-semibold mb-2 text-${review.color}-700`}>
                {review.name}
              </h3>
              <blockquote className="italic text-gray-700">{review.quote}</blockquote>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;