import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function AboutSection() {
  const stats = [
    {
      icon: "Users",
      value: "500+",
      label: "Довольных клиентов"
    },
    {
      icon: "Calendar",
      value: "10 лет",
      label: "На рынке остекления"
    },
    {
      icon: "Award",
      value: "100%",
      label: "Качество работ"
    },
    {
      icon: "Shield",
      value: "10 лет",
      label: "Гарантия"
    }
  ];

  return (
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
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={stat.icon as any} className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
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
  );
}