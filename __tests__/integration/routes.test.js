const request = require("supertest");
const { expect } = require("chai");

const app = require("../../src/app");

describe("routes suite tests", () => {
  it("should return statuscode 200, server up", async () => {
    const response = await request(app).get("/").send();
    expect(response.status).to.be.equal(200);
  });
});
