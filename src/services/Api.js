const getPlanets = async () => {
  const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const result = await fetch(URL_API);
  const data = result.json();
  return data;
};

export default getPlanets;
