import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function PricesSection() {
  const packages = [
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
  ];

  const guarantees = [
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
  ];

  return (
    <section id="prices" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Цены и гарантии</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Честные цены без скрытых доплат. Гарантия на все виды работ 10 лет
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((package_, index) => (
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
            {guarantees.map((guarantee, index) => (
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
  );
}