import { Link } from "wouter";
import { BrandIcon } from "../icons/brand-icon";

export const Brand = () => {
  return (
    <div className="text-xl font-bold">
      <Link href="/">
        <BrandIcon />
      </Link>
    </div>
  );
};
