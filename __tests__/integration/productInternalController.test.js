const request = require("supertest");
const { expect } = require("chai");

const app = require("../../src/app");
const connectionDB = require("../../src/database/connectionDB");

const ConstantMessages = require("../../src/helpers/constantMessages");

describe("ProductInternalController suite tests", () => {
  before(() => {
    connectionDB.connectToFakeDb();
  });

  it("should create new Product with error, token not found", async () => {
    const response = await request(app)
      .post("/api/v1/product-internal")
      .send({});
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.TOKEN_NOT_FOUND);
  });

  it("should create new Product with error, token invalid", async () => {
    const response = await request(app)
      .post("/api/v1/product-internal")
      .set("token", "1.0.0")
      .send({});
    const error = JSON.parse(response.error.text);
    expect(response.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.TOKEN_INVALID);
  });

  it("should create new Product with error, name invalid", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseLogin = await request(app).post("/api/v1/login").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseProductInternal = await request(app)
      .post("/api/v1/product-internal")
      .set("token", responseLogin.body.token)
      .send({});

    const error = JSON.parse(responseProductInternal.error.text);
    expect(responseProductInternal.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.NAME_PRODUCT_INVALID);
  });

  it("should create new Product with error, imagens invalid", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseLogin = await request(app).post("/api/v1/login").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseProductInternal = await request(app)
      .post("/api/v1/product-internal")
      .set("token", responseLogin.body.token)
      .send({
        productName: "Teste produto",
      });

    const error = JSON.parse(responseProductInternal.error.text);
    expect(responseProductInternal.status).to.be.equal(400);
    expect(error.message).to.be.equal(ConstantMessages.IMAGE_PRODUCT_INVALID);
  });

  it("should create new Product with error, currencies invalid", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseLogin = await request(app).post("/api/v1/login").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseProductInternal = await request(app)
      .post("/api/v1/product-internal")
      .set("token", responseLogin.body.token)
      .send({
        productName: "Teste produto",
        productListImages: ["Teste imagem produto"],
      });

    const error = JSON.parse(responseProductInternal.error.text);
    expect(responseProductInternal.status).to.be.equal(400);
    expect(error.message).to.be.equal(
      ConstantMessages.CURRENCIES_PRODUCT_INVALID
    );
  });

  it("should create new Product with success", async () => {
    await request(app).post("/api/v1/user").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseLogin = await request(app).post("/api/v1/login").send({
      userName: "admin",
      secretKey: "admin",
    });

    const responseProductInternal = await request(app)
      .post("/api/v1/product-internal")
      .set("token", responseLogin.body.token)
      .send({
        productName: "Teste produto",
        productListImages: ["Teste imagem produto"],
        productCurrenciesValues: ["Teste moeda produto"],
      });

    expect(responseProductInternal.status).to.be.equal(200);
  });
});
