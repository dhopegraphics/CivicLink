export const getCandidatesByElection = (electionId) => {
  return candidates.filter((candidate) => candidate.election_id === electionId);
};

export const getUserById = (userId) => {
  return users.find((user) => user.user_id === userId);
};

export const isEligibleToVote = (userId, registered_voters) => {
  // Check if the user exists in the registered_voters table
  const voter = registered_voters.find((voter) => voter.user_id === userId);
  return !!voter; // Returns true if the user is found, false otherwise
};
