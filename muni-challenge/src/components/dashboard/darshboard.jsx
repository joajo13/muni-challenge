import { Breadcrumb } from "@/components/breadcrumb";
import { PageContainer } from "@/components/containers/page-container";
import { ActionCell } from "@/components/dashboard/action-cell";
import { PageHeader } from "@/components/page-header";
import { Table } from "@/components/table/table";
import { getAll } from "@/services/tramites/getAll";
import { useSessionStore } from "@/stores/sessionStore";
import { useEffect, useState } from "react";

const TableCell = ({ children }) => (
  <td className="py-2 px-4 border-t whitespace-nowrap overflow-hidden text-ellipsis">
    {children}
  </td>
);

const DateCell = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  return <TableCell>{formattedDate}</TableCell>;
};

const columns = [
  {
    key: "dni",
    header: "DNI",
    Component: ({ data }) => <TableCell>{data.dni}</TableCell>,
  },
  {
    key: "deporte",
    header: "Deporte",
    Component: ({ data }) => <TableCell>{data.deporte}</TableCell>,
  },
  {
    key: "status",
    header: "Estado",
    Component: ({ data }) => <TableCell>{data.status}</TableCell>,
  },
  {
    key: "comprobanteImagePath",
    header: "Comprobante",
    Component: ({ data }) => <TableCell>{data.comprobanteImagePath}</TableCell>,
  },
  {
    key: "createdAt",
    header: "Fecha de creación",
    Component: ({ data }) => <DateCell date={data.createdAt}/>,
  },
  {
    key: "comment",
    header: "Comentario",
    Component: ({ data }) => <TableCell>{data.comment}</TableCell>,
  },
  {
    key: "id",
    header: "Acciones",
    Component: ({ data }) => (
      <ActionCell data={data} status={data.status} />
    ),
  }
];

const breadcrumbItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
];

export const Dashboard = () => {
  const { token } = useSessionStore((state) => state);
  const [tramites, setTramites] = useState([]);

  useEffect(() => {
    const fetchTramites = async () => {
      try {
        const tramites = await getAll(null, token);
        console.log(tramites);
        setTramites(tramites);
      } catch (error) {
        console.error("Error fetching tramites:", error);
      }
    };

    fetchTramites();
  }, [token]);

  return (
    <PageContainer>
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader title="Dashboard" />

      <h2 className="text-xl text-gray-500 font-bold py-4">Tramites</h2>

      <Table columns={columns} data={tramites || []} />
    </PageContainer>
  );
};
