// Stores information about candidates contesting in an election.
// Attributes:

import { constituencies } from "./ConstituenciesTable";
import { users } from "./UsersTable";

// candidate_id (PK, UUID): Unique identifier for the candidate.
// election_id (FK): Reference to the related election.
// first_name (VARCHAR): Candidate’s first name.
// last_name (VARCHAR): Candidate’s last name.
// party_name (VARCHAR): Political party affiliation.
// position (VARCHAR): Position contested for (e.g., President, MP).
// bio (TEXT): A brief bio of the candidate.

// candidates.js
export const candidates = [
  {
    candidate_id: "C001",
    election_id: "E001",
    first_name: users[0].first_name,
    last_name: users[0].last_name,
    party_id: "P001",
    position: "President",
    is_user: true, // Indicates whether the candidate is also a user
    user_id: users[0].user_id, // Links to the users table if is_user is true
    constituency_id: null, // Null for nationwide positions like President
  },
  {
    candidate_id: "C002",
    election_id: "E001",
    first_name: "Akosua",
    last_name: "Ofori",
    party_id: "P002",
    position: "President",
    is_user: false,
    user_id: null,
    constituency_id: null,
  },
  {
    candidate_id: "C003",
    election_id: "E002",
    first_name: users[1].first_name,
    last_name: users[1].first_name,
    party_id: "P001",
    position: "Member of Parliament",
    is_user: true,
    user_id: users[1].user_id,
    constituency_id: constituencies[1].constituency_id,
  },
  {
    candidate_id: "C004",
    election_id: "E002",
    first_name: "Ama",
    last_name: "Kusi",
    party_id: "P003",
    position: "Member of Parliament",
    is_user: false,
    user_id: null,
    constituency_id: constituencies[2].constituency_id,
  },
  {
    candidate_id: "C005",
    election_id: "E002",
    first_name: users[2].first_name,
    last_name: users[2].first_name,
    party_id: "P001",
    position: "Member of Parliament",
    is_user: true,
    user_id: users[2].user_id,
    constituency_id: constituencies[1].constituency_id,
  },
  {
    candidate_id: "C006",
    election_id: "E002",
    first_name: "Ama",
    last_name: "Kusi",
    party_id: "P003",
    position: "Member of Parliament",
    is_user: false,
    user_id: null,
    constituency_id: constituencies[2].constituency_id,
  },
];
