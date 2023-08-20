import { BASIC_SERVER_URL } from '../constant';

export function UserCarPostRequest({ is_end = 1 }) {
  const myChiving_id = localStorage.getItem('myChiving_id') || 0;

  const userCar = JSON.parse(localStorage.getItem('userCar'));
  const accessToken = localStorage.getItem('jwtToken');

  const trimPrice = userCar.price.reduce((acc, current) => acc + current, 0);
  const optionPrice = userCar.optionPrice.reduce(
    (acc, current) => acc + current,
    0,
  );

  const selectedOptionIDs = userCar.selectedOptions.map((item) => item.id);

  return fetch(`${BASIC_SERVER_URL}/myChiving/create?userId=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      is_end,
      myChiving_id,
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
  }).then((res) =>
    localStorage.setItem('myChiving_id', res?.json()?.myChiving_id || 0),
  );
}
