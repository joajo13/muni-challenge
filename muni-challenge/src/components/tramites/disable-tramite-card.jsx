export const DisableTramiteCard = ({tramite}) => {
  return (
    <div
      className="bg-white relative rounded-md h-44 border p-8 flex items-center justify-between transition-colors duration-200"
      key={tramite.name}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-85 rounded-md">
        <div className="flex items-center justify-center w-full h-full">
          <p className="text-gray-500 text-lg font-bold">No disponible</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-800">{tramite.name}</h2>
        <p className="text-gray-500 mt-1">{tramite.description}</p>
      </div>

      <tramite.icon
        size={38}
        className="text-gray-600 group group-hover:text-cyan-600"
      />
    </div>
  );
};
