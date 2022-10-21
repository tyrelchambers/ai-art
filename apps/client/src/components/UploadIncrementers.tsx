import React from "react";
import { useUpload } from "../hooks/useUpload";

const UploadIncrementers = ({
  index,
  totalIndices,
  nextHandler,
  lastHandler,
  state,
}) => {
  const { uploadFiles } = useUpload();

  const submitHandler = () => {
    const filesWithoutImageProp = state.map((s) => {
      const { image: _, ...newState } = s;
      return newState;
    });

    uploadFiles.mutate(filesWithoutImageProp);
  };

  const NextButton = () => {
    return (
      <>
        <button
          onClick={nextHandler}
          className="h-12 p-2 px-4 rounded-md text-sm bg-gray-200 text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
          disabled={index === totalIndices}
        >
          next image
        </button>
      </>
    );
  };

  const PrevButton = () => {
    return (
      <>
        <button
          onClick={lastHandler}
          className="h-12 p-2 px-4 rounded-md text-sm bg-gray-200 text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed"
          disabled={index == 0}
        >
          last image
        </button>
      </>
    );
  };

  const PublishButton = () => {
    return (
      <button
        type="button"
        className="h-12 p-2 px-4 rounded-md text-sm bg-indigo-500 text-white disabled:bg-indigo-200 disabled:cursor-not-allowed"
        disabled={index !== totalIndices}
        onClick={submitHandler}
      >
        Publish images
      </button>
    );
  };

  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-center gap-2">
        <PrevButton />
        <NextButton />
      </div>
      <PublishButton />
    </div>
  );
};

export default UploadIncrementers;
