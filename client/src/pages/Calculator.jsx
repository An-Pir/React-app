import React, { useState } from 'react';

function Calculator() {
  const [area, setArea] = useState('');
  const [finishType, setFinishType] = useState('standard');
  const [additional, setAdditional] = useState({
    demolition: false,
    tiling: false,
    plumbing: false
  });
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const basePricePerSqM = 2000; // базовая цена за м²
    const finishPrices = {
      standard: 0,
      premium: 500
    };
    const additionalPrices = {
      demolition: 3000,
      tiling: 4000,
      plumbing: 5000
    };

    let total = area * basePricePerSqM;
    total += area * finishPrices[finishType];

    for (let key in additional) {
      if (additional[key]) {
        total += additionalPrices[key];
      }
    }
    setResult(total);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Калькулятор ремонта</h1>
      <div className="mb-4">
        <label className="block mb-2">Площадь ванной комнаты (м²)</label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Выберите тип отделки</label>
        <select
          value={finishType}
          onChange={(e) => setFinishType(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="standard">Стандарт</option>
          <option value="premium">Премиум (+500₽/м²)</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Дополнительные услуги</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="demolition"
            checked={additional.demolition}
            onChange={(e) => setAdditional({ ...additional, demolition: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="demolition">Демонтаж (+3000₽)</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="tiling"
            checked={additional.tiling}
            onChange={(e) => setAdditional({ ...additional, tiling: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="tiling">Укладка плитки (+4000₽)</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="plumbing"
            checked={additional.plumbing}
            onChange={(e) => setAdditional({ ...additional, plumbing: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="plumbing">Установка сантехники (+5000₽)</label>
        </div>
      </div>
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Рассчитать
      </button>
      {result !== null && (
        <div className="mt-4">
          <h2 className="text-2xl">Итоговая стоимость: {result}₽</h2>
        </div>
      )}
    </div>
  );
}

export default Calculator;