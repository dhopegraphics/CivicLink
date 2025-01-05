export const parliamentaryCandidates = (candidates) => {
  return candidates
    .filter((candidate) => candidate.position === "Member of Parliament")
    .map((candidate) => ({
      ...candidate,
      full_name: `${candidate.first_name} ${candidate.last_name}`,
    }));
};
