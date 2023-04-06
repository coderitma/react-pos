import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const PembelianService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

PembelianService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/pembelian`, CONFIG_HTTP);
};

PembelianService.create = (pembelian) => {
  CONFIG_HTTP.params = null;
  return HTTPService.post(
    `${config.BASE_URL}/pembelian`,
    pembelian,
    CONFIG_HTTP
  );
};

PembelianService.get = (kodePembelian) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(
    `${config.BASE_URL}/pembelian/${kodePembelian}`,
    CONFIG_HTTP
  );
};

export default PembelianService;
