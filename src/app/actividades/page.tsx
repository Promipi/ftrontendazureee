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
                pageName="Actividades"
                description="Listado de Actividades Disponibles"
            />
            <Events />
            <Comunidades />
        </>
    )
}