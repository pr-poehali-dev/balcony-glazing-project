import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
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
  );
}