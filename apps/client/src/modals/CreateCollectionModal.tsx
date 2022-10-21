import { Modal } from "@mantine/core";
import React, { useState } from "react";
import Button from "../components/Buttons";
import CreateCollectionForm from "../forms/CreateCollectionForm";

const CreateCollectionModal = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>Create collection</Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create a collection"
        classNames={{ title: "font-bold" }}
      >
        <CreateCollectionForm setOpened={setOpened} />
      </Modal>
    </>
  );
};

export default CreateCollectionModal;
