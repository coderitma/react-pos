import { useLocation } from "react-router-dom";

const POSPrintPage = () => {
  const location = useLocation();
  const { data } = location.state;

  return <div>{JSON.stringify(data)}</div>;
};

export default POSPrintPage;
