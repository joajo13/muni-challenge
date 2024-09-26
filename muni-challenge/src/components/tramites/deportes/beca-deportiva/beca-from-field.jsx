import { ErrorSpan } from "@/components/error-span";

export const BecaFormField = ({
  label,
  id,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  ...props
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
    <ErrorSpan error={error} />
  </div>
);
