// Helper function to calculate the time difference
export const getTimeDifference = (targetDate) => {
  const currentDate = new Date();
  const diffTime = new Date(targetDate) - currentDate;
  if (diffTime <= 0) return null; // If the time is up, return null

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));

  return { days: diffDays, hours: diffHours, minutes: diffMinutes };
};
