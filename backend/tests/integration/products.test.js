import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app.js';
import sinon from 'sinon';
import productModel from '../../src/models/product.model.js';
import { allProductsMock, newProductMock, productMock, updatedProductMock } from '../mocks/products.mock.js';

chai.use(chaiHttp);


describe('/products', function () { 
  beforeEach(function () { sinon.restore(); });
  
  const PATH = '/products';

  it('returns status 200 and an array of products', async function () {
    sinon.stub(productModel, 'getAll').resolves(allProductsMock);
    const response = await chai.request(app).get(PATH);

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('array');
  });

  it('returns status 200 and a product', async function () {
    sinon.stub(productModel, 'getByCode').resolves([productMock]);
    const response = await chai.request(app).get(`${PATH}/P001`);

    expect(response).to.have.status(200);
    expect(response.body[0]).to.deep.equal(productMock);
  });

  it('returns status 201 and a new product created', async function () {
    sinon.stub(productModel, 'create').resolves([{ insertId: 4 }]);
    sinon.stub(productModel, 'getByCode').resolves(newProductMock);

    const body = {
      name: 'Product 4',
      code: 'P004',
      description: 'Description 4',
      price: 49.99,
    };

    const response = await chai.request(app).post(PATH).send(body);

    expect(response).to.have.status(201);
    expect(response.body).to.deep.equal(newProductMock);
  });

  it('returns status 200 and a product updated', async function () {
    sinon.stub(productModel, 'getByCode').resolves(updatedProductMock);
    sinon.stub(productModel, 'update').resolves(updatedProductMock);

    const body = {
      name: 'Product 1',
      description: 'Description 1',
      price: 9.99,
    };

    const response = await chai.request(app).patch(`${PATH}/P001`).send(body);

    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal(updatedProductMock);
  });
  
  it('returns status 204 and no content', async function () {
    sinon.stub(productModel, 'getByCode').resolves(productMock);
    sinon.stub(productModel, 'exclude').resolves();

    const response = await chai.request(app).delete(`${PATH}/P001`);

    expect(response).to.have.status(204);
    expect(response.body).to.be.empty;
  });

  it('returns status 404 and a message when product not found', async function () {
    sinon.stub(productModel, 'getByCode').resolves(undefined);

    const response = await chai.request(app).get(`${PATH}/P091`);

    expect(response).to.have.status(404);
    expect(response.body.message).to.equal('Product not found');
  });

  it('return status 422 and a message when trying to create a product without a required field', async function () {
    const body = {
      code: 'P004',
      description: 'Description 4',
      price: 49.99,
    };

    const response = await chai.request(app).post(PATH).send(body);

    expect(response).to.have.status(422);
    expect(response.body).to.deep.equal('"name" is required');
  });

  it('return status 422 and a message when trying to update a product without a required field', async function () {
    const body = {
      name: 'Product 1',
      price: 49.99,
    };

    const response = await chai.request(app).patch(`${PATH}/P001`).send(body);
    expect(response).to.have.status(422);
    expect(response.body).to.deep.equal('"description" is required');
  });

  it('return status 404 and a message when trying to update a product that does not exist', async function () {
    sinon.stub(productModel, 'getByCode').resolves(undefined);

    const body = {
      name: 'Product 1',
      description: 'Description 1',
      price: 9.99,
    };

    const response = await chai.request(app).patch(`${PATH}/P091`).send(body);
    expect(response).to.have.status(404);
    expect(response.body.message).to.equal('Product not found');
  });
  
  it('return status 404 and a message when trying to delete a product that does not exist', async function () {
    sinon.stub(productModel, 'getByCode').resolves(undefined);

    const response = await chai.request(app).delete(`${PATH}/P091`);
    expect(response).to.have.status(404);
    expect(response.body.message).to.equal('Product not found');
  });
});
