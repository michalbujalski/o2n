import { getUnique, parseCompanies } from "@/utils";

describe("utils", () => {
  it("reutrns only unique values", () => {
    const arr = ["a", "b", "a", "c", "a"];

    expect(getUnique(arr)).toHaveLength(3);
  });
  it("parses unique companies from users", () => {
    const arr = [
      { company: "a" },
      { company: "b" },
      { company: "c" },
      { company: "b" },
      { company: "a" }
    ];

    expect(parseCompanies(arr)).toHaveLength(3);
    expect(parseCompanies(arr)).toContain("a");
    expect(parseCompanies(arr)).toContain("b");
    expect(parseCompanies(arr)).toContain("c");
  });
});
