import { Card } from "@/components/ui/card";

const UranusInfo = () => {
  const uranusData = [
    {
      title: "Composición",
      value: "Hielo de agua, metano y amoníaco",
      icon: "🧊",
      description: "Un gigante de hielo con núcleo rocoso"
    },
    {
      title: "Distancia al Sol",
      value: "2,870 millones de km",
      icon: "☀️",
      description: "19.2 veces más lejos que la Tierra"
    },
    {
      title: "Diámetro",
      value: "50,724 km",
      icon: "📏",
      description: "4 veces mayor que la Tierra"
    },
    {
      title: "Temperatura",
      value: "-224°C",
      icon: "🌡️",
      description: "Uno de los planetas más fríos"
    },
    {
      title: "Inclinación",
      value: "98 grados",
      icon: "🔄",
      description: "Rueda de lado como una pelota"
    },
    {
      title: "Color característico",
      value: "Azul verdoso",
      icon: "🔵",
      description: "Debido al metano en su atmósfera"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-uranus bg-clip-text text-transparent">
            Conoce a Urano
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El séptimo planeta desde el Sol es único en muchos aspectos. Su rotación lateral,
            su composición helada y sus anillos verticales lo convierten en uno de los mundos
            más fascinantes de nuestro sistema solar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uranusData.map((item, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-cosmic transition-all duration-300 transform hover:-translate-y-2 border-border/50 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {item.title}
              </h3>
              <p className="text-2xl font-bold mb-3 text-foreground">
                {item.value}
              </p>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UranusInfo;