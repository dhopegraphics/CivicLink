// Roles in Ghana’s Electoral System

// Electoral Commission (EC) Officials
// Responsibilities:
// Oversee the entire election process.
// Manage voter registration.
// Organize elections (e.g., parliamentary, presidential).
// Ensure compliance with electoral laws.
// Declare official results.
// Permissions:
// P006: Create and update elections.
// P007: View and manage voter registration data.
// P008: Declare election results.
// P009: Manage candidate registrations.

// Polling Agents
// Responsibilities:
// Represent political parties or candidates at polling stations.
// Observe voting and counting processes.
// Raise objections in case of irregularities.
// Permissions:
// P010: View polling station data.
// P011: Raise disputes or flag irregularities.
// P012: Observe and verify voter identity.

// Presiding Officers
// Responsibilities:
// Supervise polling station operations.
// Ensure the voting process runs smoothly.
// Count and record votes at polling stations.
// Permissions:
// P013: Manage polling station operations.
// P014: Record vote counts at polling stations.
// P015: Submit polling station results.

// Collation Center Officers
// Responsibilities:
// Collate polling station results within a constituency or district.
// Verify and reconcile results.
// Forward results to regional or national collation centers.
// Permissions:
// P016: View and manage polling station results.
// P017: Submit collated results to higher-level centers.

// Returning Officers
// Responsibilities:
// Announce results at the constituency or regional level.
// Handle disputes related to results within their jurisdiction.
// Permissions:
// P018: Announce constituency or regional results.
// P019: Resolve disputes over constituency results.

// General Permissions to Add
// Voting Permissions

// P022: Eligibility to vote (assigned to eligible users).
// P023: Cast a vote (active during the election period).
// P024: View personal voting history (for transparency).
// Election Information Access

// P025: Access election information (read-only for users).
// P026: Access voter education materials (helps users understand the process).
// User Profile Management

// P027: Update personal profile information.
// P028: Update voter registration details (e.g., change of constituency).
// Complaint Management

// P029: File election-related complaints.
// P030: View complaint resolution status.
// Reporting and Analytics

// P031: Generate election participation reports (admin-level).
// P032: View real-time voter turnout data (admin-level).
// Security and System Integrity

// P033: Report security issues (users or admins).
// P034: Monitor system integrity (for admins responsible for the system).
// Miscellaneous

// P035: Access constituency data (users and admins).
// P036: Access party data (users and admins).

// Permissions Table
export const permissions = [
  { permission_id: "P001", permission_name: "view_user_data" },
  { permission_id: "P002", permission_name: "manage_elections" },
  { permission_id: "P003", permission_name: "audit_logs" },
  { permission_id: "P004", permission_name: "create_users" },
  { permission_id: "P005", permission_name: "view_votes" },
  { permission_id: "P006", permission_name: "organize_party_elections" }, // For party leaders
  { permission_id: "P007", permission_name: "vote_in_party_elections" }, // For party members
  { permission_id: "P006", permission_name: "create_and_update_elections" },
  { permission_id: "P007", permission_name: "view_and_manage_voter_data" },
  { permission_id: "P008", permission_name: "declare_results" },
  { permission_id: "P009", permission_name: "manage_candidate_registration" },
  { permission_id: "P010", permission_name: "view_polling_station_data" },
  { permission_id: "P011", permission_name: "raise_disputes" },
  { permission_id: "P012", permission_name: "verify_voter_identity" },
  { permission_id: "P013", permission_name: "manage_polling_operations" },
  { permission_id: "P014", permission_name: "record_vote_counts" },
  { permission_id: "P015", permission_name: "submit_polling_results" },
  { permission_id: "P016", permission_name: "manage_collation_results" },
  { permission_id: "P017", permission_name: "submit_collated_results" },
  { permission_id: "P018", permission_name: "announce_results" },
  { permission_id: "P019", permission_name: "resolve_disputes" },
  {
    permission_id: "P020",
    permission_name: "read_only_access_to_election_data",
  },
  { permission_id: "P021", permission_name: "submit_observer_reports" },
  { permission_id: "P023", permission_name: "cast_vote" },
  { permission_id: "P024", permission_name: "view_personal_voting_history" },
  { permission_id: "P025", permission_name: "access_election_information" },
  {
    permission_id: "P026",
    permission_name: "access_voter_education_materials",
  },
  { permission_id: "P027", permission_name: "update_personal_profile" },
  {
    permission_id: "P028",
    permission_name: "update_voter_registration_details",
  },
  { permission_id: "P029", permission_name: "file_complaints" },
  { permission_id: "P030", permission_name: "view_complaint_status" },
  { permission_id: "P031", permission_name: "generate_participation_reports" },
  { permission_id: "P032", permission_name: "view_real_time_voter_turnout" },
  { permission_id: "P033", permission_name: "report_security_issues" },
  { permission_id: "P034", permission_name: "monitor_system_integrity" },
  { permission_id: "P035", permission_name: "access_constituency_data" },
  { permission_id: "P036", permission_name: "access_party_data" },
];
