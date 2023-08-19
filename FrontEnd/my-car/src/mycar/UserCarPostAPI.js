import { BASIC_SERVER_URL } from '../constant';

export function UserCarPostRequest({ is_end = 1 }) {
  const id = localStorage.getItem('MycarInstanceId');

  const userCar = JSON.parse(localStorage.getItem('userCar'));
  const accessToken = localStorage.getItem('jwtToken');

  const trimPrice = userCar.price.reduce((acc, current) => acc + current, 0);
  const optionPrice = userCar.optionPrice.reduce(
    (acc, current) => acc + current,
    0,
  );
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString();
  const selectedOptionIDs = userCar.selectedOptions.map((item) => item.id);

  return fetch(`${BASIC_SERVER_URL}/myChiving/create?userId=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      is_end,
      id,
      car_id: 1,
      trim_id: userCar.trim?.id || null,
      engine_id: userCar.engine?.id || null,
      body_id: userCar.bodyType?.id || null,
      drive_id: userCar.wheelDrive?.id || null,
      ex_color_id: userCar.outerColor?.id || null,
      in_color_id: userCar.innerColor?.id || null,
      price: trimPrice + optionPrice,
      updated_at: formattedDate,
      optionIds: selectedOptionIDs || [],
    }),
  });
}
