export const parseFilename = (str: string) => {
  console.log(str);

  return str.match(/^(?:.*\/)?([^\/]+?|)(?=(?:\.[^\/.]*)?$)/gi);
};
