import React from "react";
import { Link } from "react-location";

const routes = [
  {
    label: "Dashboard",
    slug: "/dashboard",
  },
  {
    label: "Gallery",
    slug: "/gallery",
  },
  {
    label: "Collections",
    slug: "/collections",
  },
];

const DashNav = () => {
  return (
    <div>
      <ul className="flex items-center gap-2">
        {routes.map((r) => (
          <li key={r.label}>
            <Link
              to={r.slug}
              className="rounded-lg p-2 px-4 text-gray-300 transition-all hover:bg-gray-900 hover:text-white"
            >
              {r.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashNav;
