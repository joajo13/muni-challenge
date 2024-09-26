export const DisableTramiteLink = ({link}) => {
  return (
    <div
      className="border rounded-md px-8 py-4 mt-2 text-gray-300"
      key={link.name}
    >
      <h4 className="font-bold">{link.name}</h4>
      <p className="">{link.description}</p>
    </div>
  );
};
