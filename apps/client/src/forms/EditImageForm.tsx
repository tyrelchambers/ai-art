import React, { useState } from "react";
import FormGroup from "../components/FormGroup";
import { ImageFromDb } from "../types";

const EditImageForm = ({ image }: { image: ImageFromDb }) => {
  const [state, setState] = useState(image);

  return (
    <form>
      <FormGroup
        label="Name"
        htmlFor="name"
        inputName="name"
        value={state.name}
        onChange={(v) => setState({ ...state, name: v.currentTarget.value })}
      />
    </form>
  );
};

export default EditImageForm;
