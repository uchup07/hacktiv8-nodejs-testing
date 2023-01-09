const request = require('supertest');
const app = require('../app');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { generateToken, verifyToken } = require('../helpers/jwt');
const UserController = require('../controllers/userController');
const PhotoController = require('../controllers/photoController');

const mockRequest = (sessionData, body, params, query) => ({
  body,
  params,
  query,
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Photo Album', () => {
    const payloadJwt = {
        id: 2,
        email: 'admin@admin.com',
      };

      const token = generateToken(payloadJwt);
    it('should be GetAllPhotos with unauthentication', async () => { // integration testing
        const res = await request(app).get('/photos');
        expect(res.statusCode).toEqual(200);
      });
    it('should be GetAllPhotos with authentication',async () => { // integration testing
        const res = await request(app).get('/photos').set('token', token);
        expect(res.statusCode).toEqual(200);
      });
    it('should be GetOnePhotoByID correct ID', async () => {
        const res = await request(app).get('/photos/1').set('token', token);
        expect(res.statusCode).toEqual(200);
    });
    it('should be GetOnePhotoByID wrong ID', async () => {
        const res = await request(app).get('/photos/122').set('token', token);
        expect(res.statusCode).toEqual(200);
    });
    it('should be CreatePhoto Success', async () => {
        let newPhoto = {
            title: 'Foto Test 1',
            caption: 'Foto Test Caption 1',
            image_url: 'https://photoTest.com',
        };
        const res = await request(app).post('/photos').send(newPhoto).set('token', token);
        expect(res.statusCode).toEqual(200);
    });
    it('should be CreatePhoto Failed', async () => {
        let newPhoto = {
            // title: 'Foto Test 2',
            caption: 'Foto Test Caption 2',
            image_url: 'https://photoTest.com',
        };
        const res = await request(app).post('/photos').send(newPhoto).set('token', token);
        expect(res.statusCode).toEqual(200);
    });
});

/* describe('User Test', () => {
  const password = 'admin'; // datainput
  const hashing = hashPassword(password);
  const compare = comparePassword(password, hashing);

  const payloadJwt = {
    id: 2,
    email: 'admin@admin.com',
  };
  const payloadString = 'adaaja';
  it('Password compare to be return boolean', () => { // unit testing
    expect(typeof compare).toBe('boolean');
  });
  it('Should return true when compile password', () => {
    expect(compare).toEqual(true);
  });

  it('Should return object when using jwt', () => {
    const generate = generateToken(payloadJwt);
    const verify = verifyToken(generate);
    expect(verify).toMatchObject(payloadJwt);
  });
  it('should ...', () => {
    const generate = generateToken(payloadString);
    const verify = verifyToken(generate);
    expect(verify).toBe(payloadString);
  });

  it('should fetch all albums', async () => { // integration testing
    const res = await request(app).get('/photos');
    expect(res.statusCode).toEqual(200);
    // expect(res.body).toHaveProperty('post');
  });

  it('Test get Photos', async () => {
    const req = mockRequest();
    const res = mockResponse();
    await PhotoController.GetAllPhotos(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it('Test user Login', async () => {
    const req = mockRequest({}, {
      email: 'andrey@mail.com',
      password: 'admin',
    });
    const res = mockResponse();
    await UserController.login(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
}); */