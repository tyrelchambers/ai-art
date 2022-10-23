interface MapDataForSelect {
  label: string;
  value: string;
}

export const parseFilename = (str: string) => {
  return str.match(/^(?:.*\/)?([^\/]+?|)(?=(?:\.[^\/.]*)?$)/gi);
};

export const mapDataForSelect = (
  data: any[],
  { label, value }: MapDataForSelect
) => {
  return (
    data?.map((d) => ({
      label: d[label],
      value: d[value],
    })) || []
  );
};
