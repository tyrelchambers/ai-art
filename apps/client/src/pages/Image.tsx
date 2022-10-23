import React from "react";
import { useMatch, useNavigate } from "react-location";
import { useImage } from "../hooks/useImage";
import DashHeader from "../layouts/DashHeader";
import SubHeader from "../layouts/SubHeader";
import { Image as MantineImage } from "@mantine/core";
import Button from "../components/Buttons";
import { openModal } from "@mantine/modals";
import EditImageForm from "../forms/EditImageForm";

const Image = () => {
  const {
    params: { uuid },
  } = useMatch();

  const { image } = useImage(uuid);

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
    <div>
      <DashHeader />
      <SubHeader
        title={image?.name}
        actions={<Button onClick={openEditModal}>Edit</Button>}
      />

      <main className="max-w-screen-xl ml-auto mr-auto mt-10">
        <header className="flex bg-white gap-10 p-6 rounded-3xl">
          <MantineImage
            src={image?.url}
            classNames={{
              image: "rounded-xl ",
              root: "max-w-xl",
            }}
          />

          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">{image?.name}</h1>
          </div>
        </header>
      </main>
    </div>
  );
};

export default Image;
