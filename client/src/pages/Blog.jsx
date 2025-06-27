import React from 'react';

function Blog() {
  // Пример статичных данных для блога
  const posts = [
    { id: 1, title: 'Советы по выбору плитки', content: 'Контент статьи 1...' },
    { id: 2, title: 'Как правильно спланировать ремонт ванной', content: 'Контент статьи 2...' }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Блог</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p>{post.content}</p>
          <div className="mt-2">
            <button className="text-blue-500">Комментарии</button>
            <button className="text-green-500 ml-4">Подписаться</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;