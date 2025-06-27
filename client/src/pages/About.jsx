

function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">О нашей команде</h1>
      <p className="mb-4">
        Мы — команда профессионалов с многолетним опытом в ремонте ванных комнат.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Пример карточек сотрудников */}
        <div className="bg-gray-100 p-4 rounded">
          <img src="https://via.placeholder.com/150" alt="Член команды" className="mb-2 rounded-full mx-auto" />
          <h2 className="text-xl text-center">Иван Иванов</h2>
          <p className="text-center">Главный специалист</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <img src="https://via.placeholder.com/150" alt="Член команды" className="mb-2 rounded-full mx-auto" />
          <h2 className="text-xl text-center">Петр Петров</h2>
          <p className="text-center">Эксперт по дизайну</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <img src="https://via.placeholder.com/150" alt="Член команды" className="mb-2 rounded-full mx-auto" />
          <h2 className="text-xl text-center">Сергей Сергеев</h2>
          <p className="text-center">Специалист по ремонту</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Отзывы клиентов</h2>
        <p>Здесь будут отображаться отзывы клиентов.</p>
      </div>
    </div>
  );
}

export default About;