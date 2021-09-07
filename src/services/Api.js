const getPlanets = async () => {
  const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const result = await fetch(URL_API);
  const { results } = await result.json();
  return results;
};

export default getPlanets;
