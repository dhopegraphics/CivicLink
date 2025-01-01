// Records votes cast during an election.
// Attributes:

// vote_id (PK, UUID): Unique identifier for the vote.
// election_id (FK): Reference to the election.
// user_id (FK): Reference to the voter.
// candidate_id (FK): Reference to the chosen candidate.
// vote_time (TIMESTAMP): The time the vote was cast.

// votes.js
export const votesCasts = [
  {
    vote_id: "V1",
    election_id: "EL001",
    user_id: "1",
    candidate_id: "C001",
    vote_time: "2024-12-07T09:00:00Z",
  },
  {
    vote_id: "V2",
    election_id: "EL001",
    user_id: "2",
    candidate_id: "C002",
    vote_time: "2024-12-07T09:05:00Z",
  },
  {
    vote_id: "V3",
    election_id: "EL002",
    user_id: "2",
    candidate_id: "C004",
    vote_time: "2024-12-07T09:10:00Z",
  },
  {
    vote_id: "V4",
    election_id: "EL002",
    user_id: "1",
    candidate_id: "C003",
    vote_time: "2024-12-07T09:15:00Z",
  },
  {
    vote_id: "V5",
    election_id: "EL002",
    user_id: "3",
    candidate_id: "C005",
    vote_time: "2024-12-07T09:20:00Z",
  },
  {
    vote_id: "V6",
    election_id: "EL002",
    user_id: "4",
    candidate_id: "C006",
    vote_time: "2024-12-07T09:25:00Z",
  },
  {
    vote_id: "V7",
    election_id: "EL001",
    user_id: "5",
    candidate_id: "C002",
    vote_time: "2024-12-07T09:30:00Z",
  },
  {
    vote_id: "V8",
    election_id: "EL001",
    user_id: "6",
    candidate_id: "C002",
    vote_time: "2024-12-07T09:35:00Z",
  },
  {
    vote_id: "V9",
    election_id: "EL001",
    user_id: "7",
    candidate_id: "C001",
    vote_time: "2024-12-07T09:40:00Z",
  },
  {
    vote_id: "V10",
    election_id: "EL001",
    user_id: "3",
    candidate_id: "C008",
    vote_time: "2024-12-07T09:20:00Z",
  },
  {
    vote_id: "V11",
    election_id: "EL001",
    user_id: "4",
    candidate_id: "C008",
    vote_time: "2024-12-07T09:25:00Z",
  },
  {
    vote_id: "V12",
    election_id: "EL001",
    user_id: "6",
    candidate_id: "C008",
    vote_time: "2024-12-07T09:35:00Z",
  },
  {
    vote_id: "V13",
    election_id: "EL001",
    user_id: "8",
    candidate_id: "C008",
    vote_time: "2024-12-07T09:40:00Z",
  },
  {
    vote_id: "V14",
    election_id: "EL001",
    user_id: "9",
    candidate_id: "C008",
    vote_time: "2024-12-07T09:40:00Z",
  },
];
