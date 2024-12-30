// export const calculatePartyVotePercentages = ({
//   votesCasts,
//   candidates,
//   parties,
// }) => {
//   if (!votesCasts || !candidates || !parties) return [];

//   // Step 1: Count votes for each candidate
//   const candidateVotes = votesCasts.reduce((acc, vote) => {
//     if (vote.candidate_id) {
//       acc[vote.candidate_id] = (acc[vote.candidate_id] || 0) + 1;
//     }
//     return acc;
//   }, {});

//   // Step 2: Group votes by party
//   const partyVotes = candidates.reduce((acc, candidate) => {
//     const { party_id, candidate_id } = candidate;
//     if (party_id && candidate_id) {
//       acc[party_id] =
//         (acc[party_id] || 0) + (candidateVotes[candidate_id] || 0);
//     }
//     return acc;
//   }, {});

//   // Total votes
//   const totalVotes = Object.values(partyVotes).reduce(
//     (sum, votes) => sum + votes,
//     0
//   );

//   // Step 3: Calculate percentages and map to party details
//   const results = parties.map((party) => {
//     const votes = partyVotes[party.party_id] || 0;
//     const percentage = totalVotes > 0 ? (votes / totalVotes) * 100 : 0;
//     return {
//       partyName: party.name || "Unknown",
//       logoUri: party.logoUri ? { uri: party.logoUri } : null,
//       color: party.color || "#000", // Default to black if color is missing
//       percentage: parseFloat(percentage.toFixed(2)), // Use float for calculations
//     };
//   });

//   return results;
// };
