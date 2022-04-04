const request = require("supertest");
const { expect } = require("chai");

const app = require("../../src/app");
const connectionDB = require("../../src/database/connectionDB");

const ConstantMessages = require("../../src/helpers/constantMessages");

describe("LoginController suite tests", () => {
  before(() => {
    connectionDB.connectToFakeDb();
  });

  it("should login with error, secretKey invalid", async () => {
    const response = await request(app).post("/api/v1/login").send({
      userName: null,
      secretKey: null,
    });
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.PASSWORD_USER_INVALID);
  });

  it("should login with error, secretKey invalid", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const response = await request(app).post("/api/v1/login").send({
      userName: "admin",
      secretKey: null,
    });
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.PASSWORD_USER_INVALID);
  });

  it("should login with error, user not found", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const response = await request(app).post("/api/v1/login").send({
      userName: "admind",
      secretKey: "admind",
    });
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.USER_NOT_FOUND);
  });

  it("should login with error, name invalid", async () => {
    const response = await request(app).post("/api/v1/login").send({
      userName: "",
      secretKey: "admind",
    });
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.NAME_USER_INVALID);
  });

  it("should login with error, secretKey invalid", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const response = await request(app).post("/api/v1/login").send({
      userName: "admin",
      secretKey: "admind",
    });
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.PASSWORD_USER_INVALID);
  });

  it("should login success", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const response = await request(app).post("/api/v1/login").send({
      userName: "admin",
      secretKey: "admin",
    });
    expect(response.status).to.be.equal(200);
  });
});
