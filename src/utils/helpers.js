const helperDuplicatedInArrayObject = (item, by, array) => {
  let isDuplicate = false;
  for (let obj of array) {
    if (item[by] === obj[by]) {
      isDuplicate = true;
    }
  }

  return isDuplicate;
};

const helperReadableCurrency = (num) => {
  let n = parseInt(num).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return n;
};

const helperHandlerExportResponse = (response, resolve, filename) => {
  const href = URL.createObjectURL(response.data);
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("donwload", `${filename}-${new Date().getTime()}.xlsx`);
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(href);
  resolve(true);
};

const helperReadableDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let d = new Date(Date.parse(date));
  return d.toLocaleDateString("id-ID", {
    timeZone: "Asia/Jakarta",
    ...options,
  });
};

export {
  helperReadableCurrency,
  helperReadableDate,
  helperDuplicatedInArrayObject,
  helperHandlerExportResponse,
};
