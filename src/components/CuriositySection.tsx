import { Card } from "@/components/ui/card";

const CuriositySection = () => {
  const curiosities = [
    {
      icon: "🌀",
      title: "Rotación Única",
      fact: "Urano es el único planeta que rueda de lado, con una inclinación de 98 grados. Esto significa que sus polos apuntan hacia el Sol durante su órbita."
    },
    {
      icon: "❄️",
      title: "Temperatura Extrema",
      fact: "Aunque no es el planeta más alejado del Sol, Urano tiene las temperaturas más frías del sistema solar, llegando a -224°C."
    },
    {
      icon: "💍",
      title: "Anillos Verticales",
      fact: "Sus anillos son verticales, no horizontales como los de Saturno. Fueron descubiertos por casualidad en 1977."
    },
    {
      icon: "🔄",
      title: "Día Extremo",
      fact: "Un día en Urano dura 17 horas terrestres, pero debido a su inclinación, algunas regiones tienen 42 años de luz solar continua."
    },
    {
      icon: "💎",
      title: "Lluvia de Diamantes",
      fact: "Los científicos creen que en las profundidades de Urano llueven diamantes debido a la presión extrema sobre el carbono."
    },
    {
      icon: "🌊",
      title: "Campo Magnético Caótico",
      fact: "Su campo magnético está inclinado 59 grados respecto a su eje de rotación, creando un patrón magnético único en el sistema solar."
    },
    {
      icon: "🎭",
      title: "Lunas con Nombres Literarios",
      fact: "Sus lunas llevan nombres de personajes de Shakespeare y Alexander Pope, siendo el único planeta con esta tradición literaria."
    },
    {
      icon: "🚀",
      title: "Visitante Solitario",
      fact: "Solo una nave espacial ha visitado Urano: la Voyager 2 en 1986, proporcionando la mayoría de nuestro conocimiento sobre este mundo lejano."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-space">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-uranus bg-clip-text text-transparent">
            Datos Fascinantes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre los datos más sorprendentes sobre Urano, el planeta que desafía 
            todas las reglas convencionales del sistema solar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {curiosities.map((curiosity, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-2 bg-card/90 backdrop-blur-sm group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {curiosity.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-primary">
                {curiosity.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {curiosity.fact}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block p-6 rounded-xl bg-primary/10 border border-primary/30">
            <h3 className="text-xl font-bold mb-2 text-primary">
              🔬 Investigación Continua
            </h3>
            <p className="text-foreground/80">
              Los científicos siguen estudiando Urano con telescopios avanzados para 
              desentrañar más misterios de este fascinante gigante de hielo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuriositySection;