import { STATUS } from "@/constants/STATUS";
import { updateStatus } from "@/services/tramites/updateStatus";
import { useSessionStore } from "@/stores/sessionStore";
import { useState } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

const statusArray = [
  { label: "Pendiente", value: STATUS.PENDIENTE },
  { label: "Aprobado", value: STATUS.APROBADO },
  { label: "Rechazado", value: STATUS.RECHAZADO },
];

export const StatusCell = ({ status, idTramite }) => {
  const { token, setRefetch } = useSessionStore((state) => state);
  const [statusValue, setStatusValue] = useState(status);

  const getStatusClass = (status) => {
    switch (status) {
      case STATUS.PENDIENTE:
        return "text-yellow-600 bg-yellow-100/30";
      case STATUS.APROBADO:
        return "text-green-600 bg-green-100/30";
      case STATUS.RECHAZADO:
        return "text-red-600 bg-red-100/30";
      default:
        return "";
    }
  };

  const handleChange = async (e) => {
    const loadingToast = toast.loading("Actualizando estado...");
    const newStatus = e.target.value;
    const res = await updateStatus({
      status: newStatus,
      token,
      idTramite,
    });

    if (res.error) {
      toast.dismiss(loadingToast);
      toast.error(res.error);
      return;
    }

    setStatusValue(newStatus);
    toast.dismiss(loadingToast);
    toast.success("Estado actualizado correctamente");
    setRefetch((prev) => !prev);
  };

  return (
    <td className="text-center py-3 border-t">
      <div className="w-full justify-center items-center gap-1 flex">
        <select
          className={twMerge(
            "p-2 rounded-md cursor-pointer",
            getStatusClass(statusValue)
          )}
          value={statusValue}
          onChange={handleChange}
        >
          {statusArray.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>
    </td>
  );
};
