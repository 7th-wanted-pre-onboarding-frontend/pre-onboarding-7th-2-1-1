import request from '../server/request';

class CarsService {
  getCars(params = {}) {
    return request.get('/api/cars', {
      params
    });
  }
}

export default new CarsService();
