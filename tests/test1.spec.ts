import superagent from "superagent";
import { EXPECTED_OBJ_GET_BREEDS } from "../objects/breedsObj";
import { EXPECTED_OBJ_GET_FACTS } from "../objects/factsObj";
import { baseUrl, breeds, fact, facts  } from "../constans/url";

describe("API testing. GET methods", () => {
  it("Returns a list of breeds", async () => {
    const res = await superagent.get(baseUrl + breeds);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_BREEDS)
  });

  it("Returns a list of breeds page 1", async () => {
    const res = await superagent.get(baseUrl + breeds).query({page: 1});
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_BREEDS);
  });

  it("Returns a list of breeds limit 1", async () => {
    const res = await superagent.get(baseUrl + breeds).query({limit: 1});
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_FACTS);
  });

  it("Returns a random cat fact", async () => {
    const res = await superagent.get(baseUrl + fact);
    expect(res.status).toBe(200);
  });

  it("Returns a random cat fact max lenght 150", async () => {
    const res = await superagent
      .get(baseUrl + fact)
      .query({ max_lenght: 150});
    expect(res.status).toBe(200);
  });

  it("Get a list of cat facts", async () => {
    const res = await superagent.get(baseUrl + facts);
    expect(res.status).toBe(200);
  });

  it("Get a list of cat facts limit 5", async () => {
    const res = await superagent
      .get(baseUrl + facts)
      .query({ max_length: 5});
    expect(res.status).toBe(200);
  });
});
