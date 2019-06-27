import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../index';

const { expect } = chai;

chai.use(chaiHttp);

describe('test run', () => {
  it('foo is string', () => {
    expect('foo').to.be.a('string');
  });
});

describe('test chai-http', () => {
  it('run chai', (done) => {
    chai
      .request(app)
      .get('/')
      .end((req, res) => {
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property('message');
        done();
      });
  });
});
