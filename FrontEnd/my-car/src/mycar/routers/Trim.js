import { useOutletContext } from 'react-router-dom';
import TrimCard from '../components/TrimCard';

function Trim() {
  const { setUserCar } = useOutletContext();
  return (
    <div>
      <div style={{ height: '355px' }} />
      <TrimCard setUserCar={setUserCar} />
    </div>
  );
}
export default Trim;
