import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function PortfolioSection() {
  const projects = [
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
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Наши работы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 успешно реализованных проектов в Москве и области
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
  );
}