import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function ReviewsSection() {
  const reviews = [
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
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 довольных клиентов доверили нам свои балконы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
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
  );
}