import { slides } from "../Content";

describe("Slides", () => {
  it("should load slides array", () => {
    expect(slides).toBeDefined();
    expect(Array.isArray(slides)).toBeTruthy();
    expect(slides.length).toBeGreaterThan(0);
  });
});
