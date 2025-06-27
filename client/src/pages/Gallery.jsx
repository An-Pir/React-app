import React from 'react';

function Gallery() {
  // Пример данных с изображениями и категориями
  const images = [
    { id: 1, url: 'https://via.placeholder.com/300', category: 'демонтаж' },
    { id: 2, url: 'https://via.placeholder.com/300', category: 'укладка плитки' },
    { id: 3, url: 'https://via.placeholder.com/300', category: 'сантехника' },
    { id: 4, url: 'https://via.placeholder.com/300', category: 'демонтаж' },
    { id: 5, url: 'https://via.placeholder.com/300', category: 'укладка плитки' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Галерея выполненных работ</h1>
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2"
        >
          <option value="all">Все</option>
          <option value="демонтаж">Демонтаж</option>
          <option value="укладка плитки">Укладка плитки</option>
          <option value="сантехника">Сантехника</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map(image => (
          <div key={image.id} className="cursor-pointer">
            <img src={image.url} alt={`Работа ${image.id}`} className="w-full h-auto rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;