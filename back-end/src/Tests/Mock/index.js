const dataDb = [
  {
    _id: '63b01b7483c7d8e170dc115e',
    userName: 'userNameTeste',
    __v: 0,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYjAxYjc0ODNjN2Q4ZTE3MGRjMTE1ZSIsInVzZXJOYW1lIjoiZ3VzdGF2byIsIl9fdiI6MH0sImlhdCI6MTY3MzEwNDAzNH0.k--MRNyFtHjXS1nMUhn_9sSGx94drb20Taen3p8fvs0',
  },
];

const createUser = [
  {
    email: 'gustavo@gmail.com',
    userName: 'gustavo',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imd1c3Rhdm8iLCJpYXQiOjE2NzMxMDUxMTl9.tz_RauSOKg79PcsS5c3rOfYLtYRf_46woLYgjU2CET0',
  },
];

const getAllUsers = [
  {
    _id: '63b01b7483c7d8e170dc115e',
    userName: 'gustavo',
    password: '7beb04f055ae4ec109e74162520c11b1',
    __v: 0,
  },
  {
    _id: '63b5a510b5234189bde31514',
    userName: 'gustavoteste',
    password: 'e10adc3949ba59abbe56e057f20f883e',
    __v: 0,
  },
  {
    _id: '63b98ede199a6669bf461a60',
    userName: 'gustavo',
    password: '7beb04f055ae4ec109e74162520c11b1',
    __v: 0,
  },
];

module.exports = {
  dataDb,
  createUser,
  getAllUsers,
};
