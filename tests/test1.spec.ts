import superagent, { lock } from "superagent";
import { EXPECTED_OBJ_GET_BREEDS } from "../objects/breedsObj";
import { EXPECTED_OBJ_GET_FACTS } from "../objects/factsObj";
import { BASE_URL, BREEDS, FACT, FACTS } from "../constans/url";
import { EXPECTED_OBJ_GET_RANDOM_FACTS } from "../objects/randomFact";

describe("API testing. GET methods", () => {
  //ok
  it("Returns a list of breeds", async () => {
    const res = await superagent.get(BASE_URL + BREEDS);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_BREEDS);
  });

  // ok
  it("Returns a list of breeds page 1", async () => {
    const res = await superagent.get(BASE_URL + BREEDS).query({ page: 1 });
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_BREEDS);
  });

  it("Returns a list of breeds limit 1", async () => {
    const res = await superagent.get(BASE_URL + BREEDS).query({ limit: 1 });
    expect(res.status).toBe(200);
    // expect(res.body). (EXPECTED_OBJ_GET_BREEDS);
  });

  it("Returns a random cat fact", async () => {
    const res = await superagent.get(BASE_URL + FACT);
    expect(res.status).toBe(200);
    expect(res.body).not.toEqual(0);
    console.log(res.body);

    // expect(res.body).toEqual(EXPECTED_OBJ_GET_RANDOM_FACTS);
  });

  // ok
  it("Returns a random cat fact max lenght 150", async () => {
    const res = await superagent
      .get(BASE_URL + FACT)
      .query({ max_lenght: 150 });
    expect(res.status).toBe(200);
    console.log(res.body.length);
    expect(res.body.length).toBeLessThanOrEqual(150);
  });

  it("Get a list of cat facts", async () => {
    const res = await superagent.get(BASE_URL + FACTS);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(EXPECTED_OBJ_GET_FACTS);
  });

  it.only("Get a list of cat facts limit 50", async () => {
    const res = await superagent
      .get(BASE_URL + FACTS)
      .query({ max_length: 50 });
    let facts = EXPECTED_OBJ_GET_RANDOM_FACTS.data;
    let randomFacts = res.body.data;
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeLessThanOrEqual(50);

    // const result = facts.map((r1: { fact: string, lenght: number}) => {
    //   if (randomFacts.find((r2: { fact: string }) => r1.fact === r2.fact)) {
    //   }
    //   return r1;
    // });
    // console.log(result);
    expect(res.body.data).toMatchObject(EXPECTED_OBJ_GET_RANDOM_FACTS.data);
  });
});
