import { twMerge } from "tailwind-merge";

export const PageContainer = ({ children, className }) => {
  return (
    <div className={twMerge("mt-16 px-3 md:px-6 lg:px-28 xl:px-28", className)}>
      {children}
    </div>
  );
};
