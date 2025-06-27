import React from 'react';

import img3 from '../images/3.webp';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpeg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';

function Gallery() {
  const images = [
    { id: 1, src: img3, category: 'демонтаж' },
    { id: 2, src: img4, category: 'укладка плитки' },
    { id: 3, src: img5, category: 'сантехника' },
    { id: 4, src: img6, category: 'демонтаж' },
    { id: 5, src: img7, category: 'укладка плитки' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-black mb-6 text-gray-800 flex items-center gap-3">
        Галерея выполненных работ
      </h1>
      <div className="mb-8 flex items-center gap-2">
        <span className="text-blue-500 text-lg">🔎</span>
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border border-blue-300 bg-blue-50 px-3 py-2 rounded shadow-sm focus:ring-2 focus:ring-blue-200 outline-none"
        >
          <option value="all">Все работы</option>
          <option value="демонтаж">Демонтаж</option>
          <option value="укладка плитки">Укладка плитки</option>
          <option value="сантехника">Сантехника</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div
            key={image.id}
            className="rounded-lg overflow-hidden bg-white shadow-lg group relative transition hover:shadow-2xl"
          >
            <img
              src={image.src}
              alt={`Работа ${image.id}`}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-3 py-0.5 rounded-full opacity-90">
              {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
            </span>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-gray-400 py-10 text-center">
          Нет работ в этой категории.
        </div>
      )}
    </div>
  );
}

export default Gallery;