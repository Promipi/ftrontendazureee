import { Card } from "./Card";
import SectionTitle from "../Common/SectionTitle";
import { FaCar, FaPersonHiking, FaBuildingColumns } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <section id="servicios" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Actividades"
            paragraph="Conciencia y protección de la vida silvestre son esenciales para nuestra empresa. Por eso ofrecemos oportunidades emocionantes para explorar la naturaleza y la cultura local de manera sostenible y asequible."
            width="100%"
          />

          <div
            className="
              w-full
              max-w-[1240px]
              grid
              grid-cols-[repeat(auto-fit,minmax(360px,1fr))]
              gap-8
              mx-auto"
          >
            <Card
              title="Safari"
              description="Un paseo en auto explorando los diverosos parques nacionales, reservas naturales y áreas protegidas con nuestros guías expertos. Descubre la flora, fauna y la historia detrás de cada lugar."
              icon={FaCar}
            />
            <Card
              title="Senderismo"
              description="Senderos con marcadores de realidad aumentada, podes escanear códigos QR en la naturaleza para obtener información sobre la flora, fauna y la historia del lugar mietras te sumergis en la magia de la naturaleza."
              icon={FaPersonHiking}
            />
            <Card
              title="Paseo Cultural"
              description="Un paseo gastronómico en Paraguay es una experiencia deliciosa que te sumerge en la rica y variada cocina del país. Explora los mercados de artesanías para descubrir productos únicos hechos a mano por talentosos artistas locales."
              icon={FaBuildingColumns}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
