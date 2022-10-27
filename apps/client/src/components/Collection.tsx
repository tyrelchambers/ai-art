import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@mantine/core";
import React from "react";
import { Collection as CollectionType, ImageFromDb } from "../types";

interface Props {
  imagePreview: ImageFromDb[];
  collection: CollectionType;
}

const Collection = ({ imagePreview, collection }: Props) => {
  const firstImage = imagePreview[0].url;
  const secondImage = imagePreview[1]?.url;
  const thirdImage = imagePreview[2]?.url;

  const gridClasses = imagePreview.length > 1 ? "col-span-8" : "col-span-12";

  return (
    <div className="rounded-xl bg-white">
      <div className={`grid gap-2 ${gridClasses}`}>
        <div className="col-span-8 ">
          <div className="col-span-2">
            <Image src={firstImage} />
          </div>
        </div>
        {imagePreview.length > 1 && (
          <div className="grid grid-rows-2 col-span-4 gap-2">
            <Image src={secondImage} />
            <Image src={thirdImage} />
          </div>
        )}
      </div>
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
