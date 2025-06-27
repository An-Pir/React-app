import { useState, useContext } from 'react';
import axios from 'axios';


const ServiceCreateForm = () => {
 
  const token = localStorage.getItem('token');

  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setSuccess(false);

    try {
      await axios.post(
        'http://localhost:5000/api/services',
        form,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setSuccess(true);
      setMessage('Услуга успешно создана!');
      setForm({ name: '', description: '', price: '' });
    } catch (error) {
      setSuccess(false);
      setMessage(
        error.response?.data?.message ||
        'Ошибка при создании услуги'
      );
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5"> Создать новую услугу</h2>
      {message && (
        <div
          className={`mb-3 p-2 rounded
            ${success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
          {message}
        </div>
      )}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Название услуги"
          value={form.name}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Описание услуги"
          value={form.description}
          onChange={handleChange}
          required
          rows={3}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Цена, руб."
          value={form.price}
          onChange={handleChange}
          required
          min="0"
          step="1"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded"
        >
          Создать услугу
        </button>
      </form>
    </div>
  );
};

export default ServiceCreateForm;