import AuthService from '../services/AuthService/AuthAPI.js';
import AuthStore from './AuthStore/index.js';
const authStore = new AuthStore(new AuthService());
export default {authStore};
