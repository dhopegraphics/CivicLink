import { users } from "./UsersTable";

// Party Members Table
export const party_members = [
  {
    member_id: "PM001",
    party_id: parties[0].party_id,
    first_name: users[4].first_name,
    last_name: users[4].last_name,
    is_user: true, // Indicates if the member is also a user
    user_id: users[4].user_id, // Nullable, links to the users table if applicable
    position: "Organizer",
    joined_date: "2020-05-10",
  },
  {
    member_id: "PM002",
    party_id: parties[1].party_id,
    first_name: "Elizabeth ",
    last_name: " Asante",
    is_user: false,
    user_id: null,
    position: "Treasurer",
    joined_date: "2018-03-15",
  },
];