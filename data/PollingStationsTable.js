// Stores information about polling stations.
// Attributes:

import { constituencies } from "./ConstituenciesTable";
import { elections } from "./ElectionsTable";

// station_id (PK, UUID): Unique identifier for the polling station.
// name (VARCHAR): Name of the polling station.
// location (TEXT): Address or GPS coordinates.
// election_id (FK): Reference to the related election.

// pollingStations.js
export const pollingStations = [
  {
    station_id: "PS1",
    name: "Accra High School Polling Station",
    election_id: [elections[0].election_id, elections[1].election_id],
    constituencies_id: constituencies[0].constituency_id,
  },
  {
    station_id: "PS2",
    name: "KNUST Polling Station",
    election_id: [elections[0].election_id, elections[1].election_id],
    constituencies_id: constituencies[0].constituency_id,
  },
];
