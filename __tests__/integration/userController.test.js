const request = require("supertest");
const { expect } = require("chai");

const app = require("../../src/app");
const connectionDB = require("../../src/database/connectionDB");

describe("UserController suite tests", () => {
  before(() => {
    connectionDB.connectToFakeDb();
  });

  it("should create new User with error, name invalid", async () => {
    const response = await request(app).post("/api/v1/user").send({
      userName: null,
      secretKey: null,
    });
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal("Nome do usuário inválido.");
  });

  it("should create new User with error, secretKey invalid", async () => {
    const response = await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: null,
    });
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal("Senha do usuário inválida.");
  });

  it("should create new User with success", async () => {
    const response = await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    expect(response.status).to.be.equal(200);
  });

  it("should create new User same name", async () => {
    const response = await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    expect(response.status).to.be.equal(400);
  });
});
