// Stores information about elections (e.g., presidential, parliamentary, local).
// Attributes:

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
    organizer_id: "A1", // User who created the election
    start_date: "2025-01-02T10:45:00Z", // Upcoming election (January 2025)
    end_date: "2025-01-03T17:00:00Z",
    participationRestriction: null,
  },
  {
    election_id: "EL002",
    election_type: "general", // "general" or "inclusive"
    election_name: "2024 Parliamentary Election",
    organizer_id: "A1", // User who created the election
    start_date: "2025-01-02T11:05:00Z", // Upcoming election (January 2025)
    end_date: "2025-01-25T17:00:00Z",
    participationRestriction: null,
  },
  {
    election_id: "EL003",
    election_type: "inclusive", // "general" or "inclusive"
    election_name: "National Democratic Party Flag Bearer Election",
    organizer_id: "U002", // Party leader
    start_date: "2025-01-15T08:00:00Z", // Upcoming election (January 2025)
    end_date: "2025-01-30T17:00:00Z",
    participationRestriction: "party members",
  },
];
