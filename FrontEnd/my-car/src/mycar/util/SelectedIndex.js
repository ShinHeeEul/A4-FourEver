export function SelectedIndex({ userOptionID, optionInfo }) {
  const optionIndex = optionInfo.findIndex(
    (option) => option.id === userOptionID,
  );
  return optionIndex;
}
