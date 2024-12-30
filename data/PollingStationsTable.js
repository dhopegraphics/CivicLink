// Stores information about polling stations.
// Attributes:

// station_id (PK, UUID): Unique identifier for the polling station.
// name (VARCHAR): Name of the polling station.
// location (TEXT): Address or GPS coordinates.
// election_id (FK): Reference to the related election.

// pollingStations.js
export const pollingStations = [
  {
    station_id: "PS1",
    name: "Accra High School Polling Station",
    election_id: ["EL001", "EL002"],
    constituencies_id: "CST001",
  },
  {
    station_id: "PS2",
    name: "KNUST Polling Station",
    election_id: ["EL001", "EL002"],
    constituencies_id: "CST002",
  },
];
