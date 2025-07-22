import { Card } from "@/components/ui/card";
import spaceGallery from "@/assets/space-gallery.jpg";
import uranusHero from "@/assets/uranus-hero.jpg";

const GallerySection = () => {
  const galleryImages = [
    {
      src: uranusHero,
      title: "Urano y sus Anillos",
      description: "Vista detallada del planeta con su sistema de anillos verticales"
    },
    {
      src: spaceGallery,
      title: "El Sistema Solar Exterior",
      description: "Urano en el contexto del sistema solar exterior"
    },
    {
      src: uranusHero,
      title: "Composición Atmosférica",
      description: "Los colores azul-verdosos revelan la composición de metano"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-cosmic bg-clip-text text-transparent">
            Galería Espacial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explora imágenes fascinantes de Urano y su entorno cósmico,
            capturadas por telescopios espaciales y misiones de exploración.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={index}
              className="overflow-hidden group hover:shadow-cosmic transition-all duration-500 transform hover:scale-105 bg-card/80 backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/80">
                    {image.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-cosmic/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              ¿Sabías que...?
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Las primeras imágenes detalladas de Urano fueron capturadas por la sonda Voyager 2 
              en 1986, la única nave espacial que ha visitado este distante gigante de hielo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;