// Stores information about elections (e.g., presidential, parliamentary, local).
// Attributes:

import { admins } from "./AdminTable";
import { party_members } from "./PartyMembersTable";

// election_id (PK, UUID): Unique identifier for the election.
// election_name (VARCHAR): Name of the election (e.g., "Presidential Election 2024").
// start_date (DATE): Start date of the election.
// end_date (DATE): End date of the election.
// status (ENUM): Status of the election (Upcoming, Ongoing, Completed).

// elections.js
export const elections = [
  {
    election_id: "EL001",
    election_type: "general", // "general" or "inclusive"
    election_name: "2024 Presidential Election",
    organizer_id: admins[0].admin_id, // User who created the election
    start_date: "2024-12-01T08:00:00Z",
    end_date: "2024-12-15T17:00:00Z",
    participationRestriction: null,
  },
  {
    election_id: "EL002",
    election_type: "general", // "general" or "inclusive"
    election_name: "2024 Parliamentary Election",
    organizer_id: admins[0].admin_id, // User who created the election
    start_date: "2024-12-01T08:00:00Z",
    end_date: "2024-12-15T17:00:00Z",
    participationRestriction: null,
  },
  {
    election_id: "EL003",
    election_type: "inclusive",
    election_name: "National Democratic Party Flag Bearer Election",
    organizer_id: "U002", // Party leader
    start_date: "2024-11-01T08:00:00Z",
    end_date: "2024-11-05T17:00:00Z",
    participationRestriction: party_members,
  },
];
