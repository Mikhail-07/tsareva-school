import Image from "next/image";
import hero from '../../public/hero.png'
import hero2 from '../../public/hero2.jpeg'
import Link from "next/link";
import Card from "@/components/Card";
import SimpleCell from "@/components/SimpleCell";
import { TbFileCertificate } from "react-icons/tb";
import Header from "@/components/Header";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdDone } from "react-icons/md";
import Accordion from "@/components/Accordion";
import AccordionItem from "@/components/AccordionItem";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";
import SocialButton from "@/components/SocialButton";

export default function Home() {
  const withWhom = [
    {
      header: 'Поиск и определения самореализации',
      description: 'Как себя реализовать, если многое нравится, или наоборот, не знаете что нравится'
    },
    {
      header: 'Планирование',
      description: 'Трудоголизм, баланс работа / отдых'
    },
    {
      header: 'Отношения',
      description: 'Как улучшить отношения с супругом, детьми, коллегами, друзьями'
    },
    {
      header: 'Повышение дохода',
      description: 'Как выйти на новый уровень в найме и предпринимательстве, сохранив себя'
    },
    {
      header: 'Поиск себя',
      description: 'В чем моя уникальность? Кто я? Про что я? Что я хочу? Куда я иду?'
    }
  ]
  const priceCards = [
    {
      header: 'Разовая сессия',
      price: '5000 ₽',
      description: 'Идеально подходит для знакомства с коучингом и получения первых результатов',
      includes: ['Установочная сессия на 20 минут', 'Коуч сессия длительностью 60 минут']
    },
    {
      header: 'Пакет малый',
      price: '9500 ₽',
      oldPrice: '10000 ₽',
      description: 'Отличный вариант, если вы чувствуете, что решение вашей проблемы близко, но вам нужна помощь, чтобы его увидеть',
      includes: ['Установочная сессия на 20 минут', 'Две коуч сесси длительностью по 60 минут']
    },
    {
      header: 'Пакет базовый',
      price: '18000 ₽',
      oldPrice: '20000 ₽',
      description: 'Оптимальное количество сессий для достижения конкретных целей. У нас будет достаточно времени для детальной проработки вашей ситуации',
      includes: ['Установочная сессия на 20 минут', 'Четыре коуч сесси длительностью по 60 минут']
    },
    {
      header: 'Пакет максимальный',
      price: '36000 ₽',
      oldPrice: '40000 ₽',
      description: 'Для тех, кто хочет глубоко проработать свою проблему. Мы сможем рассмотреть и разобраться в различных аспектах вашей ситуации',
      badge: true,
      includes: ['Установочная сессия на 20 минут', 'Восемь коуч сесси длительностью по 60 минут']
    }
  ]

  const accordionItems = [
    {
      title: 'Как проходит сессия?',
      content: 'Сессия проходит в онлайн формате, где я задаю вам вопросы, которые помогают вам лучше понять свои мысли и чувства, а также найти ответы на ваши вопросы.'
    },
    {
      title: 'Что такое установочная сессия?',
      content: 'Для новых клиентов я провожу бесплатную установочную сессию, на которой мы знакомимся, я рассказываю о принципах коучинга, о формате работы, отвечаю на все ваши вопросы и помогаю вам определить ваш запрос. Это нужно для того, чтобы мы могли понять, подходим ли мы друг другу, чтобы у вас сформировалось правильное понимание о коуче и его работе, и чтобы вы смогли решить для себя, хотите ли вы идти в коучинг. Также это возможность для меня понять, могу ли я работать с вашим запросом и подхожу ли я вам. Бывает так, что клиенту необходим другой специалист, об этом я сообщаю на установочной сессии. '
    },
    {
      title: 'Cколько длится установочная сессия?',
      content: 'Длительность установочной сессии 15-20 минут.'
    },
    {
      title: 'Подходит ли мне коучинг?',
      content: 'После установочной сессии мы оба понимаем, готовы ли мы начать работу. Если да, то мы определяем дату и время для первой рабочей сессии.'
    },
    {
      title: 'Если вы оплатили сессию, но ваш вопрос не был решен...',
      content: 'Если Ваш запрос не возможно решить через коучинг, я произвожу возврат средств.'
    }

  ]

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="h-screen py-4 mb-6 ">
        <div className="flex flex-col h-full md:flex-row md:items-center justify-between rounded-3xl mb-6">
          <div className="mb-2 md:mb-0 relative md:w-1/2 w-full h-full md:order-2">
            <Image
              src={hero}
              alt="Vertical Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col items-start md:w-1/2 space-y-4  md:mb-0 md:order-1">
            <div className="text-4xl md:text-6xl font-bold space-y-2">
              <p>Анна</p>
              <p>Царева</p>
            </div>
            <p className="text-lg">Сертифицированный коуч ICF</p>
            <Link href="/signup" className="inline-block bg-transparent border border-gray-400  text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Запись на сессию
            </Link>
          </div>
        </div>
        <Card header="Обо мне">
          <SimpleCell
            before={<TbFileCertificate size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
            header={<Header>Сертификат ICF</Header>}
          >
            Сертифицированный коуч ICF (Международная федерация коучей). Дипломированный коуч РФ
          </SimpleCell>
          <SimpleCell
            before={<HiOutlineAcademicCap size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
            header={<Header>Окончила международную академию трансперсонального коучинга</Header>}
          >
            Владею классическим коучингом, коучингом ICF и трансперсональным коучингом
          </SimpleCell>
          <SimpleCell
            before={<FaArrowTrendUp  size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
            header={<Header>Повышаю квалификацию</Header>}
          >
            Курсы, семинары, проф. переподготовки
          </SimpleCell>
          <SimpleCell
            before={<LiaHandsHelpingSolid size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
            header={<Header>Регулярные супервизии и личная терапия</Header>}
          >
            Работаю на регулярной основе с супервизором и личным коучем
          </SimpleCell>
        </Card>
        <div>
          <div className="relative w-screen h-64 md:h-full -mx-4 md:-mx-8 mb-8  ">
            <Image
              src={hero2}
              alt="Vertical Photo 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mb-8">
            <p className="mb-2">
            18 лет тренировала танцоров, выращивала из них лидеров, педагогов, чьи работы как сольных артистов, так и постановщиков вы видите на экранах федеральных каналов, кино, а так же на различных шоу самых разных форматов. 
            </p>
            <p className="mb-2">
              Мои личные достижения, победы и подробную работу в танцах вы можете прочесть тут .
            </p>
            <p className="mb-2">
              Я знаю все о вопросах реализации потенциала, достижениях своих целей и улучшении качества своей жизни и через коучинг помогаю другим людям в работе над собой.
            </p>
          </div>
        </div>
        <Card header="С кем я работаю">
          {withWhom.map(({header, description}) => 
            <SimpleCell
              before={<MdDone size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
              header={<Header>{header}</Header>}
            >
              {description}
            </SimpleCell>
          )}
          <Link href="/signup" className="inline-block bg-transparent border border-gray-400  text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Запись на сессию
          </Link>
        </Card>
        <h1 className="text-4xl mb-3">Цены</h1>
        {priceCards.map(({header, price, oldPrice, description, badge, includes}) => 
          <Card 
            key={header}
            badge={badge}
          >
            <SimpleCell
              header={<Header>{header}</Header>}
            >
              <div className="flex gap-4">
                <Header className="text-2xl">{price}</Header>
                <span className="align-text-bottom">{oldPrice}</span>
              </div>
              
              {description}
            </SimpleCell>
            {includes.map(des => 
              <SimpleCell
                key={des}
                mode="white"
                before={<MdDone size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
              >
                {des}
              </SimpleCell>
            )}
            <Link href="/signup" className="inline-block bg-transparent border border-gray-400  text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              Выбрать
            </Link>
          </Card>
          
        )}
        <Accordion>
          {accordionItems.map(({title, content}) =>
            <AccordionItem key={title} title={title}>
              <p>{content}</p>
            </AccordionItem>
          )}
        </Accordion>
        <Card>
          <div className="flex items-center justify-between">
            <Header>Остались вопросы?</Header>
            <div className="flex gap-2">
              <SocialButton 
                url="#"
                icon={ <FaTelegramPlane size={24}/> }
              />
              <SocialButton 
                url="https://www.instagram.com/annatsareva1"
                icon={ <FaInstagram size={24}/> }
              />
              <SocialButton 
                url="#"
                icon={ <FaTiktok size={24}/> }
              />
            </div>
          </div>
        </Card>
      </div>
      
      
    </main>
  );
}
