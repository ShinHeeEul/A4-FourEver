import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import { MYCAR } from '../../../constant';
import ServerErrorPage from '../../../error/ServerErrorPage';

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
  const { page, userCar, setUserCar } = useOutletContext();
  const { data, error } = useLoaderData();

  if (error) return <ServerErrorPage />;

  const basicOptions = OptionClassify(data[MYCAR.SELECTED.FILED.BASIC]);
  const selectOptions = OptionClassify(data[MYCAR.SELECTED.FILED.SELECT]);

  return (
    <Outlet
      context={{ page, userCar, setUserCar, basicOptions, selectOptions }}
    />
  );
}
export default RootSelectOption;
