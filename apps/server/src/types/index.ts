export interface Image {
  url: string;
  userId: string | undefined;
  filename: string;
  image?: string;
  name: string;
  collections?: string[];
}
