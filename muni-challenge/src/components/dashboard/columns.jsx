import { ActionCell } from "@/components/dashboard/action-cell";
import { StatusCell } from "@/components/dashboard/status-cell";

const TableCell = ({ children }) => (
  <td className="py-2 px-4 border-t whitespace-nowrap overflow-hidden text-ellipsis">
    {children}
  </td>
);

const DateCell = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString();
  return <TableCell>{formattedDate}</TableCell>;
};

export const columns = [
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
    Component: ({ data }) => (
      <StatusCell idTramite={data.id} status={data.status} />
    ),
  },
  {
    key: "comprobanteImagePath",
    header: "Comprobante",
    Component: ({ data }) => <TableCell>{data.comprobanteImagePath}</TableCell>,
  },
  {
    key: "createdAt",
    header: "Fecha de creación",
    Component: ({ data }) => <DateCell date={data.createdAt} />,
  },
  {
    key: "comment",
    header: "Comentario",
    Component: ({ data }) => <TableCell>{data.comment}</TableCell>,
  },
  {
    key: "id",
    header: "Acciones",
    Component: ({ data }) => <ActionCell data={data} status={data.status} />,
  },
];
