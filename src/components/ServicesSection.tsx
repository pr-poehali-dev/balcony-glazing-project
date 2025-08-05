import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function ServicesSection() {
  const services = [
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
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг по остеклению с гарантией качества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
  );
}