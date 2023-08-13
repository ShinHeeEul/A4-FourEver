import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import { MYCAR } from '../../../constant';
import ServerErrorPage from '../../../error/ServerErrorPage';
import ColorProvider from '../../../context/mycar/color/ColorPrivider';

function RootColor() {
  const { data, error } = useLoaderData();
  const { page } = useOutletContext();

  if (error) return <ServerErrorPage />;

  const inColorOptions = data[MYCAR.COLOR.FILED.INCOLOR];
  const exColorOptions = data[MYCAR.COLOR.FILED.EXCOLOR];

  return (
    <ColorProvider exColorOptions={exColorOptions}>
      <Outlet
        context={{
          page,
          inColorOptions,
          exColorOptions,
        }}
      />
    </ColorProvider>
  );
}
export default RootColor;
