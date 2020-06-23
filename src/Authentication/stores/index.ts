import AuthService from '../services/AuthService/AuthAPI.fixture';
import AuthStore from './AuthStore';
const authStore = new AuthStore(new AuthService());
export default {authStore};
