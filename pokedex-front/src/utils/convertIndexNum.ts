export const convertIndexNum = (id: number): string => {
  const convertedIndex = id.toString().padStart(4, "0");
  return convertedIndex;
};
