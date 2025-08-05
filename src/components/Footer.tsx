import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
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
  );
}