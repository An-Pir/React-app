
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Calculator from './pages/Calculator.jsx';
import Contacts from './pages/Contacts.jsx';
import Gallery from './pages/Gallery.jsx';
import Blog from './pages/Blog.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto py-4 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;