import { useState } from 'react';
import img2 from "../images/2.png";

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
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Контакты</h1>
      <p className="mb-4">Телефон: (912) 00-55-000</p>
      <p className="mb-4">Email: mastervann@mail.ru</p>
      <p className="mb-4">Адрес:г. Москва, ул. Молодежная, 11, к. 15</p>

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
        <img
          src={img2}
          width="100%"
          height="300"
          style={{ border: 0 }}
        ></img>
      </div>
    </div>
  );
}

export default Contacts;