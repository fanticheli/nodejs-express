const request = require("supertest");
const { expect } = require("chai");
const healthCheckController = require("../../src/controller/healthCheckController");

const app = require("../../src/app");

describe("healthCheckController suite tests", () => {
  it("should return statuscode 200, server up", async () => {
    const response = await request(app).get("/api/v1/healthCheck").send();
    expect(response.status).to.be.equal(200);
  });
});
