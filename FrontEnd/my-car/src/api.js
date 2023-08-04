async function fetchOption({ path }) {
  return fetch(path)
    .then((res) => res.json())
    .catch((e) => console.log(e));
}

async function fetchData() {
  const data = await fetchOption({
    path: 'http://www.hyundaimycar.store:8080/cars/1/trim/trims',
  });
  return { data };
}
export default fetchData;
