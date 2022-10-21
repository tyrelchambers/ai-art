import React from "react";

interface Props {
  label: string;
  htmlFor?: string;
  subLabel?: string;
}

const FormLabel = ({ label, htmlFor, subLabel }: Props) => {
  return (
    <>
      <label htmlFor={htmlFor} className="text-gray-700 text-sm mb-1">
        {label}
      </label>
      <p>{subLabel}</p>
    </>
  );
};

export default FormLabel;
