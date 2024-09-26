import { Link } from "wouter";
import { IoIosArrowForward } from "react-icons/io";

export const Breadcrumb = ({items}) => {
return (
    <div className="w-full bg-white py-4">
        <nav className="flex items-center">
            <ul className="flex items-center">
                {items.map((item, index) => (
                    <li key={item.name} className="flex items-center">
                        <Link
                            to={`/${item.path}`}
                            className="flex items-center hover:text-cyan-600 transition-colors duration-200 text-gray-500 hover:underline"
                        >
                            <span>{item.name}</span>
                        </Link>

                        {index !== items.length - 1 && (
                            <IoIosArrowForward className="text-gray-400 mx-1" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);
};
