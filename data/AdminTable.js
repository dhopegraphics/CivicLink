// Stores information about system administrators.
// Attributes:

// admin_id (PK, UUID): Unique identifier for the admin.
// username (VARCHAR): Admin’s username.
// password_hash (TEXT): Encrypted password.
// role (ENUM): Role of the admin (Super Admin, Election Officer, etc.).
// last_login (TIMESTAMP): Last login time.

export const admins = [
  {
    admin_id: "A1",
    user_id: "1",
    password_hash: "hashed_password_here",
    role: "Election Officer",
    permissions: ["P001", "P002", "P003"],
    last_login: "2024-11-30T12:00:00Z",
  },
  {
    admin_id: "A2",
    user_id: "2",
    password_hash: "hashed_password_here",
    role: "Super Admin",
    permissions: ["P001", "P002", "P003", "P004", "P005"],
    last_login: "2024-11-29T15:00:00Z",
  },
];
