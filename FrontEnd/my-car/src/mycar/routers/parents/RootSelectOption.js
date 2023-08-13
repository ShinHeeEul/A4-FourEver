import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import { MYCAR } from '../../../constant';
import ServerErrorPage from '../../../error/ServerErrorPage';
import SelectOptionProvider from '../../../context/mycar/selectOption/SelectOptionProvider';

function OptionClassify(options) {
  const groupedObjects = {};

  options.forEach((obj) => {
    const { category, ...otherProps } = obj;

    if (!groupedObjects[category]) {
      groupedObjects[category] = [];
    }

    groupedObjects[category].push({ ...otherProps });
  });

  const newArray = Object.keys(groupedObjects).map((category) => ({
    category,
    options: groupedObjects[category],
  }));
  return newArray;
}

function RootSelectOption() {
  const { page } = useOutletContext();
  const { data, error } = useLoaderData();

  if (error) return <ServerErrorPage />;

  const basicOptions = OptionClassify(data[MYCAR.SELECTED.FILED.BASIC]);
  const selectOptions = OptionClassify(data[MYCAR.SELECTED.FILED.SELECT]);

  return (
    <SelectOptionProvider>
      <Outlet context={{ page, basicOptions, selectOptions }} />
    </SelectOptionProvider>
  );
}
export default RootSelectOption;
