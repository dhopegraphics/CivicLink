// Function to calculate the vote percentage and retrieve party details for candidates in a specific election
export const getCandidateStatsByElection = (
  electionId,
  candidatesData,
  votesData,
  partiesData
) => {
  // Step 1: Filter candidates for the specified election
  const electionCandidates = candidatesData.filter(
    (candidate) => candidate.election_id === electionId
  );

  if (!electionCandidates.length) {
    return `No candidates found for election ID: ${electionId}`;
  }

  // Step 2: Filter votes for the specified election
  const electionVotes = votesData.filter(
    (vote) => vote.election_id === electionId
  );

  if (!electionVotes.length) {
    return `No votes found for election ID: ${electionId}`;
  }

  // Step 3: Count votes for each candidate
  const totalVotes = electionVotes.length;

  const candidateVoteCounts = electionCandidates.map((candidate) => {
    const votes = electionVotes.filter(
      (vote) => vote.candidate_id === candidate.candidate_id
    ).length;

    const percentage = ((votes / totalVotes) * 100).toFixed(2);

    // Step 4: Get party details
    const party = partiesData.find((p) => p.party_id === candidate.party_id);

    return {
      candidateId: candidate.candidate_id,
      name: `${candidate.first_name} ${candidate.last_name}`,
      votes,
      percentage: `${percentage}%`,
      party: party
        ? {
            name: party.name,
            color: party.color,
            logoUri: party.logoUri,
          }
        : null,
    };
  });

  return {
    totalVotes,
    candidateVoteCounts,
  };
};
