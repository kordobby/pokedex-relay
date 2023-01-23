export const convertPokeTypes = (type: string | undefined): string[] | void => {
  if (!type) return;
  const typesArray = type?.split(",");
  return typesArray;
};
