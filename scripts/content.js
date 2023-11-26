console.log("Loaded Rental Extension", window.re);
let data = {};
setTimeout(() => {
  switch (window.location.hostname) {
    case "www.zillow.com":
      data = window.re.extractZillowData();
      break;
    case "www.redfin.com":
      data = window.re.extractRedfinData();
      break;
    default:
      console.log("Unsupported site");
  }

  console.log("data", data);
  window.re.evaluateUnit(data.price, data.rent);
}, 2000);
