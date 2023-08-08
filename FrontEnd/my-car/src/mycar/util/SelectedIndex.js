export function SelectedIndex({ userOption, optionInfo }) {
  const optionIndex = optionInfo.findIndex(
    (option) => option.id === userOption.id,
  );
  return optionIndex;
}
