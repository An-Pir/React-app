import React, { useState } from 'react';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно отправить данные на сервер через API
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Контакты</h1>
      <p className="mb-4">Телефон: +7 123 456-78-90</p>
      <p className="mb-4">Email: info@example.com</p>
      <p className="mb-4">Адрес: ул. Примерная, 1, Москва</p>

      <h2 className="text-2xl font-bold mb-4">Обратная связь</h2>
      {submitted ? (
        <p>Ваше сообщение отправлено!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Имя</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Телефон</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Сообщение</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border p-2 w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Отправить
          </button>
        </form>
      )}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Наше местоположение</h2>
        {/* Можно встроить Google Maps */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.3450437849994!2d37.616667!3d55.750000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a64b9d89aeb%3A0xca3dcd2149e2a832!2sMoscow%20City!5e0!3m2!1sen!2sru!4v1614093641808!5m2!1sen!2sru"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contacts;