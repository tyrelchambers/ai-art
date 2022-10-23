import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Menu } from "@mantine/core";
import { format } from "date-fns";
import React from "react";
import { Link } from "react-location";
import ImageMenu from "../layouts/ImageMenu";
import { ImageFromDb } from "../types";

interface Props {
  image: ImageFromDb;
}

const GalleryItem = ({ image }: Props) => {
  return (
    <Link to={`/image/${image.uuid}`} className="bg-white rounded-md">
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
      <div className="p-4 flex flex-col gap-4">
        <p className="font-bold">{image.name}</p>
        {/* <div className="text-xs text-gray-600 flex gap-2 items-center">
          <FontAwesomeIcon icon={faTag} />{" "}
          {image.collections?.map((c) => (
            <p>{c.collection.name}</p>
          ))}
        </div>
        <p className="text-xs text-gray-600">
          <FontAwesomeIcon icon={faClock} />{" "}
          {format(new Date(image.createdAt), "MMMM do")}
        </p> */}
      </div>

      <div className="bg-gray-50 p-4">
        <p className="text-xs text-gray-500">{image.filename}</p>
      </div>
    </Link>
  );
};

export default GalleryItem;
