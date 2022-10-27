import { MultiSelect } from "@mantine/core";
import { closeAllModals } from "@mantine/modals";
import React, { useState } from "react";
import Select from "react-select";
import Button from "../components/Buttons";
import FormGroup from "../components/FormGroup";
import { useCollections } from "../hooks/useCollections";
import { useImage } from "../hooks/useImage";
import { ImageFromDb } from "../types";

const EditImageForm = ({ image }: { image: ImageFromDb }) => {
  const { update } = useImage();
  const { collections } = useCollections();

  const [state, setState] = useState(image);
  const [stateCollections, setStateCollections] = useState(() => {
    console.log(image);

    const modifiedStateCollections = image.collections?.map((c) => ({
      label: c.name,
      value: c.uuid,
    }));

    return modifiedStateCollections;
  });

  const submitHandler = () => {
    const payload = {
      ...state,
    };

    payload.collections = stateCollections;

    update.mutate(payload);

    // closeAllModals();
  };

  if (!collections) return null;

  const modifiedCollections = collections?.map((c) => ({
    label: c.name,
    value: c.uuid,
  }));

  return (
    <form className="flex flex-col gap-4">
      <FormGroup
        label="Name"
        htmlFor="name"
        inputName="name"
        value={state.name}
        onChange={(v) => setState({ ...state, name: v.currentTarget.value })}
      />

      <Select
        options={modifiedCollections}
        onChange={(e) => setStateCollections(e)}
        value={stateCollections}
        placeholder="Add to a collection"
        isMulti
      />

      <Button onClick={submitHandler}>Update</Button>
    </form>
  );
};

export default EditImageForm;
