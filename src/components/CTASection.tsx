import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function CTASection() {
  return (
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
  );
}