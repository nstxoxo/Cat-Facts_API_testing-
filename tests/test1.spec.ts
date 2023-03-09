import superagent from "superagent";

describe("API testing. GET method", () => {
  it("Test GET user 2", async () => {
    const res = await superagent.get("https://catfact.ninja/fact");
    expect(res.status).toBe(200);
});
});