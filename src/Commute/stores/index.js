import RequestService from '../services/RequestService/RequestAPI.api';
import ShareService from '../services/ShareService/ShareAPI.api';
import RequestStore from './RequestStore';
import ShareStore from './ShareStore';
const requestService = new RequestService();
const shareService = new ShareService();
const requestStore = new RequestStore(requestService);
const shareStore = new ShareStore(shareService);
export default {requestStore,shareStore};