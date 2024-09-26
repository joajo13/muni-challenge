import { Breadcrumb } from "@/components/breadcrumb";
import { PageContainer } from "@/components/containers/page-container";
import { PageHeader } from "@/components/page-header";
import { BecaForm } from "@/components/tramites/deportes/beca-deportiva/beca-form";

const breadcrumbItems = [
  { name: "Trámites", path: "tramites" },
  { name: "Deportes", path: "tramites" },
  { name: "Beca deportiva", path: "tramites/deportes/beca" },
];

export const BecaDeportiva = () => {
  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader title="Beca deportiva" description="Completa el formulario para solicitar una beca deportiva." />

      <BecaForm />
    </PageContainer>
  );
};
