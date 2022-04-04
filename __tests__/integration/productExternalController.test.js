const request = require("supertest");
const { expect } = require("chai");

const app = require("../../src/app");
const connectionDB = require("../../src/database/connectionDB");

describe("ProductExternalController suite tests", () => {
  before(() => {
    connectionDB.connectToFakeDb();
  });

  it("should return statuscode 200", async () => {
    const response = await request(app).get("/api/v1/product-external").send();
    expect(response.status).to.be.equal(200);
  });
});
