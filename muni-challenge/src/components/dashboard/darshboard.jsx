import { Breadcrumb } from "@/components/breadcrumb";
import { PageContainer } from "@/components/containers/page-container";
import { columns } from "@/components/dashboard/columns";
import { PageHeader } from "@/components/page-header";
import { Table } from "@/components/table/table";
import { getAll } from "@/services/tramites/getAll";
import { useSessionStore } from "@/stores/sessionStore";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const breadcrumbItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
];

export const Dashboard = () => {
  const { token, refetch } = useSessionStore((state) => state);
  const [tramites, setTramites] = useState([]);

  useEffect(() => {
    const fetchTramites = async () => {
      try {
        const tramites = await getAll(null, token);
        setTramites(tramites);
      } catch (err) {
        console.log(err);
        toast.error("Error al obtener los tramites");
      }
    };

    fetchTramites();
  }, [token, refetch]);

  return (
    <PageContainer
      className="min-h-screen"
    >
      <Breadcrumb items={breadcrumbItems} />
      <PageHeader title="Dashboard" />

      <h2 className="text-xl text-gray-500 font-bold py-4">Tramites</h2>

      <Table columns={columns} data={tramites || []} />
    </PageContainer>
  );
};
