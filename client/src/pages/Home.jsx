import { Link } from 'react-router-dom';
import img1 from '../images/1.jpg';

const advantages = [
  {
    title: 'Профессионализм и опыт',
    desc: 'Наша команда состоит из высококвалифицированных специалистов с более чем 10-летним опытом в сфере ремонта ванных комнат.',
  },
  {
    title: 'Индивидуальный подход',
    desc: 'Мы учитываем все пожелания и требования клиентов, предлагая уникальные решения, которые соответствуют вашему стилю и бюджету.',
  },
  {
    title: 'Качество материалов',
    desc: 'Мы работаем только с проверенными и надежными поставщиками, что гарантирует долговечность и высокое качество используемых материалов.',
  },
  {
    title: 'Комплексные услуги',
    desc: 'Предлагаем полный спектр услуг: от проектирования и выбора материалов до выполнения всех этапов ремонта, включая сантехнические и отделочные работы.',
  },
  {
    title: 'Современные технологии',
    desc: 'Используем новейшие технологии и методы, что позволяет нам достигать высоких стандартов качества и эффективности.',
  },
  {
    title: 'Прозрачность цен',
    desc: 'Мы предоставляем четкие сметы и не скрываем дополнительные расходы, чтобы вы всегда знали, за что платите.',
  },
  {
    title: 'Гарантия на работу',
    desc: 'Мы уверены в качестве своих услуг и предоставляем гарантию на выполненные работы, что обеспечивает дополнительное спокойствие нашим клиентам.',
  },
  {
    title: 'Соблюдение сроков',
    desc: 'Мы ценим ваше время и гарантируем выполнение работ в оговоренные сроки без задержек.',
  },
  {
    title: 'Отличное послепродажное обслуживание',
    desc: 'Мы всегда готовы ответить на ваши вопросы и помочь с любыми проблемами даже после завершения проекта.',
  },
];

function Home() {
  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur shadow-xl rounded-2xl py-10 px-4 md:px-12 mb-6">
        <h2 className="text-center text-3xl sm:text-5xl font-extrabold text-indigo-700 mb-4 tracking-tight drop-shadow">
          Добро пожаловать в{' '}
          <span className="text-blue-400">Мастерская ванных</span>
        </h2>
        <p className="mb-6 text-gray-700 text-lg font-medium text-center">
          Качественный ремонт, профессиональное обслуживание и гарантированные результаты. Ваш комфорт — наш главный приоритет!
        </p>

        <div className="mb-6 flex justify-center">
          <img
            src={img1}
            alt="Красивый интерьер ванной"
            className="rounded-xl shadow-lg max-h-56 w-full object-cover object-center"
            style={{ background: '#eef2ff' }}
          />
        </div>

        <h3 className="text-xl font-semibold text-indigo-600 mb-4 mt-2 sm:mt-4 text-center">Наши преимущества</h3>
        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl border-l-4 border-blue-400 p-5 flex flex-col hover:shadow-2xl transition-shadow duration-200"
            >
              <div className="font-bold text-indigo-700 text-lg mb-2">{adv.title}</div>
              <div className="text-gray-600">{adv.desc}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-indigo-600 mb-2 mt-4 text-center">Наша философия</h3>
        <p className="mb-2 text-gray-600 leading-relaxed text-center">
          Мы верим, что успешный проект — результат командной работы и взаимопонимания. Каждый член нашей команды вносит свой вклад в общий успех, и мы стремимся, чтобы каждый клиент был доволен результатом.
        </p>
        <p className="mb-2 text-gray-600 leading-relaxed text-center">
          Мы постоянно учимся и развиваемся, чтобы быть в курсе последних тенденций и технологий в ремонте. С нами ваша ванная будет не просто красивой, но и максимально функциональной!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            className="w-full sm:w-auto text-center bg-blue-500 hover:bg-blue-600 transition font-semibold text-white px-5 py-2 rounded-lg shadow-lg"
            to="/services"
          >
            Наши услуги
          </Link>
          <Link
            className="w-full sm:w-auto text-center bg-green-500 hover:bg-green-600 transition font-semibold text-white px-5 py-2 rounded-lg shadow-lg"
            to="/calculator"
          >
            Посчитать ремонт
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;