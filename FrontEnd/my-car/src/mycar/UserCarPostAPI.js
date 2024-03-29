import { BASIC_SERVER_URL } from '../constant';

export async function UserCarPostRequest({ is_end = 1 }) {
  const getId = localStorage.getItem('myChiving_id');

  const id =
    getId === ('undefined' || 'null' || null || undefined)
      ? 0
      : JSON.parse(getId);

  const userCar = JSON.parse(localStorage.getItem('userCar'));
  const accessToken = localStorage.getItem('jwtToken');
  const trimPrice = userCar.price.reduce((acc, current) => acc + current, 0);
  const optionPrice = userCar.optionPrice.reduce(
    (acc, current) => acc + current,
    0,
  );

  const selectedOptionIDs = userCar.selectedOptions.map((item) => item.id);

  try {
    console.log('id:', id);
    const data = await fetch(`${BASIC_SERVER_URL}/mychivings?userId=1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        id: id ? id : 0,
        is_end,
        car_id: 1,
        trim_id: userCar.trim?.id || 0,
        engine_id: userCar.engine?.id || 0,
        body_id: userCar.bodyType?.id || 0,
        drive_id: userCar.wheelDrive?.id || 0,
        ex_color_id: userCar.outerColor?.id || 0,
        in_color_id: userCar.innerColor?.id || 0,
        price: trimPrice + optionPrice,
        optionIds: selectedOptionIDs || [],
      }),
    }).then((res) => res.json());
    localStorage.setItem('myChiving_id', data?.id);
  } catch (e) {
    console.error(e);
  }
}
