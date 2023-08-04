import TrimCard from '../components/TrimCard';
import { useLoaderData } from 'react-router-dom';

function Trim() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <div style={{ height: '355px' }} />
      <TrimCard />
    </div>
  );
}
export default Trim;
