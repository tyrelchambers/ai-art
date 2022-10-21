import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Menu } from "@mantine/core";
import { format } from "date-fns";
import React from "react";
import ImageMenu from "../layouts/imageMenu";
import { ImageFromDb } from "../types";

interface Props {
  image: ImageFromDb;
}

const GalleryItem = ({ image }: Props) => {
  return (
    <div className="bg-white rounded-md">
      <div className="relative">
        <Image
          src={image.url}
          withPlaceholder
          classNames={{
            image: "rounded-t-md",
          }}
        />
        <div className="absolute top-2 right-2 z-10">
          <Menu
            shadow="md"
            position="bottom-end"
            classNames={{
              dropdown: "w-48",
            }}
          >
            <Menu.Target>
              <button className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </Menu.Target>

            <Menu.Dropdown>
              <ImageMenu image={image} />
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
      <div className="p-4 flex flex-col">
        <p className="font-bold">{image.name}</p>
        <p className="text-xs text-gray-600 mt-4">
          <FontAwesomeIcon icon={faClock} />{" "}
          {format(new Date(image.createdAt), "MMMM do")}
        </p>
      </div>

      <div className="bg-gray-50 p-4">
        <p className="text-xs text-gray-500">{image.filename}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
