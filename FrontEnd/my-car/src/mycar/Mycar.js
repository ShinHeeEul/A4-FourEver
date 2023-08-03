import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { myCarPagePath } from '../constant';
import Footer from './components/Footer';

function Mycar() {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [userCar, setUserCar] = useState({
    trim: 0,
    selectedOptions: [],
    price: [47720000],
  });

  useEffect(() => {
    navigate(`/mycar/${myCarPagePath[page]}`);
  }, [page]);

  console.log(userCar);

  return (
    <>
      <NavBar page={page} />
      <Outlet context={{ page, userCar, setUserCar }} />
      <Footer
        userCar={userCar}
        price={userCar.price}
        setPage={setPage}
        page={page}
      />
    </>
  );
}
export default Mycar;
