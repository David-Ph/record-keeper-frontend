export const getIdFromUrl = (url) => {
  const id = url.split("/")[2];
  if (id) {
    return url.split("/")[2];
  }
};
