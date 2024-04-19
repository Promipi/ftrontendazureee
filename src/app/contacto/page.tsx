import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Contacto | EcoFauna",
  description: "Esta es la página de Contacto de EcoFauna",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="Si tienes alguna pregunta, comentario o simplemente quieres saludar, no dudes en contactarnos."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
