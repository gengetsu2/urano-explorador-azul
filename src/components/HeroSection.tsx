import { Button } from "@/components/ui/button";
import uranusHero from "@/assets/uranus-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={uranusHero}
          alt="Planeta Urano"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-uranus bg-clip-text text-transparent animate-pulse">
          URANO
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground/90 font-light">
          El Gigante de Hielo que Rueda por el Espacio
        </p>
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Descubre los misterios del séptimo planeta del sistema solar, con su peculiar inclinación
          y sus fascinantes lunas heladas.
        </p>
        <Button 
          size="lg" 
          className="shadow-glow-uranus hover:shadow-glow-purple transition-all duration-300 text-lg px-8 py-4"
        >
          Comenzar Exploración
        </Button>
      </div>
      
      {/* Floating Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;