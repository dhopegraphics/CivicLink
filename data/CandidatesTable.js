// Stores information about candidates contesting in an election.
// Attributes:

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
    election_id: "EL001",
    first_name: "Kwame",
    last_name: "Mensah",
    party_id: "P001",
    position: "President",
    is_user: true, // Indicates whether the candidate is also a user
    user_id: "1", // Links to the users table if is_user is true
    constituency_id: null, // Null for nationwide positions like President
  },
  {
    candidate_id: "C002",
    election_id: "EL001",
    first_name: "Akosua",
    last_name: "Ofori",
    party_id: "P005",
    position: "President",
    is_user: false,
    user_id: null,
    constituency_id: null,
  },
  {
    candidate_id: "C003",
    election_id: "EL002",
    first_name: "Ama",
    last_name: "Asiedu",
    party_id: "P004",
    position: "Member of Parliament",
    is_user: true,
    user_id: "2",
    constituency_id: "CST002",
  },
  {
    candidate_id: "C004",
    election_id: "EL002",
    first_name: "Suzzy",
    last_name: "Kusi",
    party_id: "P003",
    position: "Member of Parliament",
    is_user: false,
    user_id: null,
    constituency_id: "CST003",
  },
  {
    candidate_id: "C005",
    election_id: "EL002",
    first_name: "Kojo",
    last_name: "Nyarko",
    party_id: "P001",
    position: "Member of Parliament",
    is_user: true,
    user_id: "5",
    constituency_id: "CST002",
  },
  {
    candidate_id: "C006",
    election_id: "E002",
    first_name: "Ama",
    last_name: "Brefo",
    party_id: "P002",
    position: "Member of Parliament",
    is_user: false,
    user_id: null,
    constituency_id: "CST003",
  },
  {
    candidate_id: "C007",
    election_id: "EL003",
    first_name: "Akua",
    last_name: "Frempong",
    party_id: "P002",
    position: "National Democratic Party Flag Bearer",
    is_user: true, // Indicates whether the candidate is also a user
    user_id: "8", // Links to the users table if is_user is true
    constituency_id: null, // Null for nationwide positions like President
  },
];
