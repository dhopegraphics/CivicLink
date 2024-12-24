// Stores information about candidates contesting in an election.
// Attributes:

import { constituencies } from "./ConstituenciesTable";
import { elections } from "./ElectionsTable";
import { parties } from "./PartiesTable";
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
    election_id: elections[0].election_id,
    first_name: "Kwame",
    last_name: "Mensah",
    party_id: parties[0].party_id,
    position: "President",
    is_user: true, // Indicates whether the candidate is also a user
    user_id: users[0].user_id, // Links to the users table if is_user is true
    constituency_id: null, // Null for nationwide positions like President
  },
  {
    candidate_id: "C002",
    election_id: elections[0].election_id,
    first_name: "Akosua",
    last_name: "Ofori",
    party_id: parties[4].party_id,
    position: "President",
    is_user: false,
    user_id: null,
    constituency_id: null,
  },
  {
    candidate_id: "C003",
    election_id: elections[1].election_id,
    first_name: "Ama",
    last_name: "Asiedu",
    party_id: parties[3].party_id,
    position: "Member of Parliament",
    is_user: true,
    user_id: users[1].user_id,
    constituency_id: constituencies[1].constituency_id,
  },
  {
    candidate_id: "C004",
    election_id: elections[1].election_id,
    first_name: "Suzzy",
    last_name: "Kusi",
    party_id: parties[2].party_id,
    position: "Member of Parliament",
    is_user: false,
    user_id: null,
    constituency_id: constituencies[2].constituency_id,
  },
  {
    candidate_id: "C005",
    election_id: elections[1].election_id,
    first_name: "Kojo",
    last_name: "Nyarko",
    party_id: parties[0].party_id,
    position: "Member of Parliament",
    is_user: true,
    user_id: users[4].user_id,
    constituency_id: constituencies[1].constituency_id,
  },
  {
    candidate_id: "C006",
    election_id: "E002",
    first_name: "Ama",
    last_name: "Brefo",
    party_id: parties[1].party_id,
    position: "Member of Parliament",
    is_user: false,
    user_id: null,
    constituency_id: constituencies[2].constituency_id,
  },
  {
    candidate_id: "C007",
    election_id: elections[2].election_id,
    first_name: users[5].first_name,
    last_name: users[5].last_name,
    party_id: parties[1].party_id,
    position: "National Democratic Party Flag Bearer",
    is_user: true, // Indicates whether the candidate is also a user
    user_id: users[5].user_id, // Links to the users table if is_user is true
    constituency_id: null, // Null for nationwide positions like President
  },
];
