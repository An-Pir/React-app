function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 text-white py-6 px-4 mt-8 shadow-inner">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>Ремонт Ванных Комнат</span>
        </div>
        <div className="text-sm text-blue-100">
          © {new Date().getFullYear()} Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default Footer;