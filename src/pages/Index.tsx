import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Index = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const services = [
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Регулярное обслуживание газовых котельных любой сложности',
      features: ['Диагностика оборудования', 'Настройка автоматики', 'Проверка безопасности']
    },
    {
      icon: 'Settings',
      title: 'Ремонт и модернизация',
      description: 'Качественный ремонт и модернизация котельного оборудования',
      features: ['Капитальный ремонт', 'Замена комплектующих', 'Модернизация систем']
    },
    {
      icon: 'Shield',
      title: 'Пусконаладочные работы',
      description: 'Профессиональный пуск и настройка котельного оборудования',
      features: ['Первичный пуск', 'Настройка параметров', 'Обучение персонала']
    },
    {
      icon: 'FileCheck',
      title: 'Аварийное обслуживание',
      description: 'Круглосуточная аварийная служба для экстренных случаев',
      features: ['Выезд 24/7', 'Быстрое реагирование', 'Устранение аварий']
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/9c84bf00-8162-40ee-9ff0-3debe2f2e4a3.jpg',
      title: 'Промышленная котельная',
      description: 'Монтаж и пусконаладка котельной мощностью 5 МВт'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/4faf989b-b45b-427d-91e1-4d4804a3f210.jpg',
      title: 'Модернизация системы',
      description: 'Полная модернизация котельной с установкой новой автоматики'
    },
    {
      image: 'https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/9c84bf00-8162-40ee-9ff0-3debe2f2e4a3.jpg',
      title: 'Капитальный ремонт',
      description: 'Капитальный ремонт котельного оборудования'
    }
  ];

  const certificates = [
    {
      id: '1',
      title: 'Лицензия на работу с газовым оборудованием',
      number: 'ЛЦ-001-2024',
      image: 'https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/c0dc2dec-85db-4cd9-8efc-6829fe6049cc.jpg'
    },
    {
      id: '2',
      title: 'Сертификат ISO 9001',
      number: 'ISO-9001-2024',
      image: 'https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/c0dc2dec-85db-4cd9-8efc-6829fe6049cc.jpg'
    },
    {
      id: '3',
      title: 'Допуск СРО',
      number: 'СРО-445-2024',
      image: 'https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/c0dc2dec-85db-4cd9-8efc-6829fe6049cc.jpg'
    },
    {
      id: '4',
      title: 'Сертификат пожарной безопасности',
      number: 'ПБ-778-2024',
      image: 'https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/c0dc2dec-85db-4cd9-8efc-6829fe6049cc.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Flame" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">Промгазэксплуатация</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#certificates" className="hover:text-primary transition-colors">Лицензии</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Профессиональное обслуживание с 2005 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Обслуживание и ремонт{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  газовых котельных
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Качественное обслуживание, ремонт и модернизация котельного оборудования любой сложности. 
                Работаем круглосуточно, имеем все необходимые лицензии и сертификаты.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Заказать обслуживание
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="PlayCircle" size={18} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Объектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary"></div>
                  <div className="text-sm text-muted-foreground"></div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Аварийная служба</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/9c84bf00-8162-40ee-9ff0-3debe2f2e4a3.jpg"
                alt="Газовая котельная"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Наши услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Полный спектр услуг для котельных
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем профессиональные услуги по обслуживанию, ремонту и модернизации газовых котельных
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="CheckCircle2" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Наши работы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Портфолио выполненных проектов
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Более 250 успешно реализованных проектов различной сложности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              Лицензии и сертификаты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Все необходимые разрешения и сертификаты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Имеем полный пакет лицензий и сертификатов для работы с газовым оборудованием
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50"
                onClick={() => setSelectedCertificate(cert.image)}
              >
                <CardContent className="p-6">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Icon name="ZoomIn" size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">№ {cert.number}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                О компании
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                15 лет профессионального опыта
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на обслуживании и ремонте газовых котельных с 2005 года. 
                За это время наша команда выполнила более 250 проектов различной сложности.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Команда профессионалов</h3>
                    <p className="text-muted-foreground">
                      Все специалисты имеют необходимые допуски и регулярно проходят повышение квалификации
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Гарантия качества</h3>
                    <p className="text-muted-foreground">
                      Предоставляем гарантию на все виды работ и используем только сертифицированные материалы
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Круглосуточная поддержка</h3>
                    <p className="text-muted-foreground">
                      Аварийная служба работает 24/7, оперативно реагируем на любые обращения
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/d92010e2-6c1d-4750-be0e-2a4facdce9ba/files/4faf989b-b45b-427d-91e1-4d4804a3f210.jpg"
                alt="Наша команда"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Контакты
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>
            </div>
            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (923) 126-28-26</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">konstantin@prom-gas.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">г. Новосибирск,, ул. Нижегородская улица, 205 к1 </div>
                    </div>
                  </div>
                </div>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="tel" placeholder="Телефон" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Сообщение" rows={4} />
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Flame" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ГазСервис</span>
              </div>
              <p className="text-background/70">
                Профессиональное обслуживание и ремонт газовых котельных с 2005 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-background/70">
                <li>Техническое обслуживание</li>
                <li>Ремонт и модернизация</li>
                <li>Пусконаладочные работы</li>
                <li>Аварийное обслуживание</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-background/70">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Лицензии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@gazservice.ru</li>
                <li>г. Москва, ул. Промышленная, д. 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
            © 2024 ГазСервис. Все права защищены.
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Просмотр сертификата</DialogTitle>
          </DialogHeader>
          {selectedCertificate && (
            <img src={selectedCertificate} alt="Сертификат" className="w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;