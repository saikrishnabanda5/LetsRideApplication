import AuthService from '../services/AuthService/AuthAPI.api';
import AuthStore from './AuthStore/index.js';
const authStore = new AuthStore(new AuthService());
export default {authStore};
