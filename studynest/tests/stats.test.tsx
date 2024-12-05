// calculateThreshold.test.ts
import { calculateThreshold } from "../src/components/Stats/CalculateThreshold";

import { describe, it, expect } from "vitest";

describe("calculateThreshold", () => {
  it("should return an array of 7 elements", () => {
    const dayNumber = 5;
    const streak = 3;
    const result = calculateThreshold(dayNumber, streak);
    expect(result).toHaveLength(7);
  });

  it('should return "active" for the correct indices based on dayNumber and streak', () => {
    const dayNumber = 5;
    const streak = 3;
    const result = calculateThreshold(dayNumber, streak);
    expect(result).toEqual([
      "inactive",
      "inactive",
      "active",
      "active",
      "active",
      "inactive",
      "inactive",
    ]);
  });

  it("should handle dayNumber equal to streak", () => {
    const result = calculateThreshold(3, 3);
    expect(result).toEqual([
      "active",
      "active",
      "active",
      "inactive",
      "inactive",
      "inactive",
      "inactive",
    ]);
  });

  it('should return all "inactive" when dayNumber is less than streak', () => {
    const result = calculateThreshold(2, 5);
    expect(result).toEqual([
      "active",
      "active",
      "inactive",
      "inactive",
      "inactive",
      "inactive",
      "inactive",
    ]);
  });

  it('should return all "inactive" when dayNumber is 0', () => {
    const result = calculateThreshold(0, 3);
    expect(result).toEqual([
      "inactive",
      "inactive",
      "inactive",
      "inactive",
      "inactive",
      "inactive",
      "inactive",
    ]);
  });

  it('should return all "active" if dayNumber equals 7 and streak is 7', () => {
    const result = calculateThreshold(7, 7);
    expect(result).toEqual([
      "active",
      "active",
      "active",
      "active",
      "active",
      "active",
      "active",
    ]);
  });

  it("should handle edge cases where dayNumber is greater than 7", () => {
    const result = calculateThreshold(8, 4);
    expect(result).toEqual([
      "inactive",
      "inactive",
      "inactive",
      "inactive",
      "active",
      "active",
      "active",
    ]);
  });
});
