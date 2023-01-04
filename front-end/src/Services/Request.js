const randonUser = async (qtd = 20) => {
  const user = await fetch(`https://randomuser.me/api/?results=${qtd}`);
  const { results } = await user.json();
  return results;
};

const httpCats = async (statusCode) => {
  console.log('entramos aqui');
  const cats = await fetch(`http.cat/${statusCode}`);
  console.log(cats);
  const { results } = await cats.json();
  console.log('>>>>>>', results);
  return results;
};

export {
  randonUser,
  httpCats,
};
