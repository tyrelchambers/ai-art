import React, { useId } from "react";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond/dist/filepond.min.css";
import { parseFilename } from "../utils/utils";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-location";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FileUpload = React.forwardRef(
  ({ files, setFiles, setUploadedFiles }, ref) => {
    const redisKey = uuidv4();
    const navigate = useNavigate();

    return (
      <FilePond
        ref={ref}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={10}
        instantUpload={false}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        server={{
          process: {
            url: "http://localhost:4000/api/v1/upload",
            withCredentials: true,
            ondata: (formData) => {
              formData.append("files_length", files.length);
              formData.append("redis_key", redisKey);
              return formData;
            },
            onload: (response) => {
              if (response !== "Accepted") {
                const data = JSON.parse(response);
                const parsedData = data.files.map((f) => JSON.parse(f));
                setUploadedFiles(parsedData);
                navigate({
                  to: `/upload/${parseFilename(parsedData[0].filename)}`,
                });

                return response;
              }

              return response;
            },
          },
        }}
      />
    );
  }
);

export default FileUpload;
