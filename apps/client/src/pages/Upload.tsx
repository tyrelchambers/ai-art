import { useRef } from "react";
import { FilePond } from "react-filepond";
import { useMatches } from "react-location";
import FileUpload from "../components/FileUpload";
import DashHeader from "../layouts/DashHeader";
import SubHeader from "../layouts/SubHeader";
import { useUploadStore } from "../stores/useUpload";
import UploadStepper from "./UploadStepper";

const Upload = () => {
  const uploadStore = useUploadStore();
  const matches = useMatches();
  const paramsId = matches[1]?.params.id;

  const uploadRef = useRef<FilePond>();

  const submitHandler = async () => {
    const upload = await uploadRef.current?.processFiles();

    if (!upload?.length) return;
  };

  return (
    <div>
      <DashHeader />
      <SubHeader title="Upload" />
      <main className="ml-auto mr-auto max-w-screen-md w-full my-20">
        {!paramsId && (
          <form>
            <FileUpload
              ref={uploadRef}
              files={uploadStore.files}
              setFiles={uploadStore.setFiles}
              setUploadedFiles={uploadStore.setUploadedFiles}
            />
            <button type="button" onClick={submitHandler}>
              Upload
            </button>
          </form>
        )}
        {paramsId && <UploadStepper images={uploadStore.uploadedFiles} />}
      </main>
    </div>
  );
};

export default Upload;
