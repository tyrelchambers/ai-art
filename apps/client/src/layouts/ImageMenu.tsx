import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "@mantine/core";
import { openModal } from "@mantine/modals";
import React from "react";
import EditImageForm from "../forms/EditImageForm";

const ImageMenu = ({ image }) => {
  const openEditModal = () => {
    openModal({
      title: "Edit image",
      children: (
        <>
          <EditImageForm image={image} />
        </>
      ),
    });
  };

  return (
    <>
      <Menu.Label>Actions</Menu.Label>
      <Menu.Item>View</Menu.Item>
      <Menu.Item onClick={openEditModal}>Edit</Menu.Item>
      <Menu.Divider />
      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item color="red">Delete image</Menu.Item>
    </>
  );
};

export default ImageMenu;
