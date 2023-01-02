const randonUser = async (qtd = 20) => {
  const user = await fetch(`https://randomuser.me/api/?results=${qtd}`);
  const { results } = await user.json();
  return results;
};

export default randonUser;
