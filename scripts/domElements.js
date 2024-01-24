window.re.addRentInput = () => {
  // add an input element to the start of the docment body
  const input = document.createElement("input");
  input.type = "number";
  input.id = "rentInput";
  input.placeholder = "Enter rent";
  input.style.height = "30px";
  input.style.fontSize = "20px";
  input.style.padding = "5px";
  input.style.border = "1px solid black";
  input.style.borderRadius = "5px";
  input.style.backgroundColor = "white";
  input.style.color = "black";
  input.style.fontFamily = "Arial";
  input.style.fontWeight = "bold";
  input.style.textAlign = "center";
  input.style.boxShadow = "0px 0px 5px 0px rgba(0,0,0,0.75)";
  // append to element with data-testid "home-details-chip-container"
  const parent = document.querySelector(
    "[data-testid='home-details-chip-container']"
  );
  parent.append(input);
};
