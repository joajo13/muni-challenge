import {
  HiOutlineHome,
  HiMiniMagnifyingGlass,
  HiOutlineMap,
  HiOutlineDocumentText,
  HiOutlineCurrencyDollar,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineBuildingOffice,
  HiOutlineCurrencyBangladeshi,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import { Breadcrumb } from "@/components/breadcrumb";
import { PageContainer } from "@/components/containers/page-container";
import { PageHeader } from "@/components/page-header";
import { TramitesGrid } from "@/components/tramites/tramites-grid";

const tramites = [
  {
    name: "Deportes",
    description: "Solicita becas y permisos deportivos en línea.",
    icon: HiMiniMagnifyingGlass,
    status: "active",
    links: [
      {
        name: "Becas deportivas",
        url: "/tramites/deportes/beca",
        description:
          "Deberán realizar este trámite las persona u organizaciones interesadas en realizar un evento deportivo en el espacio público.",
        status: "active",
      },
      {
        name: "Permisos deportivos",
        url: "/permisos-deportivos",
        description:
          "Deberán realizar este trámite las persona u organizaciones interesadas en realizar un evento deportivo en el espacio público.",
        status: "disabled",
      },
    ],
  },
  {
    name: "Catastro",
    description: "Solicita tu inspección de catastro en línea.",
    icon: HiOutlineMap,
    status: "disabled",
  },
  {
    name: "Comercio",
    description: "Solicita tu inspección de comercio en línea.",
    icon: HiOutlineHome,
    status: "disabled",
  },
  {
    name: "Educación",
    description: "Solicita tu inspección educativa en línea.",
    icon: HiOutlineClipboardDocumentCheck,
    status: "disabled",
  },
  {
    name: "Firma digital",
    description: "Solicita tu firma digital en línea.",
    icon: HiOutlineDocumentText,
    status: "disabled",
  },
  {
    name: "Hacienda",
    description: "Solicita tu inspección de hacienda en línea.",
    icon: HiOutlineCurrencyDollar,
    status: "disabled",
  },
  {
    name: "Obras particulares",
    description: "Solicita tu inspección de obras particulares en línea.",
    icon: HiOutlineBuildingOffice,
    status: "disabled",
  },
  {
    name: "Rentas",
    description: "Solicita tu inspección de rentas en línea.",
    icon: HiOutlineCurrencyBangladeshi,
    status: "disabled",
  },
  {
    name: "Salud",
    description: "Solicita tu inspección de salud en línea.",
    icon: HiOutlineHeart,
    status: "disabled",
  },
  {
    name: "Seguridad",
    description: "Solicita tu inspección de seguridad en línea.",
    icon: HiOutlineShieldCheck,
    status: "disabled",
  },
  {
    name: "Servicios públicos",
    description: "Solicita tu inspección de servicios públicos en línea.",
    icon: HiOutlineLightBulb,
    status: "disabled",
  },
];

const breadcrumbItems = [
  { name: "Inicio", path: "" },
  { name: "Trámites", path: "tramites" },
];

export const Tramites = () => {
  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />

      <PageHeader
        title={"Trámites"}
        description={"Realiza tus trámites en línea."}
      />

      {/* Tramites */}
      <TramitesGrid tramites={tramites} />
    </PageContainer>
  );
};
