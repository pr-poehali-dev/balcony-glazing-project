import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [calculatorData, setCalculatorData] = useState({
    type: "",
    area: "",
    material: ""
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!calculatorData.type || !calculatorData.area || !calculatorData.material) return;
    
    const basePrice = parseFloat(calculatorData.area) * 15000;
    const materialMultiplier = calculatorData.material === "premium" ? 1.5 : calculatorData.material === "standard" ? 1.2 : 1;
    const typeMultiplier = calculatorData.type === "warm" ? 1.3 : 1;
    
    setCalculatedPrice(Math.round(basePrice * materialMultiplier * typeMultiplier));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building" className="text-primary" size={32} />
              <span className="text-2xl font-display font-bold text-gray-900">СтеклоПрофи</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#prices" className="text-gray-700 hover:text-primary transition-colors">Цены</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                ✨ Гарантия 10 лет на все работы
              </Badge>
              <h1 className="text-5xl font-display font-bold mb-6 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
                Остекление балконов и лоджий под ключ
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Превратим ваш балкон в уютное пространство с гарантией качества на 10 лет. 
                Профессиональный монтаж, премиум материалы, фиксированные цены.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-green-600" />
                  <span>Гарантия 10 лет</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} className="text-blue-600" />
                  <span>Монтаж за 1 день</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={16} className="text-yellow-600" />
                  <span>500+ проектов</span>
                </div>
              </div>
            </div>

            {/* Calculator */}
            <Card className="animate-scale-in shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
                <CardTitle className="text-2xl font-display flex items-center gap-2">
                  <Icon name="Calculator" size={24} />
                  Калькулятор стоимости
                </CardTitle>
                <CardDescription className="text-white/90">
                  Узнайте точную стоимость остекления за 30 секунд
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <Label htmlFor="type" className="text-base font-medium">Тип остекления</Label>
                  <Select value={calculatorData.type} onValueChange={(value) => setCalculatorData({...calculatorData, type: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите тип остекления" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cold">Холодное остекление</SelectItem>
                      <SelectItem value="warm">Теплое остекление</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="area" className="text-base font-medium">Площадь (м²)</Label>
                  <Input 
                    id="area"
                    type="number" 
                    placeholder="Введите площадь"
                    className="mt-2"
                    value={calculatorData.area}
                    onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                  />
                </div>

                <div>
                  <Label htmlFor="material" className="text-base font-medium">Материал профиля</Label>
                  <Select value={calculatorData.material} onValueChange={(value) => setCalculatorData({...calculatorData, material: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Выберите материал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aluminum">Алюминий</SelectItem>
                      <SelectItem value="standard">ПВХ стандарт</SelectItem>
                      <SelectItem value="premium">ПВХ премиум</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculatePrice}
                  className="w-full bg-accent hover:bg-accent/90 text-lg py-6"
                  disabled={!calculatorData.type || !calculatorData.area || !calculatorData.material}
                >
                  <Icon name="Zap" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>

                {calculatedPrice && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 animate-fade-in">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Предварительная стоимость:</p>
                      <p className="text-3xl font-display font-bold text-green-600">
                        {calculatedPrice.toLocaleString()} ₽
                      </p>
                      <p className="text-xs text-gray-500 mt-2">*Окончательная стоимость после замера</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по остеклению с гарантией качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Snowflake",
                title: "Холодное остекление",
                description: "Защита от ветра, дождя и пыли. Алюминиевые рамы с раздвижными створками.",
                price: "от 15 000 ₽/м²",
                features: ["Алюминиевый профиль", "Раздвижные створки", "Защита от осадков"]
              },
              {
                icon: "Flame",
                title: "Теплое остекление",
                description: "Полноценное утепление балкона. ПВХ окна с двойными стеклопакетами.",
                price: "от 20 000 ₽/м²",
                features: ["ПВХ профиль", "Двойные стеклопакеты", "Энергосбережение"]
              },
              {
                icon: "Wrench",
                title: "Монтаж под ключ",
                description: "Полный цикл работ: демонтаж, остекление, отделка, уборка.",
                price: "в составе работ",
                features: ["Демонтаж старых рам", "Профессиональный монтаж", "Финишная отделка"]
              },
              {
                icon: "Palette",
                title: "Внутренняя отделка",
                description: "Утепление, обшивка стен, потолка, установка подоконников.",
                price: "от 8 000 ₽/м²",
                features: ["Утепление минватой", "Пластиковые панели", "Установка подоконников"]
              },
              {
                icon: "Sun",
                title: "Французские балконы",
                description: "Панорамное остекление в пол для максимального освещения.",
                price: "от 25 000 ₽/м²",
                features: ["Остекление в пол", "Максимум света", "Современный дизайн"]
              },
              {
                icon: "Shield",
                title: "Гарантийное обслуживание",
                description: "Бесплатное обслуживание и ремонт в течение 10 лет.",
                price: "бесплатно",
                features: ["Гарантия 10 лет", "Бесплатный ремонт", "Регулировка фурнитуры"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <Badge variant="secondary" className="text-accent font-semibold">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 500 успешно реализованных проектов в Москве и области
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/img/32f367b1-7871-4677-bb48-8e266e3c7928.jpg",
                title: "Панорамное остекление",
                description: "Балкон 6м², теплое остекление ПВХ",
                location: "ЖК Современник, Москва",
                type: "Теплое остекление"
              },
              {
                image: "/img/3ec20e07-a062-4f35-b217-53cd37ffa4a8.jpg",
                title: "Французский балкон",
                description: "Остекление в пол с панорамным видом",
                location: "ЖК Сколково Парк",
                type: "Французское остекление"
              },
              {
                image: "/img/31cda3a1-db01-4159-ba69-cdddd6242f8f.jpg",
                title: "Процесс монтажа",
                description: "Профессиональная установка окон",
                location: "Процесс работы",
                type: "Монтаж"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {project.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Icon name="MapPin" size={16} />
                    <span>{project.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Более 500 довольных клиентов доверили нам свои балконы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                location: "ЖК Садовые Кварталы",
                rating: 5,
                text: "Отличная работа! Сделали остекление балкона быстро и качественно. Особенно порадовала длительная гарантия - 10 лет это серьезно.",
                date: "2 месяца назад"
              },
              {
                name: "Михаил Сергеев",
                location: "Новые Черемушки",
                rating: 5,
                text: "Профессиональная команда, точно в срок, аккуратно. Балкон теперь как отдельная комната. Цена соответствует качеству.",
                date: "1 месяц назад"
              },
              {
                name: "Елена Воронова",
                location: "ЖК Московский",
                rating: 5,
                text: "Французское остекление получилось великолепно! Квартира наполнилась светом. Рекомендую всем соседям.",
                date: "3 недели назад"
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <span className="text-xs text-gray-400">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Цены и гарантии</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Честные цены без скрытых доплат. Гарантия на все виды работ 10 лет
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Холодное остекление",
                price: "от 15 000 ₽/м²",
                features: [
                  "Алюминиевый профиль",
                  "Одинарное стекло 4мм",
                  "Раздвижная система",
                  "Москитная сетка",
                  "Монтаж и доставка"
                ],
                popular: false
              },
              {
                title: "Теплое остекление",
                price: "от 20 000 ₽/м²",
                features: [
                  "ПВХ профиль 58мм",
                  "Стеклопакет 24мм",
                  "Поворотно-откидная фурнитура",
                  "Энергосберегающее стекло",
                  "Монтаж и доставка"
                ],
                popular: true
              },
              {
                title: "Французское остекление",
                price: "от 25 000 ₽/м²",
                features: [
                  "Остекление в пол",
                  "Усиленный профиль",
                  "Триплекс безопасное стекло",
                  "Панорамный вид",
                  "Монтаж и доставка"
                ],
                popular: false
              }
            ].map((package_, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  package_.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {package_.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-display">{package_.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{package_.price}</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {package_.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-green-600 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${package_.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    Заказать расчет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guarantees */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-center mb-8">Наши гарантии</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Shield",
                  title: "10 лет гарантии",
                  description: "На все виды работ и материалы"
                },
                {
                  icon: "Clock",
                  title: "Точно в срок",
                  description: "Монтаж строго по договору"
                },
                {
                  icon: "Award",
                  title: "Качество работ",
                  description: "Сертифицированные мастера"
                },
                {
                  icon: "Headphones",
                  title: "Поддержка 24/7",
                  description: "Консультации в любое время"
                }
              ].map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={guarantee.icon as any} className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold mb-2">{guarantee.title}</h4>
                  <p className="text-sm text-gray-600">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">О компании СтеклоПрофи</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы работаем в сфере остекления балконов и лоджий уже более 10 лет. 
                За это время выполнили более 500 проектов в Москве и области.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-600">Довольных клиентов</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Calendar" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10 лет</div>
                    <div className="text-sm text-gray-600">На рынке остекления</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-gray-600">Качество работ</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Shield" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10 лет</div>
                    <div className="text-sm text-gray-600">Гарантия</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Скачать каталог
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/31cda3a1-db01-4159-ba69-cdddd6242f8f.jpg" 
                alt="Наша команда за работой"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-sm text-gray-600">Звоните прямо сейчас</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Готовы преобразить ваш балкон?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Получите бесплатный замер и расчет стоимости. Гарантия 10 лет на все работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button size="lg" variant="secondary" className="flex-1">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="flex-1 text-white border-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            Звонок и консультация бесплатно • Выезд замерщика в удобное время
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building" className="text-primary" size={24} />
                <span className="text-xl font-display font-bold">СтеклоПрофи</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональное остекление балконов и лоджий с гарантией 10 лет.
              </p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="text-white border-gray-600">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="text-white border-gray-600">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="text-white border-gray-600">
                  <Icon name="Phone" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Холодное остекление</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Теплое остекление</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Французские балконы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Внутренняя отделка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантии</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@stekloprofi.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  <span>Пн-Вс: 9:00-21:00</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2024 СтеклоПрофи. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}