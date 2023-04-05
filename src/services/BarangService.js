import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const BarangService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

BarangService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/barang`, CONFIG_HTTP);
};

BarangService.create = (barang) => {
  CONFIG_HTTP.params = null;
  return HTTPService.post(`${config.BASE_URL}/barang`, barang, CONFIG_HTTP);
};

BarangService.get = (kodeBarang) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(
    `${config.BASE_URL}/barang/${kodeBarang}`,
    CONFIG_HTTP
  );
};

export default BarangService;
