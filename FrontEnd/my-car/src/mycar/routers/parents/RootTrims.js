import { Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import ServerErrorPage from '../../../error/ServerErrorPage';

function RootTrim() {
  const { data, error } = useLoaderData();
  const { page } = useOutletContext();

  if (error) return <ServerErrorPage />;

  return <Outlet context={{ page, trimOptions: data }} />;
}

export default RootTrim;
