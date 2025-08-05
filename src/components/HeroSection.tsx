import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function HeroSection() {
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
  );
}