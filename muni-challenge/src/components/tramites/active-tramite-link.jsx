import { Link } from "wouter";

export const ActiveTramiteLink = ({link}) => {
  return (
    <Link
      to={link.url}
      className="border rounded-md px-8 py-4 mt-2 hover:border-cyan-600 transition-colors duration-200"
      key={link.name}
    >
      <h4 className="text-cyan-600 font-bold">{link.name}</h4>
      <p className="text-gray-500">{link.description}</p>
    </Link>
  );
};
