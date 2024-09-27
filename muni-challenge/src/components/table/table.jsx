export const Table = ({
  columns = [
    {
      key: "name",
      header: "Nombre",
      Component: ({ data }) => (
        <td className="py-2 px-4 border-t">{data.name}</td>
      ),
    },
  ],
  data = [],
}) => {
  return (
    <div className="w-full rounded-md border">
      <table className="table-fixed w-full">
        <thead className="border-b">
          <tr className="text-sm uppercase">
            {columns.map((column) => (
              <th className="py-2 px-4 text-start text-nowrap truncate" key={column.key}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((dataItem, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <column.Component key={column.key} data={dataItem} />
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No hay datos para mostrar
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
