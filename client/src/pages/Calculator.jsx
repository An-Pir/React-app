import  { useState } from 'react';

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
    const basePricePerSqM = 2000; 
    const finishPrices = {
      standard: 0,
      premium: 500
    };
    const additionalPrices = {
      demolition: 3000,
      tiling: 4000,
      plumbing: 5000
    };

    let total = Number(area) * basePricePerSqM;
    total += Number(area) * finishPrices[finishType];

    for (let key in additional) {
      if (additional[key]) {
        total += additionalPrices[key];
      }
    }
    setResult(total);
  };

  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white/80 rounded-2xl shadow-xl p-8 backdrop-blur">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center drop-shadow">
           Калькулятор ремонта
        </h1>
        <div className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Площадь ванной комнаты (м²)
            </label>
            <input
              type="number"
              min="1"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Введите площадь"
              className="border border-indigo-300 focus:border-indigo-500 rounded-lg p-3 w-full outline-none bg-white/60 text-gray-800 text-lg transition"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Выберите тип отделки
            </label>
            <select
              value={finishType}
              onChange={(e) => setFinishType(e.target.value)}
              className="border border-indigo-300 focus:border-indigo-500 rounded-lg p-3 w-full bg-white/60 text-gray-800 text-lg transition"
            >
              <option value="standard">Стандарт</option>
              <option value="premium">Премиум (+500₽/м²)</option>
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Дополнительные услуги
            </label>
            <div className="flex flex-col gap-2">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additional.demolition}
                  onChange={(e) =>
                    setAdditional({ ...additional, demolition: e.target.checked })
                  }
                  className="accent-indigo-500 h-5 w-5 rounded transition"
                />
                <span className="text-gray-800">Демонтаж <span className="text-xs text-gray-500">(+3000₽)</span></span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additional.tiling}
                  onChange={(e) =>
                    setAdditional({ ...additional, tiling: e.target.checked })
                  }
                  className="accent-indigo-500 h-5 w-5 rounded transition"
                />
                <span className="text-gray-800">Укладка плитки <span className="text-xs text-gray-500">(+4000₽)</span></span>
              </label>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={additional.plumbing}
                  onChange={(e) =>
                    setAdditional({ ...additional, plumbing: e.target.checked })
                  }
                  className="accent-indigo-500 h-5 w-5 rounded transition"
                />
                <span className="text-gray-800">Установка сантехники <span className="text-xs text-gray-500">(+5000₽)</span></span>
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold mt-8 w-full py-3 rounded-lg shadow-lg transition text-lg"
        >
          Рассчитать ремонт
        </button>

        {result !== null && (
          <div className="mt-8 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl border-l-4 border-blue-400 p-6 text-center shadow-inner animate-fade-in">
            <h2 className="text-2xl font-extrabold text-indigo-700 mb-1 flex items-center justify-center gap-2">
              Итоговая стоимость:
              <span className="text-3xl text-blue-500">{result}₽</span>
            </h2>
            <p className="text-gray-500 text-sm">
              *Расчет ориентировочный. Для точной сметы свяжитесь с нашими специалистами.
            </p>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.7s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Calculator;