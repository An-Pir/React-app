
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link to="/">Ремонт Ванных Комнат</Link>
        </div>
        <div>
          <Link className="px-3" to="/">Главная</Link>
          <Link className="px-3" to="/about">О нас</Link>
          <Link className="px-3" to="/services">Услуги</Link>
          <Link className="px-3" to="/calculator">Калькулятор</Link>
          <Link className="px-3" to="/contacts">Контакты</Link>
          <Link className="px-3" to="/gallery">Галерея</Link>
          <Link className="px-3" to="/blog">Блог</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;