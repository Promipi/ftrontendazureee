import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/#",
    newTab: false,
    type: "anchor"
  },
  {
    id: 2,
    title: "Nosotros",
    path: "/#nosotros",
    newTab: false,
    type: "anchor"
  },
  {
    id: 33,
    title: "Servicios",
    path: "/#servicios",
    newTab: false,
    type: "anchor"
  },
  {
    id: 4,
    title: "Actividades",
    newTab: false,
    path: "/actividades",
  },
  {
    id: 3,
    title: "Contacto",
    path: "/contacto",
    newTab: false,
  },
];
export default menuData;
