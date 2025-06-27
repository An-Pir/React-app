import React, { useState } from 'react';

const initialPosts = [
  {
    id: 1,
    title: 'Топ-5 трендов в дизайне ванных комнат на 2024 год',
    content: `Введение
Ванная комната — это не только функциональное пространство, но и место, где мы можем расслабиться и насладиться моментом. В этой статье мы рассмотрим самые актуальные тренды в дизайне ванных комнат на 2024 год, которые помогут вам создать стильное и комфортное пространство.

1. Минимализм
Минималистичный дизайн продолжает оставаться в моде. Чистые линии, простые формы и нейтральные цвета создают ощущение простора и спокойствия. Используйте встроенные шкафы и скрытые системы хранения, чтобы избежать беспорядка.

2. Натуральные материалы
Дерево, камень и другие натуральные материалы становятся все более популярными. Они добавляют тепла и уюта в ванную комнату. Рассмотрите возможность использования деревянных полок или каменной плитки для создания уникального стиля.

3. Умные технологии
Современные технологии проникают в каждую сферу нашей жизни, и ванные комнаты не исключение. Умные зеркала с подсветкой, термостаты для душа и системы управления освещением делают использование ванной комнаты более удобным и комфортным.

4. Яркие акценты
Не бойтесь добавлять яркие акценты в интерьер. Это могут быть цветные плитки, яркие полотенца или оригинальные аксессуары. Они помогут сделать пространство более живым и интересным.

5. Экологичность
С каждым годом все больше людей обращают внимание на экологические аспекты. Используйте водосберегающие сантехнические приборы и экологически чистые материалы, чтобы сделать вашу ванную комнату более устойчивой.

Заключение
Следуя этим трендам, вы сможете создать ванную комнату, которая будет не только красивой, но и функциональной. Не забывайте, что главное — это ваше удобство и комфорт.
    `,
  },
  {
    id: 2,
    title: 'Как выбрать идеальную плитку для ванной комнаты',
    content: `Введение
Плитка — один из самых популярных материалов для отделки ванных комнат. Но как выбрать идеальную плитку, которая будет сочетать в себе красоту, долговечность и функциональность? В этой статье мы поделимся полезными советами.

1. Учитывайте влагостойкость
Ванная комната — это помещение с высокой влажностью, поэтому выбирайте плитку, которая устойчива к влаге. Керамическая и керамогранитная плитка — отличные варианты, так как они не впитывают воду и легко чистятся.

2. Размер плитки
Размер плитки может существенно повлиять на восприятие пространства. Большие плитки визуально увеличивают пространство, в то время как маленькие плитки могут добавить текстуры и интереса. Подумайте о том, какой эффект вы хотите достичь.

3. Цвет и текстура
Выбор цвета и текстуры плитки зависит от вашего стиля и предпочтений. Нейтральные цвета создают спокойную атмосферу, в то время как яркие и насыщенные оттенки могут добавить энергии. Текстурированная плитка может помочь избежать скольжения на мокром полу.

4. Укладка плитки
Правильная укладка плитки — это залог долговечности и эстетики. Если вы не уверены в своих силах, лучше обратиться к профессионалам. Они помогут избежать распространенных ошибок и обеспечат качественный результат.

Заключение
Выбор плитки для ванной комнаты — это важный шаг, который требует внимания к деталям. Учитывайте влагостойкость, размер, цвет и текстуру, чтобы создать идеальное пространство для себя.
    `,
  },
  {
    id: 3,
    title: '3 совета по ремонту ванной комнаты',
    content: `1. Планируйте пространство заранее
Перед началом ремонта важно тщательно спланировать, как будет выглядеть ваша ванная комната. Определите, какие элементы вам необходимы (унитаз, раковина, душ или ванна) и как они будут расположены. Используйте 3D-визуализации или простые эскизы, чтобы увидеть, как будет выглядеть конечный результат. Убедитесь, что между элементами достаточно пространства для комфортного использования. Это поможет избежать неудобств в будущем и сделает вашу ванную комнату более функциональной.

2. Выбирайте качественные материалы
При ремонте ванной комнаты важно использовать влагостойкие и долговечные материалы. Плитка, сантехника и отделочные материалы должны быть устойчивыми к влаге и перепадам температуры. Обратите внимание на качество и репутацию производителей. Хотя качественные материалы могут стоить дороже, они обеспечат долговечность и снизят вероятность необходимости ремонта в будущем.

3. Не забывайте о вентиляции
Правильная вентиляция — ключевой аспект в ванной комнате, который часто игнорируется. Убедитесь, что в вашей ванной комнате есть качественная вентиляционная система, чтобы предотвратить образование плесени и грибка. Если возможно, установите вытяжной вентилятор, который будет работать автоматически при включении света. Это поможет поддерживать свежесть и чистоту в помещении, а также продлит срок службы отделочных материалов.
    `,
  },
];


