import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', to: '/' },
    { name: 'О нас', to: '/about' },
    { name: 'Услуги', to: '/services' },
    { name: 'Калькулятор', to: '/calculator' },
    { name: 'Контакты', to: '/contacts' },
    { name: 'Галерея', to: '/gallery' },
    { name: 'Блог', to: '/blog' },
    { name: 'Личный кабинет', to: '/dashboard' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className='bg-gradient-to-r from-indigo-800 via-blue-900 to-blue-700 shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
        <Link
          to='/'
          className='text-2xl font-black tracking-wide text-white hover:text-blue-200 transition duration-150 select-none flex items-center gap-2'
        >
          Мастерская Ванных
        </Link>

  
        <div className='hidden lg:flex items-center gap-2 ml-8'>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg font-medium transition
                ${
                  location.pathname === link.to
                    ? 'bg-blue-100 text-indigo-800 shadow'
                    : 'text-white hover:bg-white/20 hover:text-blue-200'
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>


        <button
          className='lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded active:bg-blue-800 focus:outline-none transition group'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Открыть меню'
        >
          <span className='block w-7 h-0.5 bg-white rounded mb-1.5 transition-all duration-300' />
          <span className='block w-7 h-0.5 bg-white rounded mb-1.5 transition-all duration-300' />
          <span className='block w-7 h-0.5 bg-white rounded transition-all duration-300' />
        </button>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className='lg:hidden bg-indigo-900/95 px-4 pb-3 pt-1 space-y-1'>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-3 py-2 rounded-lg font-medium transition text-base
                ${
                  location.pathname === link.to
                    ? 'bg-blue-100 text-indigo-800 shadow'
                    : 'text-white hover:bg-white/20 hover:text-blue-200'
                }
              `}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;