import { FilePond } from "react-filepond";
import create from "zustand";

interface Props {
  files: FilePond[];
  setFiles: (files: FilePond[]) => void;
  uploadedFiles: string[];
  setUploadedFiles: (files: string[]) => void;
}

export const useUploadStore = create<Props>((set) => ({
  files: [],
  setFiles: (files: FilePond[]) => set((state) => ({ files })),
  uploadedFiles: [],
  setUploadedFiles: (files) => set((state) => ({ uploadedFiles: files })),
}));
