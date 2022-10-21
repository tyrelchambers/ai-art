import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Collection as CollectionType } from "../types";

interface Props {
  imagePreview: any[];
  collection: CollectionType;
}

const Collection = ({ imagePreview, collection }: Props) => {
  return (
    <div className="rounded-xl bg-white">
      <div className="p-4 flex flex-col">
        <p>{collection.name}</p>
        <div className="flex mt-4">
          <span className="flex items-center gap-2 text-xs text-gray-500">
            <FontAwesomeIcon icon={faLock} /> <p>Private</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
