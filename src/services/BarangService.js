import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const BarangService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

BarangService.list = () => {
  return HTTPService.get(`${config.BASE_URL}/barang`, CONFIG_HTTP);
};

export default BarangService;
