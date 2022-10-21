import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-location";
import DashNav from "./DashNav";
import { Avatar, Menu } from "@mantine/core";
import DashNavDropdown from "./DashNavDropdown";
import { useAuth } from "../hooks/useAuth";

const DashHeader = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex w-full items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center">
        <span className="mr-10 text-white">App_name </span>
        <DashNav />
      </div>

      <div className="flex items-center gap-4">
        <Link
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-500 bg-white transition-all hover:bg-indigo-500 [&>*]:hover:text-white"
          to="/upload"
        >
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            className="text-indigo-500"
            style={{ width: "20px" }}
          />
        </Link>

        <Menu
          position="bottom-end"
          classNames={{
            dropdown: "w-48",
          }}
        >
          <Menu.Target>
            <button>
              <Avatar radius="xl" />
            </button>
          </Menu.Target>

          <Menu.Dropdown>
            <DashNavDropdown currentUser={currentUser?.user} />
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};

export default DashHeader;
