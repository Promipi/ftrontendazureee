import SectionTitle from "../Common/SectionTitle";
import { Card } from "./Card";
import { FaMountainSun, FaBinoculars } from 'react-icons/fa6'

const AboutUs = () => {
  return (
    <>
      <section id="nosotros" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nosotros"
            paragraph="En EcoFauna, nos apasiona la preservación de la vida silvestre y el cuidado de nuestro planeta. Nos hemos comprometido a ofrecer experiencias únicas y significativas que contribuyan a la concientización y conservación de la biodiversidad."
            center
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
              title="Nuestra Misión"
              description="Crear experiencias significativas para los turistas mientras protegemos el medio ambiente y apoyamos a las comunidades locales."
              icon={FaMountainSun}
            />
            <Card
              title="Visión"
              description="Convertirnos en un referente global en ecoturismo, donde la armonía entre la exploración del mundo y la conservación ambiental sea un modelo a seguir. Queremos inspirar a otros países a adoptar prácticas sostenibles."
              icon={FaBinoculars}
            />
          </div>
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
