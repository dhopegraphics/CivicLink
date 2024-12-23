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
    election_id: "E1",
    election_name: "Presidential Election 2024",
    start_date: "2024-12-07",
    end_date: "2024-12-08",
    status: "Upcoming",
  },
  {
    election_id: "E2",
    election_name: "Parliamentary Election 2024",
    start_date: "2024-12-07",
    end_date: "2024-12-08",
    status: "Upcoming",
  },
];
