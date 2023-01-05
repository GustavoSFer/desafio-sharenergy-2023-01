const randonUser = async (qtd = 20) => {
  const user = await fetch(`https://randomuser.me/api/?results=${qtd}`);
  const { results } = await user.json();
  return results;
};

const httpCats = async (statusCode) => {
  const cats = await fetch(`https://http.cat/${statusCode}`);
  const { results } = await cats.json();
  return results;
};

export {
  randonUser,
  httpCats,
};