function SubscriptionModal({ show, onClose, onSubscribe }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); 

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      onSubscribe(email);
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle'); 
        setEmail('');
      }, 2000);
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-blue-400/20"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <h3 className="mb-4 text-center text-2xl font-bold text-indigo-700">
          Подписка на новости
        </h3>
        {status === 'success' ? (
          <div className="py-6 text-center text-lg font-semibold text-green-600">
            Вы успешно подписаны! 🎉
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vash.email@example.com"
              className="w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
              required
              autoFocus
            />
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 py-2 font-semibold text-white hover:bg-indigo-700 transition"
            >
              Подписаться
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


function Blog() {
  const [comments, setComments] = useState({});
  const [commentForm, setCommentForm] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormChange = (postId, field, value) => {
    setCommentForm((prev) => ({
      ...prev,
      [postId]: { ...prev[postId], [field]: value },
    }));
  };

  const handleCommentSubmit = (e, postId) => {
    e.preventDefault();
    const name = (commentForm[postId]?.name || '').trim();
    const text = (commentForm[postId]?.text || '').trim();
    if (!name || !text) return;

    const newComment = { name, text };
    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), newComment],
    }));

    setCommentForm((prev) => ({
      ...prev,
      [postId]: { name: '', text: '' },
    }));
  };
  
  const handleSubscribe = (email) => {
    console.log(`Подписка на email: ${email}`);
    // Здесь будет логика отправки email на сервер
  };

  return (
    <>
      <SubscriptionModal 
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubscribe={handleSubscribe}
      />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-10 text-center text-4xl font-bold text-indigo-800">
          Наш Блог 
        </h1>

        {initialPosts.map((post) => (
          <div
            key={post.id}
            className="mb-12 rounded-xl border-l-4 border-indigo-500 bg-white p-6 shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-bold text-gray-800">{post.title}</h2>
            <p className="whitespace-pre-line text-gray-700">{post.content}</p>
            
            <div className="mt-6 flex items-center gap-4">
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="font-semibold text-green-600 hover:text-green-800 transition"
               >
                 Подписаться на обновления
               </button>
            </div>


            <div className="mt-8 border-t pt-6">
              <h3 className="mb-4 text-xl font-semibold">Комментарии</h3>
              <form
                onSubmit={(e) => handleCommentSubmit(e, post.id)}
                className="mb-6 flex flex-col gap-3 rounded-lg bg-gray-50 p-4"
              >
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={commentForm[post.id]?.name || ''}
                  onChange={(e) => handleFormChange(post.id, 'name', e.target.value)}
                  className="rounded border p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                />
                <textarea
                  placeholder="Оставьте свой комментарий..."
                  rows="3"
                  value={commentForm[post.id]?.text || ''}
                  onChange={(e) => handleFormChange(post.id, 'text', e.target.value)}
                  className="rounded border p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="self-start rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
                >
                  Отправить
                </button>
              </form>

              <div className="space-y-4">
                {comments[post.id]?.length > 0 ? (
                  comments[post.id].map((comment, index) => (
                    <div key={index} className="rounded-md bg-gray-100 p-3">
                      <p className="font-bold text-indigo-700">{comment.name}</p>
                      <p className="text-gray-800">{comment.text}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">Комментариев пока нет. Будьте первым!</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;