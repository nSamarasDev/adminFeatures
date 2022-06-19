import bcryptjs from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcryptjs.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jon Doe',
    email: 'jon@example.com',
    password: bcryptjs.hashSync('123456', 10),
  },
  {
    name: 'Nicholas Samaras',
    email: 'n.samaras4@outlook.com',
    password: bcryptjs.hashSync('123456', 10),
  },
];

export default users;
