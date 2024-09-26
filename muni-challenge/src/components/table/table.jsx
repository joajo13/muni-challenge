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
      <div className="w-full rounded-md overflow-hidden border">
        <table className="table-fixed w-full">
          <thead className="border-b">
            <tr className="text-sm uppercase">
              {columns.map((column) => (
                <th className="py-2 px-4" key={column.key}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((dataItem, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => (
                  <column.Component key={column.key} data={dataItem} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };