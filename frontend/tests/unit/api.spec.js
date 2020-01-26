import * as api from "@/api";

describe("api", () => {
  it("parse url from params not empty array", () => {
    const arr = ["aaa", "bbb", "ccc"];
    expect(api.parseUrl(arr)).toBe("?aaa&bbb&ccc");
  });
  it("parse url from params empty array", () => {
    const arr = [];
    expect(api.parseUrl(arr)).toBe("");
  });
  it("parse query params", () => {
    const query = {
      selectedCompanies: ["a", "b"],
      minAge: 20,
      maxAge: 40
    };
    const result = api.parseParams(query);
    expect(result).toHaveLength(4);
    expect(result).toContain("age_gte=20");
    expect(result).toContain("age_lte=40");
    expect(result).toContain("company=a");
    expect(result).toContain("company=b");
  });
  it("check if query is valid when params are valid", () => {
    const query = {
      minAge: 20,
      maxAge: 30,
      selectedCompanies: []
    };
    const result = api.hasValidQuery(query);
    expect(result).toBeTruthy();
  });
  it("check if query is valid when params are not valid", () => {
    const query = {
      minAge: null,
      maxAge: null,
      selectedCompanies: []
    };
    const result = api.hasValidQuery(query);
    expect(result).toBeFalsy();
  });
});
