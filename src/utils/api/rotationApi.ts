export const getRotationList = async () => {
  const res = await fetch("/api/rotation");
  const { champions } = await res.json();
  return champions;
};
