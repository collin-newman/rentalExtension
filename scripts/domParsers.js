window.re = window.re || {};

window.re.extractDataFromRedfinDom = function () {
  // Find the parent div with the class 'home-main-stats-variant'
  const statsDiv = document.querySelector(".home-main-stats-variant");

  // If the statsDiv exists, extract the data
  if (statsDiv) {
    let data = {};

    // Extract price
    const priceSection = statsDiv.querySelector(
      '[data-rf-test-id="abp_price"] .statsValue'
    );
    if (priceSection) {
      data.price = priceSection.textContent.trim();
    }

    // Extract number of beds
    const bedsSection = statsDiv.querySelector(
      '[data-rf-test-id="abp_beds"] .statsValue'
    );
    if (bedsSection) {
      data.beds = bedsSection.textContent.trim();
    }

    // Extract number of baths
    const bathsSection = statsDiv.querySelector(
      '[data-rf-test-id="abp_baths"] .statsValue'
    );
    if (bathsSection) {
      data.baths = bathsSection.textContent.trim();
    }

    // Extract square footage
    const sqFtSection = statsDiv.querySelector(
      '[data-rf-test-id="abp_sqFt"] .statsValue'
    );
    if (sqFtSection) {
      data.sqFt = sqFtSection.textContent.trim();
    }

    return data;
  } else {
    return "The parent div with class 'home-main-stats-variant' was not found.";
  }
};

window.re.extractZillowData = function () {
  // data-testid = price
  let price = document.querySelector('[data-testid="price"]')?.textContent;
  if (price) {
    price = parseInt(price.replace(/\D/g, ""));
  }
  // query dom by text "Rent Zestimate"
  const elements = Array.from(document.querySelectorAll("p"));
  const rentEstimateElement = elements.find((el) =>
    el.textContent.includes("Rent Zestimate")
  );

  let rent = null;
  if (rentEstimateElement) {
    const rentText =
      rentEstimateElement.parentElement?.nextElementSibling?.textContent;
    // parse int from '$1,885/mo'
    rent = parseInt(rentText.replace(/\D/g, ""));
  }

  return {
    price,
    rent,
  };
};

window.re.getRentInput = function () {
  return document.querySelector("#rentInput").value;
};
