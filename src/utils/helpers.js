const helperReadableCurrency = (num) => {
  let n = parseInt(num).toFixed(0).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return n;
};

export { helperReadableCurrency };
