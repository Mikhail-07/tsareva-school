import Image from "next/image";
import hero from '../../public/hero.png'
import hero2 from '../../public/hero2.jpeg'
import certify from '../../public/certify.png'
import avatar from '../../public/avatar.jpg'
import qrCode from '../../public/qrCode.svg'
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
import { IoEarth } from "react-icons/io5";
import ThumbnailImage from "@/components/ThumbnailImage";
import { RiLink } from "react-icons/ri";
import Head from "next/head";

export default function Home() {

  const waOptionSession = "https://wa.me/9118369411?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE%D1%87%D0%BD%D1%83%D1%8E%20%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E"
  const waSession = 'https://wa.me/9118369411?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%81%D0%B5%D1%81%D1%81%D0%B8%D1%8E'
  const waQuestion = "https://wa.me/9118369411?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D1%83%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B5%D1%81%D1%82%D1%8C%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81"

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
  const priceLight = [
    {
      header: 'Две сессии',
      price: '9500 ₽',
      oldPrice: '10000 ₽',
    },
    {
      header: 'Четыре сессии',
      price: '18000 ₽',
      oldPrice: '20000 ₽',
    },
    {
      header: 'Восемь сессий',
      price: '36000 ₽',
      oldPrice: '40000 ₽',
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

  const achievements = [
    'Хореограф и актриса сериала «1703» (Лучший сериал 2022г)',
    'Танцор в клипе KAYA «Контент»',
    'Танцор в клипе Лады Денс «Алеша»',
    'Танцор в клипе Николая Баскова «Сердце на сердце»',
    'Танцор в клипе Little Big «Скибиди2»',
    'Танцор в клипе Джонни Фунт «Яд»',
    "Актриса и хореограф-постановщик в клипе Big Russian Boss «Не виновен»",
    "Актриса в короткометражном фильме «МИРАЖИ»",
    "Номинация на лучшую женскую роль на Римском кинофестивале",
    "Спикер и педагог по модельной походке и позингу в школе аниматоров «Море шоу»",
    "Танцор основного балета мероприятия «В один голос» Олимпийский 22, 23, 24 марта 2018г.",
    "Танцор в клипе Ольги Бузовой «Если ты не мужчина, а wifi»",
    "Танцор ТАНЦЫ НА ТНТ Презентация трека Ольги Бузовой «Если ты не мужчина, а wifi»",
    "Хореограф Артема Пивоварова на шоу BIG RUSSIAN BOSS новогодний выпуск «Под шубой»",
    "Хореограф сольного концерта АРЦВИК Градский Холл 28.10.2017г.",
    "Танцор основного балета на TOP DISCO POP2 г. Москва. Работала с Ольгой Бузовой, Тимуром Родригесом, Владом Соколовским, Еленой Вебер, группой ФАБРИКА",
    "Судья крупнейшего в СНГ фестиваля фантастики, кино и науки СТАРКОН 2017г.",
    "Модель и танцор на показе бренда OPIUM (Ленинград Центр) 2017г. Открывала и закрывала показ",
    "Гость в передаче КЛИККЛАК выпуск про Vogue",
    "Судья Vogue Ball при фестивале NOGI v RUKI Ярославль 2016г.",
    "Судья Grodno Vogue Ball 2016. Back In USSR",
    "Танцор в клипе Ивана Дорна «Ты всегда в плюсе» 2016",
    "Гость в передаче «Пани пробуют» ходить на каблуках. Преподаватель модельной походки",
    "Судья всероссийского танцевального конкурса «Русские звезды» 2016 г. Санкт-Петербург",
    "Модель дизайнера Анастасии Капранчик. Каталог весна-лето 2016",
    "Модель и танцор на Недели Моды в Санкт-Петербурге, дизайнера Arny Praht 2015. Открывала и закрывала показ",
    "Модель на Открытом Международном Чемпионате «Невские Берега» 2015",
    "Преподаватель модельной походки и фотопозирования в модельной школе «GMS Models» с 2014г.",
    "Создатель и организатор летнего танцевального лагеря «VOGUE ACADEMY RUSSIA» 2014, 2015",
    "Организатор танцевального фестиваля по абстракту и эксперименталу «Мнимая Единица» 2014 г. (г. Санкт-Петербург)",
    "Участник шоу MOVING POETRY PRO 2014",
    "Танцор клипа Matisse & Sadko «Azonto»",
    "Танцор основного шоу «Pirate Station» 2014г.",
    "Судья отбора «Teamka Magadan» 2012г.",
    "Сопродюсер танцевального центра «ONLINE» г. Магадан 2011г.",
    "Хореограф и создатель танцевального коллектива «ТОЧКИ», многократные победители областных и городских конкурсов 2007-2011г. Магадан"
  ];

  const danceAchieve = [
    "Победитель Runway на «Moulin Rouge Vogue Ball» 2019",
    "Финалист Old way на «Moulin Rouge Vogue Ball» 2019",
    "Победитель категории «Я против музыки» Vogue Ball «Питер в огне» 2017",
    "Победитель категории Production «Christmas Vogue Ball» 2016",
    "Полуфиналист категории Femm Vogue на «Christmas Vogue Ball» 2016",
    "Полуфиналист категории Runway «The East Is Red Vogue Ball» 2015",
    "Финалист категории Old Way «North Venice Vogue Ball» 2014г.",
    "Полуфиналист категории Hands Perfomance «North Venice Vogue Ball» 2014",
    "Финалист категории Runway «North Venice Vogue Ball» 2013",
    "Гранд приз Perfomance Face vs Prop «Divine Vogue Ball» 2013",
    "Победитель Perfomance with a Prop – «Divine Vogue Ball» 2013",
    "Полуфиналист в категории Femme Vogue – «Christmas Vogue Ball» 2013",
    "Полуфиналист в категории HipHop «UDS Fest» Магадан 2012",
    "Победитель в категории HipHop «Unidance Battle» Магадан 2011"
];

  return (
    <>
      <Head>
        <title>проффесиональный коуч. Анна Царева</title>
        <meta name="description" content="Квалифицированный проффесиональный коуч, владею классическим коучингом, коучингом ICF и трансперсональным коучингом" />
        <meta name="keywords" content="Анна Царева, коуч, коучинг" />
        <meta name="author" content="Анна Царева" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.example.com/your-page" />
      </Head>
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="h-screen py-4 mb-14">
        <div className="flex flex-col h-full md:flex-row md:items-center justify-between rounded-3xl mb-6 relative">
          <div className="mb-2 md:mb-0 relative md:w-1/2 w-full h-full md:order-2 overflow-hidden">
            <Image
              src={hero}
              alt="Vertical Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>
          <div className="w-full flex flex-col justify-center md:w-1/2 space-y-4 md:mb-0 md:order-1 md:static absolute h-full  p-4">
            <div className="text-4xl md:text-6xl font-bold space-y-2">
              <p>Анна</p>
              <p>Царева</p>
            </div>
            <p className="text-lg">Сертифицированный коуч ICF</p>
            <Link href={waSession} className="text-center inline-block bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition">
              Записаться на сессию
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Card header="Обо мне">
          <SimpleCell
            before={<IoEarth size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
            header={<Header>Сертификат ICF</Header>}
          >
            <div>
              <p className="mb-4">Сертифицированный коуч ICF (Международная федерация коучей)</p>
              <ThumbnailImage img={certify}/>
            </div>
          </SimpleCell>
          <SimpleCell
            before={<TbFileCertificate size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
            header={<Header>Дипломированный коуч РФ</Header>}
          >
            Квалифицированный проффесиональный коуч
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
      </div>
        
        <div className="flex  md:gap-10 items-center flex-wrap">
          <div className="relative w-screen md:w-1/2 md:mx-0 h-96 -mx-4  mb-8 md:order-2">
            <Image
              src={hero2}
              alt="Vertical Photo 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="mb-8 md:w-1/2">
            <p className="mb-6">
              На протяжении 18 лет тренировала танцоров, выращивала из них лидеров, педагогов, чьи работы как сольных артистов, так и постановщиков вы видите на экранах федеральных каналов, кино, а так же на различных шоу самых разных форматов. 
            </p>
            <Link href="#achievements" className="flex items-center mb-6">
              <RiLink size={24} style={{ color: 'rgb(6, 182, 212)' }} className="mr-2 w-16"/>
              <span className=" text-cyan-500">
              Мои личные достижения, победы и подробную мою работу вы можете прочесть тут.
              </span>
            </Link>
            
            <p className="mb-6">
              Я знаю все о вопросах реализации потенциала, достижениях своих целей и улучшении качества своей жизни и через коучинг помогаю другим людям в работе над собой.
            </p>
          </div>
        </div>
        <Card header="С чем я работаю">
          {withWhom.map(({header, description}) => 
            <SimpleCell
              key={header}
              before={<MdDone size={24} style={{ color: 'rgb(156, 163, 175)' }} />}
              header={<Header>{header}</Header>}
            >
              {description}
            </SimpleCell>
          )}
          <Link href={waSession} className="inline-block bg-transparent border border-gray-400  text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition">
            Записаться на сессию
          </Link>
        </Card>
          
          <Card header="Бесплатная установочная сессия">
            <div>
              <p className="pb-2">
                Для новых клиентов я провожу бесплатную установочную сессию, на которой мы с Вами знакомимся, я рассказываю о принципах коучинга, о формате работы, отвечаю на все Ваши вопросы и помогаю Вам определить ваш запрос. И только после знакомства и установочной сессии мы записываемся на рабочую сессию.
              </p>
              <p className="pb-2">
                Длительность установочной сессии 30 минут.
              </p>
            </div>
            <Link href={waOptionSession} className="inline-block text-center bg-transparent border border-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition">
              Записаться на установочную сессию
            </Link>
          </Card>
          
          <div>
            <h1 className="text-4xl mb-3">Цены</h1>
            <Card>
              <SimpleCell
                before={<Header>Разовая сессия</Header>}
              >
                <Header className="text-2xl">5000 ₽</Header>
              </SimpleCell>
              <Header className="mb-4">Действует акция на покупку пакетов сессий</Header>
              <div className="flex flex-col md:flex-row md:gap-10 flex-wrap">
                {priceLight.map(({header, price, oldPrice}, idx) => 
                <SimpleCell
                  key={header}
                  before={<span>{idx + 1}.</span>}
                  header={<Header>{header}</Header>}
                >
                  <div className="flex gap-4">
                    <div>
                      <Header className="text-2xl">{price}</Header>
                    </div>
                    <div className="relative inline-block">
                      <span className="text-lg font-semibold">
                        {oldPrice}
                      </span>
                      <span className="absolute inset-0 transform rotate-12 bg-gray-500 h-0.5 top-3"></span>
                    </div>
                  </div>
                  
                </SimpleCell> 
                )}
              </div>
              
              <p className="mb-2">‌Цены на пакеты действуют единоразовым платежом.</p>
              <p>‌Длительность сессии — 60 минут</p>
            </Card>
          </div>
        <Accordion>
          {accordionItems.map(({title, content}) =>
            <AccordionItem key={title} title={title}>
              <p>{content}</p>
            </AccordionItem>
          )}
        </Accordion>
        <div className="flex flex-wrap justify-around">
          <Card>
            <div className="flex items-center gap-5">
              <Header>Остались вопросы?</Header>
              <Link href={waQuestion} className="inline-block bg-transparent border border-gray-400  text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition">
                Спросить
              </Link>
            </div>
          </Card>
          <Card>
            <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start gap-5">
              <div className="h-full flex items-center justify-center w-full md:w-1/3">
                <div className="w-full max-w-52 max-h-full aspect-square rounded-full overflow-hidden">
                  <Image
                    src={avatar}
                    alt="Avatar"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full gap-5 ">
                <div className="">
                  <Header>Мой блог в Telegram</Header>
                  <div>
                    <p>В нем я делюсь тем, что не публикуется в других медиа</p>
                    <p>Много интересного про коучинг, психологию и отношения</p>
                  </div>
                </div>
                <div className="flex gap-5 justify-center md:justify-between flex-wrap md:flex-nowrap  ">
                  <div className="flex gap-4 justify-between self-center">
                    <SocialButton 
                      url="https://t.me/AnnaTsareva1" 
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
                  <Link href="https://t.me/annatsareva" className="inline-block w-full md:w-30 text-center bg-transparent border border-gray-400  text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition">
                    + Подписаться
                  </Link>
                  
                </div>
                
              </div>
              <div className="hidden lg:block lg:w-1/3">
                <Link href="https://t.me/annatsareva" passHref>
                  <Image
                    className="w-full max-w-52"
                    src={qrCode}
                    alt="QR Code"
                    objectFit="contain"
                  />
                </Link>
              </div>
            </div>
          </Card>
          <section id="achievements" className="py-12">
              <h2 className="text-3xl font-bold text-center mb-8">Мои заслуги, работа и медийность</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-slate-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
          </section>
          <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Участие в танцевальных соревнованиях</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {danceAchieve.map((achievement, index) => (
                <div key={index} className="bg-slate-800 p-4 shadow-md rounded-lg transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
    </main>
    </>
  );
}
