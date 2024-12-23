// src/services/dbUtils.js
import users from "@/data/UsersTable";
import elections from "@/data/ElectionsTable";
import candidates from "@/data/CandidatesTable";

export const getCandidatesByElection = (electionId) => {
  return candidates.filter((candidate) => candidate.election_id === electionId);
};

export const getUserById = (userId) => {
  return users.find((user) => user.user_id === userId);
};

export const getElections = () => {
  return elections;
};
