import React from "react";
import FormLabel from "./FormLabel";

interface Props {
  label: string;
  htmlFor: string;
  inputType?: string;
  includeInput?: boolean;
  inputName: string;
}

const FormGroup = ({
  label,
  htmlFor,
  inputType = "text",
  inputName,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      <FormLabel label={label} htmlFor={htmlFor} />
      <input
        type={inputType}
        className="p-2 rounded-md border-[1px] border-gray-200 placeholder:text-sm"
        name={inputName}
        {...props}
      />
    </div>
  );
};

export default FormGroup;
