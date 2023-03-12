import superagent from "superagent";
import { EXPECTED_OBJ_GET_BREEDS } from "../objects/breedsObj";
import { EXPECTED_OBJ_GET_FACTS } from "../objects/factsObj";
import { BASE_URL, BREEDS, FACT, FACTS } from "../constans/url";

describe("API testing. GET methods", () => {
  it("Returns a list of breeds", async () => {
    const res = await superagent.get(BASE_URL + BREEDS);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_BREEDS)
  });

  it("Returns a list of breeds page 1", async () => {
    const res = await superagent.get(BASE_URL + BREEDS).query({page: 1});
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_BREEDS);
  });

  it.only("Returns a list of breeds limit 1", async () => {
    const res = await superagent.get(BASE_URL + BREEDS).query({limit: 1});
    expect(res.status).toBe(200);
    // expect(res.body). (EXPECTED_OBJ_GET_BREEDS);
  });

  it("Returns a random cat fact", async () => {
    const res = await superagent.get(BASE_URL + FACT);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_FACTS);
  });

  it("Returns a random cat fact max lenght 150", async () => {
    const res = await superagent
      .get(BASE_URL + FACT)
      .query({ max_lenght: 150});
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_FACTS);
  });

  it("Get a list of cat facts", async () => {
    const res = await superagent.get(BASE_URL + FACTS);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_FACTS);
  });

  it("Get a list of cat facts limit 5", async () => {
    const res = await superagent
      .get(BASE_URL + FACTS)
      .query({ max_length: 5});
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_FACTS);
  });
});
