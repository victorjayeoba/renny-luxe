// Breadcrumb.jsx
import Link from "next/link";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="bg-gray-200 p-3 rounded-md">
      <ul className="flex space-x-2 xl:container px-4 mx-auto">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link href={item.href} className="text-blue-600 hover:underline">
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <span className="mx-2"> &gt; </span> // You can use any separator here
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
