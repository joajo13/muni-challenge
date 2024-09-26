import { Breadcrumb } from "@/components/breadcrumb";
import { PageContainer } from "@/components/containers/page-container";
import { PageHeader } from "@/components/page-header";
import { Table } from "@/components/table/table";

const columns = [
  {key: 'name', header: 'Nombre', Component: ({ data }) => <td className="text-center">{data.name}</td>},
  {key: 'description', header: 'Descripción', Component: ({ data }) => <td>{data.description}</td>},
  {key: 'status', header: 'Estado', Component: ({ data }) => <td>{data.status}</td>},
  {key: 'date', header: 'Fecha', Component: ({ data }) => <td>{data.date}</td>},
];

const data = [
  {name: 'Tramite 1', description: 'Descripcion 1', status: 'Pendiente', date: '01/01/2021'},
  {name: 'Tramite 2', description: 'Descripcion 2', status: 'Pendiente', date: '01/01/2021'},
  {name: 'Tramite 3', description: 'Descripcion 3', status: 'Pendiente', date: '01/01/2021'},
  {name: 'Tramite 4', description: 'Descripcion 4', status: 'Pendiente', date: '01/01/2021'},
];

const breadcrumbItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
];

export const Dashboard = () => {
  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader title="Dashboard" />

      <h2 className="text-xl text-gray-500 font-bold py-4">Tramites</h2>

      <Table columns={columns} data={data}/>
    </PageContainer>
  );
};