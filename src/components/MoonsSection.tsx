import { Card } from "@/components/ui/card";
import titaniaImg from "@/assets/titania-moon.jpg";
import oberonImg from "@/assets/oberon-moon.jpg";
import mirandaImg from "@/assets/miranda-moon.jpg";
import arielImg from "@/assets/ariel-moon.jpg";
import umbrielImg from "@/assets/umbriel-moon.jpg";

const MoonsSection = () => {
  const moons = [
    {
      name: "Titania",
      image: titaniaImg,
      diameter: "1,578 km",
      distance: "435,910 km",
      description: "La luna más grande de Urano, con cañones profundos y cráteres antiguos. Su superficie helada refleja la luz solar débil.",
      facts: ["La más masiva", "Superficie de hielo y roca", "Cañones de hasta 1,500 km"]
    },
    {
      name: "Oberón",
      image: oberonImg,
      diameter: "1,523 km",
      distance: "583,520 km",
      description: "La luna más externa de Urano, caracterizada por su superficie oscura y cráteres bien conservados.",
      facts: ["La más alejada", "Superficie muy antigua", "Cráteres profundos"]
    },
    {
      name: "Miranda",
      image: mirandaImg,
      diameter: "472 km",
      distance: "129,390 km",
      description: "La más pequeña de las lunas principales, famosa por sus características geológicas extremas y acantilados gigantes.",
      facts: ["La más pequeña", "Acantilados de 20 km", "Geología caótica"]
    },
    {
      name: "Ariel",
      image: arielImg,
      diameter: "1,158 km",
      distance: "191,020 km",
      description: "Una luna brillante con valles extensos y pocas cráteres, sugiriendo actividad geológica reciente.",
      facts: ["La más brillante", "Valles profundos", "Superficie joven"]
    },
    {
      name: "Umbriel",
      image: umbrielImg,
      diameter: "1,169 km",
      distance: "266,300 km",
      description: "La luna más oscura de Urano, con una superficie antigua cubierta de cráteres de impacto.",
      facts: ["La más oscura", "Superficie antigua", "Muchos cráteres"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-space">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-uranus bg-clip-text text-transparent">
            Las Lunas de Urano
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Urano tiene 27 lunas conocidas, nombradas en honor a personajes de las obras de
            William Shakespeare y Alexander Pope. Estas son las cinco lunas principales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {moons.map((moon, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-glow-purple transition-all duration-500 transform hover:scale-105 bg-card/90 backdrop-blur-sm"
            >
              <div className="relative h-48">
                <img
                  src={moon.image}
                  alt={moon.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {moon.name}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Diámetro</p>
                    <p className="font-semibold text-primary">{moon.diameter}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Distancia</p>
                    <p className="font-semibold text-primary">{moon.distance}</p>
                  </div>
                </div>
                
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {moon.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent">Datos curiosos:</p>
                  <ul className="text-xs space-y-1">
                    {moon.facts.map((fact, factIndex) => (
                      <li key={factIndex} className="text-muted-foreground flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoonsSection;