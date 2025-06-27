
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Добро пожаловать в Ремонт Ванных Комнат</h1>
      <p className="mb-4">Качественный ремонт, профессиональное обслуживание и гарантированные результаты.</p>
      <div className="flex justify-center">
        <Link className="bg-blue-500 text-white px-4 py-2 rounded mr-2" to="/services">Наши услуги</Link>
        <Link className="bg-green-500 text-white px-4 py-2 rounded" to="/calculator">Посчитать ремонт</Link>
      </div>
    </div>
  );
}

export default Home;