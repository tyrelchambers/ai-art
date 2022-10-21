export interface ImageFile {
  url: string;
  filename: string;
  userId: string;
  image: string;
  details: ImageDetails;
}

interface ImageDetails {
  name: string;
  collection: string[];
}

export interface ImageFromDb {
  uuid: string;
  url: string;
  filename: string;
  name: string;
  userId: string;

  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  name: string;
  description?: string;
  public: boolean;
  iamges?: ImageFromDb[];
}
