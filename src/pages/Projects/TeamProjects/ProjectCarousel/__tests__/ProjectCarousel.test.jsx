import { it, describe, expect } from "vitest";

function getNumVisibleSlides(slides, width) {
  switch (true) {
    case width <= 1080:
      return 1;
    case width <= 1440:
      return 2;
    default:
      return Math.min(slides.length, 3);
  }
}

describe("getNumVisibleSlides", () => {
  it("returns 1 when width is less than or equal to 1080", () => {
    const result = getNumVisibleSlides([], 1080);
    expect(result).toBe(1);
  });

  it("returns 2 when width is less than or equal to 1440", () => {
    const result = getNumVisibleSlides([], 1440);
    expect(result).toBe(2);
  });

  it("returns the minimum of the slide length and 3 when width is greater than 1440", () => {
    const slides = [1, 2, 3, 4, 5];
    const result = getNumVisibleSlides(slides, 1920);
    expect(result).toBe(3);
  });

  it("returns the slide length when slide length is less than 3 and width is greater than 1440", () => {
    const slides = [1, 2];
    const result = getNumVisibleSlides(slides, 1920);
    expect(result).toBe(slides.length);
  });
});
