import React from 'react'
import Card from "@/components/Card";
import SimpleCell from "@/components/SimpleCell";
import Header from "@/components/Header";
import { MdDone } from "react-icons/md";
import ScrollEffectComponent from "@/components/ScrollEffectComponent"

export async function generateStaticParams() {
  return [{}]; // возвращаем пустой объект, чтобы указать, что /mini-course — статичная страница
}

const MiniCoursePage = () => {

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="h-screen-lvh py-4 mb-14 relative">
        <ScrollEffectComponent/>
      </div>

      <div className="p-4 flex-shrink-0 bg-slate-900 rounded-t-3xl relative z-20">
        
        <p className="mb-8 text-md">
          Тебе подойдет этот курс, если ты готов перейти от самокритики к самоподдержке и уверенности.
        </p>

        <Card header={<Header>Курс поможет:</Header>}>
          <SimpleCell before={<MdDone size={24} style={{ color: 'rgb(156, 163, 175)' }} />}>
            Научиться поддерживать себя вместо самокритики, двигаться вперёд, а не топтаться на месте.
          </SimpleCell>
          <SimpleCell before={<MdDone size={24} style={{ color: 'rgb(156, 163, 175)' }} />}>
            Заявить о своих талантах, продвигать идеи и показывать результаты без страха осуждения.
          </SimpleCell>
          <SimpleCell before={<MdDone size={24} style={{ color: 'rgb(156, 163, 175)' }} />}>
            Построить карьеру или проект, не ограничивая себя сомнениями в собственной ценности.
          </SimpleCell>
          <SimpleCell before={<MdDone size={24} style={{ color: 'rgb(156, 163, 175)' }} />}>
            Перестать прокрастинировать и саботировать своё развитие.
          </SimpleCell>
        </Card>

        <div className="mt-10">
          <Header className="text-2xl mb-4">Что включает курс:</Header>

          <Card header={<Header>1. Блок &laquo;Этапы развития&raquo;</Header>}>
            <p>
              Лекция о ключевых фазах личного и карьерного роста, помогающая отличать внешние трудности от внутренних.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li>7 ключевых этапов и ошибки, тормозящие рост</li>
              <li>Как определить текущий этап и двигаться дальше?</li>
              <li>Методы преодоления препятствий</li>
            </ul>
          </Card>

          <Card header={<Header>2. Блок &laquo;Внутренний критик&raquo;</Header>} className="mt-6">
            <p>
              Погружение в природу внутреннего критика — как трансформировать его в своего союзника.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li>Кто такой &laquo;внутренний критик&raquo; и как он влияет на вас</li>
              <li>Техники работы с ним, чтобы он поддерживал, а не саботировал</li>
              <li>Медитации и упражнения для укрепления внутреннего настроя</li>
            </ul>
          </Card>

          <Card header={<Header>3. Блок &laquo;Когнитивные искажения&raquo;</Header>} className="mt-6">
            <p>
              Глубокий анализ когнитивных искажений, влияющих на самооценку и восприятие мира.
            </p>
            <ul className="list-disc ml-6 mt-4">
              <li>9 когнитивных искажений, тормозящих развитие</li>
              <li>Техники корректировки мышления для ясного восприятия</li>
            </ul>
          </Card>

          <p className="mt-8 text-lg">
            Этот курс создан с накопительным эффектом. Регулярная практика укрепит уверенность и позитивное мышление.
          </p>

          <a
            href="https://t.me/Anna_School_bot"
            className="text-center inline-block bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            target="_blank"  // открывает в новой вкладке
            rel="noopener noreferrer"  // добавляет безопасность при открытии в новой вкладке
          >
            Предзапись на курс
          </a>
          <p className="mt-8 text-lg">
            Приобрети курс в первый день продаж и получи &laquo;вопрос-ответ&raquo;
          </p>
        </div>
      </div>
    </div>

  )
}

export default MiniCoursePage

