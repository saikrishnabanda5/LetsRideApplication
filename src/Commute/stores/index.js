import RequestService from '../services/RequestRideService/RequestRideAPI.api';
import ShareTravelInfoService from '../services/ShareTravelInfoService/ShareTravelInfoAPI.api';
import RequestStore from './RequestStore';
const requestService = new RequestService()
const requestStore = new RequestStore(requestService);
export default {requestStore}