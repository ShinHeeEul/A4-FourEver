import { Outlet, useLocation } from 'react-router-dom';
import ChivingHeader from '../common/ChivingHeader';
import { useState } from 'react';
import ArchivingProvider from '../context/archiving/ArchivingProvider';

function RootArchiving() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  return (
    <ArchivingProvider setLoading={setLoading} fromMycar={state}>
      <ChivingHeader fromMycar={state} />
      <Outlet context={{ loading, fromMycar: state }} />
    </ArchivingProvider>
  );
}
export default RootArchiving;
