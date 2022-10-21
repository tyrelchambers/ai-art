import { Checkbox, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import React from "react";
import Button from "../components/Buttons";
import FormGroup from "../components/FormGroup";
import FormLabel from "../components/FormLabel";
import { useCollections } from "../hooks/useCollections";

interface Props {
  setOpened: (val: boolean) => void;
}

const CreateCollectionForm = ({ setOpened }: Props) => {
  const { createCollection } = useCollections();

  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      public: false,
    },

    validate: {
      name: (value) => value.length === 0 && "Need a name",
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      showNotification({ message: "Please fill out a name", color: "red" });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = form.validate();

    if (errors.hasErrors) {
      return handleError(errors.errors);
    }

    createCollection.mutate(form.values);
    setOpened(false);
  };

  return (
    <form className="flex flex-col gap-4">
      <FormGroup
        label="Name"
        htmlFor="name"
        placeholder="Give your collection a name"
        inputName="name"
        {...form.getInputProps("name")}
      />

      <div className="flex flex-col">
        <FormLabel label="Description" />
        <textarea
          name="description"
          placeholder="Add a description"
          className=" p-2 rounded-md border-[1px] border-gray-200 placeholder:text-sm w-full"
          rows={5}
          {...form.getInputProps("description")}
        />
      </div>

      <Checkbox
        label="Make collection public"
        onChange={(e) => form.setValues({ public: e.currentTarget.checked })}
      />

      <Button onClick={submitHandler}>Save</Button>
    </form>
  );
};

export default CreateCollectionForm;
