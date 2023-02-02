import database from '../database.js';

const addUser = (body) => {
  const newUser = {
    ...body,
    id: database.id,
  };
  database.id += 1;
  database.users = [ ...database.users, newUser ];
  return database.users;
};

export default { addUser };