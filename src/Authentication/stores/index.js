import AuthService from '../services/AuthService/AuthAPI.fixture';
import AuthStore from './AuthStore/index.js';
const authStore = new AuthStore(new AuthService());
export default {authStore};
