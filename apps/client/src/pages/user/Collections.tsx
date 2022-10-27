import React from "react";
import Collection from "../../components/Collection";
import { useCollections } from "../../hooks/useCollections";
import DashHeader from "../../layouts/DashHeader";
import SubHeader from "../../layouts/SubHeader";
import CreateCollectionModal from "../../modals/CreateCollectionModal";

const Collections = () => {
  const { collections } = useCollections();
  console.log(collections);

  return (
    <div>
      <DashHeader />
      <SubHeader title="Your Collections" actions={<CreateCollectionModal />} />

      <main className="max-w-screen-xl ml-auto mr-auto my-10">
        {!collections?.length && (
          <div className="flex flex-col items-center bg-white w-full rounded-xl shadow-lg p-10">
            <p className="text-gray-600 text-xl">
              It doesn't look like you've made a collection yet
            </p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-10">
          {collections?.map((c) => (
            <Collection imagePreview={c.images} collection={c} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Collections;
