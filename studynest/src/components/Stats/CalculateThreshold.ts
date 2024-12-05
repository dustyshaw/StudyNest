export function calculateThreshold(
  dayNumber: number,
  streak: number
): string[] {
  const threshold = dayNumber - streak;

  const newStreakDots = Array.from({ length: 7 }, (_, i) =>
    i >= threshold && i < dayNumber ? "active" : "inactive"
  );

  return newStreakDots;
}
