// Tracks the eligibility status of each voter for different elections.
// Attributes:

import { users } from "./UsersTable";

// eligibility_id (PK, UUID): Unique identifier.
// user_id (FK): Reference to the user.
// election_id (FK): Reference to the election.
// is_eligible (BOOLEAN): Whether the user is eligible to vote in this election.
// reason (TEXT): Reason for ineligibility (e.g., "Underage", "Not Registered").

// userEligibility.js
export const userEligibility = [
  {
    eligibility_id: "UE1",
    user_id: users[0].user_id,
    is_eligible: true,
    reason: null,
  },
  {
    eligibility_id: "UE2",
    user_id: users[1].user_id,
    is_eligible: true,
    reason: null,
  },
];
