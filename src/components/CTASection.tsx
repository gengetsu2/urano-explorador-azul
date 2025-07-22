import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-cosmic opacity-20 blur-3xl rounded-full scale-150" />
          
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-cosmic">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-uranus bg-clip-text text-transparent">
              ¡Continúa tu Viaje Espacial!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Has explorado los misterios de Urano y sus lunas. Ahora es momento de 
              descubrir más maravillas del universo y expandir tu conocimiento astronómico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="shadow-glow-uranus hover:shadow-glow-purple transition-all duration-300 text-lg px-8 py-4"
              >
                🚀 Explora más el Sistema Solar
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-lg px-8 py-4"
              >
                🔭 Más sobre Astronomía
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                "El universo no solo es más extraño de lo que imaginamos, 
                es más extraño de lo que podemos imaginar." - J.B.S. Haldane
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;