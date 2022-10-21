import { Menu } from "@mantine/core";
import React from "react";
import { Link } from "react-location";
import { useAuth } from "../hooks/useAuth";

const DashNavDropdown = ({ currentUser }) => {
  return (
    <>
      <Menu.Label>Settings</Menu.Label>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Account</Menu.Item>
      <Menu.Divider />
      <Menu.Label>Images</Menu.Label>
      <Menu.Item>
        <Link to={`/${currentUser.uuid}/gallery`}>Gallery</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`/${currentUser.uuid}/collections`}>Collections</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item color="indigo">Logout</Menu.Item>
    </>
  );
};

export default DashNavDropdown;
