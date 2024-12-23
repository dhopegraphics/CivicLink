// Records votes cast during an election.
// Attributes:

import { users } from "./UsersTable";

// vote_id (PK, UUID): Unique identifier for the vote.
// election_id (FK): Reference to the election.
// user_id (FK): Reference to the voter.
// candidate_id (FK): Reference to the chosen candidate.
// vote_time (TIMESTAMP): The time the vote was cast.

// votes.js
export const votes = [
  {
    vote_id: "V1",
    election_id: "E1",
    user_id: users[0].user_id,
    candidate_id: "C1",
    vote_time: "2024-12-07T09:00:00Z",
  },
  {
    vote_id: "V2",
    election_id: "E1",
    user_id: users[1].user_id,
    candidate_id: "C2",
    vote_time: "2024-12-07T09:05:00Z",
  },
];
