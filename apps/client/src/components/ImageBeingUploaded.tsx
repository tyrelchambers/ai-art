import { MultiSelect } from "@mantine/core";
import { Dispatch } from "react";
import { ImageFile } from "../types";
import FormGroup from "./FormGroup";

interface Props {
  image: ImageFile;
  dispatch: Dispatch<any>;
  currentIndex: number;
}

const ImageBeingUploaded = ({ image, dispatch, currentIndex }: Props) => {
  return (
    <>
      <header className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex gap-4">
          <img
            src={`data:image/png;base64, ${image?.image}`}
            alt=""
            className="rounded-xl w-full max-w-sm"
          />

          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">Original image details</p>
            <p>Filename: {image?.filename}</p>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col gap-4">
        <p className="text-xl font-bold">New image details</p>
        <FormGroup
          label="Name"
          htmlFor="name"
          inputName="name"
          placeholder="The name of this image"
          value={image?.name}
          onChange={(e) =>
            dispatch({
              type: "update_name",
              payload: {
                index: currentIndex,
                value: e.currentTarget.value,
              },
            })
          }
        />

        <MultiSelect
          label={"Add to collection"}
          classNames={{
            label: "text-gray-700 text-sm mb-1 font-normal",
          }}
          placeholder="Pick one or more collections"
          data={[]}
        />
      </div>
    </>
  );
};

export default ImageBeingUploaded;
