import { ActiveTramiteCard } from "@/components/tramites/active-tramite-card";
import { DisableTramiteCard } from "@/components/tramites/disable-tramite-card";

export const TramitesGrid = ({ tramites }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      
      {tramites.map((tramite) =>
        tramite.status === "active" ? (
          <ActiveTramiteCard tramite={tramite} key={tramite.name} />
        ) : (
          <DisableTramiteCard tramite={tramite} key={tramite.name} />
        )
      )}
    </div>
  );
};
