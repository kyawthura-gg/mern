import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Ha",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "David Ho",
    email: "david@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
