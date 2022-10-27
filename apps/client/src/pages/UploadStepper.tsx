import { MultiSelect } from "@mantine/core";
import { useReducer, useState } from "react";
import FormGroup from "../components/FormGroup";
import ImageBeingUploaded from "../components/ImageBeingUploaded";
import UploadIncrementers from "../components/UploadIncrementers";
import { imageEditReducer } from "../reducers/imageEditReducer";
import { ImageFile } from "../types";

const UploadStepper = ({ images }: { images: ImageFile | ImageFile[] }) => {
  const [state, dispatch] = useReducer(imageEditReducer, images);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImageHandler = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  const lastImageHandler = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  console.log(state);

  return (
    <div className="w-full flex flex-col gap-4">
      <ImageBeingUploaded
        image={state[currentImageIndex]}
        currentIndex={currentImageIndex}
        dispatch={dispatch}
      />

      <UploadIncrementers
        index={currentImageIndex}
        totalIndices={images?.length - 1}
        nextHandler={nextImageHandler}
        lastHandler={lastImageHandler}
        state={state}
      />
    </div>
  );
};

export default UploadStepper;
