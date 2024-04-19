import Breadcrumb from "@/components/Common/Breadcrumb";
import Events from "@/components/Actividades/Actividades";
import { Metadata } from "next";
import { Comunidades } from "@/components/Actividades/Comunidades";

export const metadata: Metadata = {
    title: "Actividades | EcoFauna",
    description: "Listado de Actividades ofrecidas por EcoFauna",
    // other metadata
};

export default function Actividades() {
    return (
        <>
            <Breadcrumb
                pageName="Servicios"
                description="Estos son nuestros aliados para ofrecerte el mejor confort en esta experiencia!"
            />
            <Events />
            <Comunidades />
        </>
    )
}
