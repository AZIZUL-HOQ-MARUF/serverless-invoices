import storage from '@/config/storage.config';
import local from '@/services/adapters/local.adapter';
import http from '@/services/adapters/http.adapter';
import wordpress from '@/services/adapters/wordpress.adapter';

class DataService {
  adapter = null;

  constructor() {
    if (storage.type === 'local') {
      this.adapter = local;
    } else if (storage.type === 'http') {
      this.adapter = http;
    } else if (storage.type === 'wordpress') {
      this.adapter = wordpress;
    }
  }

  get(uri) {
    return this.adapter.get(uri);
  }

  post(uri, data) {
    return this.adapter.post(uri, data);
  }

  patch(uri, data) {
    return this.adapter.patch(uri, data);
  }

  put(uri, data) {
    return this.adapter.put(uri, data);
  }

  delete(uri) {
    return this.adapter.delete(uri);
  }
}

export default new DataService();
