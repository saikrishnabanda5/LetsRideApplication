import RequestService from '../services/RequestService/RequestAPI.fixture';
import ShareService from '../services/ShareService/ShareAPI.fixture';
import RequestStore from './RequestStore';
import ShareStore from './ShareStore';
const requestStore = new RequestStore(new RequestService());
const shareStore = new ShareStore(new ShareService());
export default {requestStore,shareStore};