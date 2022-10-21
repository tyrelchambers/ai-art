import React from "react";
import GalleryItem from "../components/GalleryItem";
import { useGallery } from "../hooks/useGallery";
import DashHeader from "../layouts/DashHeader";
import SubHeader from "../layouts/SubHeader";

const PublicGallery = () => {
  const [gallery] = useGallery();

  return (
    <div>
      {/* <DashHeader />
      <SubHeader title="Gallery" />

      <main className="grid grid-cols-4 ml-auto mr-auto max-w-screen-xl gap-4 my-10">
        {gallery?.map((g) => <GalleryItem image={g} key={g.uuid} />) || null}
      </main> */}
    </div>
  );
};

export default PublicGallery;
