// Stores information about system administrators.
// Attributes:

// admin_id (PK, UUID): Unique identifier for the admin.
// username (VARCHAR): Admin’s username.
// password_hash (TEXT): Encrypted password.
// role (ENUM): Role of the admin (Super Admin, Election Officer, etc.).
// last_login (TIMESTAMP): Last login time.

import { users } from "./UsersTable";

// admin.js
export const admins = [
  {
    admin_id: "A1",
    user_id: users[0].user_id,
    password_hash: "hashed_password_here",
    role: users[0].role,
    last_login: "2024-11-30T12:00:00Z",
  },
  {
    admin_id: "A2",
    user_id: users[1].user_id,
    password_hash: "hashed_password_here",
    role: users[1].role,
    last_login: "2024-11-29T15:00:00Z",
  },
];