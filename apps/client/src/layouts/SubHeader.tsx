import React, { ReactElement } from "react";

const SubHeader = ({
  title,
  actions,
}: {
  title: string;
  actions?: string | ReactElement | ReactElement[];
}) => {
  return (
    <div className="border-b-[1px] border-gray-300 bg-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      <div>{actions}</div>
    </div>
  );
};

export default SubHeader;
