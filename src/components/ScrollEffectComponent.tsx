'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

const ScrollEffectComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shrinkFactor = Math.max(0, 1 - scrollY / 5000);
  const opacityFactor = Math.max(0, 1 - scrollY / 2000);

  return (
    <div className="fixed z-10 max-w-7xl mx-auto h-full inset-x-0 px-4" style={{ transform: `scale(${shrinkFactor})`, opacity: opacityFactor }}>
          <div className="flex flex-col h-full md:flex-row md:items-center justify-between rounded-3xl mb-6 relative">
            <div className="mb-2 md:mb-0 relative md:w-1/2 w-full h-full md:order-2 overflow-hidden">
              <Image
                src="/photo_2024-11-07_17-22-44.jpg"
                alt="photo"
                className="rounded-3xl object-cover w-full h-full"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </div>
            <div className="w-full flex flex-col justify-center md:w-1/2 space-y-4 md:mb-0 md:order-1 md:static absolute h-full p-4">
              <p className="text-lg">Мини-курс от Анны Царевой</p>
              <div className="text-4xl md:text-6xl font-bold space-y-2">
                <p>&laquo;Внутренний критик&raquo;</p>
              </div>
              <p className="mb-6 text-lg">
                Освободись от внутреннего самозванца и реализуй свои самые смелые цели.
              </p>
              <a
                href="https://t.me/Anna_School_bot"
                className="text-center inline-block bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
                target="_blank"  // открывает в новой вкладке
                rel="noopener noreferrer"  // добавляет безопасность при открытии в новой вкладке
              >
                Предзапись на курс
              </a>

            </div>
          </div>
          <div className="absolute bottom-4 z-10 inset-x-0 flex justify-center">
            <div className="animate-bounce text-white">
              <FiChevronDown className="h-8 w-8" />
            </div>
          </div>
        </div>
  );
};

export default ScrollEffectComponent;
