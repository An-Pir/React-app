import React from 'react';

function Services() {
  // Пример статических данных – на практике можно получать их через API
  const services = [
    { id: 1, name: 'Демонтаж', description: 'Удаление старых покрытий', price: 'от 5000₽' },
    { id: 2, name: 'Укладка плитки', description: 'Профессиональная укладка плитки', price: 'от 8000₽' },
    { id: 3, name: 'Установка сантехники', description: 'Качественная установка оборудования', price: 'от 10000₽' }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Наши услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(service => (
          <div key={service.id} className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p>{service.description}</p>
            <p className="mt-2 font-semibold">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;