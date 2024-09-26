export const PageHeader = ({title, description}) => {
  return (
    <div>
      {/* Title */}
      <h1 className="text-2xl font-bold mt-4 text-cyan-600">{title}</h1>

      {/* Description */}
      <p className="text-gray-500 mt-1">
        {description}
      </p>
    </div>
  );
};
