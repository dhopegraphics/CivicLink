// Tracks the eligibility status of each voter for different elections.
// Attributes:

import { constituencies } from "./ConstituenciesTable";
import { users } from "./UsersTable";

// eligibility_id (PK, UUID): Unique identifier.
// user_id (FK): Reference to the user.
// election_id (FK): Reference to the election.
// is_eligible (BOOLEAN): Whether the user is eligible to vote in this election.
// reason (TEXT): Reason for ineligibility (e.g., "Underage", "Not Registered").

// registered_voters.js
export const registered_voters = [
  {
    voter_id: "RV001",
    national_id: "GHA12345678", // Unique National ID
    first_name: "Kwame",
    last_name: "Mensah",
    date_of_birth: "1992-03-15",
    gender: "Male",
    constituency_id: constituencies[0].constituency_id, // Links to constituencies table
    is_user: true, // Indicates if the voter is also a user
    user_id: users[0].user_id, // Links to users table if applicable
    registration_date: "2024-01-10T08:00:00Z",
  },
  {
    voter_id: "RV002",
    national_id: "GHA87654321",
    first_name: "Ama",
    last_name: "Asiedu",
    date_of_birth: "1987-07-10",
    gender: "Female",
    constituency_id: constituencies[0].constituency_id, // Links to constituencies table
    is_user: true,
    user_id: users[1].user_id,
    registration_date: "2024-01-15T09:30:00Z",
  },
  {
    voter_id: "RV003",
    national_id: "GHA34567890",
    first_name: "Kojo",
    last_name: "Appiah",
    date_of_birth: "1975-04-20",
    gender: "Male",
    constituency_id: constituencies[1].constituency_id,
    is_user: false,
    user_id: null,
    registration_date: "2024-01-12T10:45:00Z",
  },
];
