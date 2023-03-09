import superagent from "superagent";

const baseUrl = "https://catfact.ninja";

describe("API testing. GET methods", () => {
  it("Returns a list of breeds", async () => {
    const res = await superagent.get(baseUrl + "/breeds?limit=1");
    expect(res.status).toBe(200);
  });

  it("Returns a random cat fact 150", async () => {
    const res = await superagent.get(baseUrl + "/fact?max_lenght=150");
    expect(res.status).toBe(200);
  });

  it("Get a list of cat facts limit 5", async () => {
    const res = await superagent.get(baseUrl + "/facts?limit=5&max_length=1");
    expect(res.status).toBe(200);
  });
});
